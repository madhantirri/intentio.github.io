import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const DeviceModel = () => {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const modelRef = useRef(null);
    const animFrameRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // If already initialized (StrictMode re-mount), just re-attach listeners
        if (sceneRef.current && rendererRef.current) {
            if (!containerRef.current.contains(rendererRef.current.domElement)) {
                containerRef.current.appendChild(rendererRef.current.domElement);
            }
            // Restart animation loop
            const animate = createAnimationLoop();
            animate();

            const handleScroll = createScrollHandler();
            const handleResize = createResizeHandler();
            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('resize', handleResize);

            return () => {
                if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleResize);
            };
        }

        // ======================
        // Scene
        // ======================
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // ======================
        // Camera — use container dimensions
        // ======================
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
        camera.position.set(2, 0.3, 4.5);
        camera.lookAt(0, 0, 0);
        cameraRef.current = camera;

        // ======================
        // Renderer — transparent background
        // ======================
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        renderer.setClearColor(0x000000, 0);
        rendererRef.current = renderer;

        containerRef.current.appendChild(renderer.domElement);

        // ======================
        // Lighting
        // ======================
        scene.add(new THREE.AmbientLight(0xffffff, 0.2));

        const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
        keyLight.position.set(4, 3, 3);
        scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
        fillLight.position.set(-3, 1, 3);
        scene.add(fillLight);

        const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
        backLight.position.set(-4, 1, -4);
        scene.add(backLight);

        // ======================
        // Load Model
        // ======================
        const loader = new GLTFLoader();
        loader.load(
            './models/modified.glb',
            (gltf) => {
                const model = gltf.scene;
                modelRef.current = model;

                // Apply manual transform directly — NO auto-centering
                model.position.set(1.995, -0.654, 0.000);
                model.rotation.set(1.448, -2.982, 2.598);
                model.scale.setScalar(0.340);

                // Holographic scan shader
                model.traverse((child) => {
                    if (child.isMesh) {
                        const originalMap = child.material.map || null;
                        child.material = new THREE.ShaderMaterial({
                            uniforms: {
                                time: { value: 0 },
                                baseColor: { value: new THREE.Color(0x4a90e2) },
                                scanColor: { value: new THREE.Color(0x00ffff) },
                                originalMap: { value: originalMap },
                                hasTexture: { value: originalMap !== null },
                                glowIntensity: { value: 1.0 },
                                opacityFactor: { value: 1.0 }
                            },
                            vertexShader: `
                                varying vec2 vUv;
                                varying vec3 vPosition;
                                varying vec3 vNormal;
                                varying vec3 vWorldPosition;
                                void main() {
                                    vUv = uv;
                                    vNormal = normalize(normalMatrix * normal);
                                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                                    vPosition = mvPosition.xyz;
                                    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
                                    gl_Position = projectionMatrix * mvPosition;
                                }
                            `,
                            fragmentShader: `
                                uniform float time;
                                uniform vec3 baseColor;
                                uniform vec3 scanColor;
                                uniform sampler2D originalMap;
                                uniform bool hasTexture;
                                uniform float glowIntensity;
                                uniform float opacityFactor;
                                varying vec2 vUv;
                                varying vec3 vPosition;
                                varying vec3 vNormal;
                                varying vec3 vWorldPosition;

                                void main() {
                                    vec4 texColor = vec4(baseColor, 1.0);
                                    if (hasTexture) {
                                        texColor = texture2D(originalMap, vUv);
                                    }

                                    float scanLine1 = sin(vWorldPosition.y * 8.0 + time * 5.0) * 0.5 + 0.5;
                                    scanLine1 = pow(scanLine1, 2.0) * 0.8;

                                    float scanLine2 = sin(vWorldPosition.x * 6.0 + time * 4.0) * 0.5 + 0.5;
                                    scanLine2 = pow(scanLine2, 2.0) * 0.6;

                                    float scanLine3 = sin((vWorldPosition.x + vWorldPosition.y) * 5.0 + time * 6.0) * 0.5 + 0.5;
                                    scanLine3 = pow(scanLine3, 2.0) * 0.7;

                                    float pulse = sin(vWorldPosition.x * 3.0 + vWorldPosition.y * 2.0 + vWorldPosition.z * 2.0 - time * 8.0);
                                    pulse = smoothstep(0.8, 1.0, pulse) * 0.9;

                                    float scanIntensity = max(max(scanLine1, scanLine2), max(scanLine3, pulse));
                                    scanIntensity *= glowIntensity;

                                    vec3 normal = normalize(vNormal);
                                    vec3 viewDir = normalize(-vPosition);
                                    float fresnel = 1.0 - dot(normal, viewDir);
                                    fresnel = pow(fresnel, 2.0) * 0.8 * glowIntensity;

                                    vec3 finalColor = mix(texColor.rgb, scanColor, scanIntensity * 0.7);
                                    finalColor = mix(finalColor, scanColor, fresnel * 0.6);

                                    float globalPulse = sin(time * 3.0) * 0.1 + 0.9;
                                    float alpha = (0.95 + scanIntensity * 0.3 + fresnel * 0.2) * opacityFactor;

                                    gl_FragColor = vec4(finalColor * globalPulse, alpha);
                                }
                            `,
                            transparent: true,
                            side: THREE.DoubleSide,
                            depthWrite: false,
                            blending: THREE.NormalBlending
                        });
                    }
                });

                scene.add(model);
                camera.lookAt(0, 0, 0);
            },
            undefined,
            (error) => console.error('GLB load error:', error)
        );

        // ======================
        // Animation Loop
        // ======================
        const animate = createAnimationLoop();
        animate();

        // ======================
        // Event Listeners
        // ======================
        const handleScroll = createScrollHandler();
        const handleResize = createResizeHandler();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        // Cleanup — cancel animation frame + remove listeners, keep scene alive
        return () => {
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // ======================
    // Animation Loop Factory
    // ======================
    function createAnimationLoop() {
        return function animate() {
            animFrameRef.current = requestAnimationFrame(animate);

            if (modelRef.current) {
                const time = performance.now() * 0.001;
                modelRef.current.traverse((child) => {
                    if (child.isMesh && child.material.uniforms) {
                        child.material.uniforms.time.value = time;
                    }
                });
            }

            if (rendererRef.current && sceneRef.current && cameraRef.current) {
                rendererRef.current.render(sceneRef.current, cameraRef.current);
            }
        };
    }

    // ======================
    // Scroll Handler — uses getBoundingClientRect
    // ======================
    function createScrollHandler() {
        return () => {
            if (!modelRef.current) return;

            // Use getBoundingClientRect for accurate section positions
            const aboutEl = document.getElementById('about');
            const productEl = document.getElementById('product');

            const viewportH = window.innerHeight;
            const scrollY = window.scrollY;

            const aboutStart = aboutEl ? aboutEl.getBoundingClientRect().top + scrollY - viewportH * 0.5 : 500;
            const productStart = productEl ? productEl.getBoundingClientRect().top + scrollY - viewportH : Infinity;
            // Stop point: when the Product section is fully visible on screen
            const stopStart = productEl ? productEl.getBoundingClientRect().top + scrollY : Infinity;

            // Everything freezes when the Product section is fully in view
            const reachedStop = scrollY >= stopStart;

            // === POSITION ===
            // Hero: right (1.995) → About: center (0) → Product: left (-3.2)
            // Y: Hero (-0.654) → About (0) → Product (0)
            const startX = 1.995;
            const startY = -0.654;
            if (scrollY < aboutStart) {
                const t = aboutStart > 0 ? Math.min(scrollY / aboutStart, 1) : 0;
                modelRef.current.position.x = THREE.MathUtils.lerp(startX, 0, t);
                modelRef.current.position.y = THREE.MathUtils.lerp(startY, 0, t);
            } else if (scrollY < productStart) {
                const range = productStart - aboutStart;
                const t = range > 0 ? Math.min((scrollY - aboutStart) / range, 1) : 1;
                modelRef.current.position.x = THREE.MathUtils.lerp(0, -3.2, t);
                modelRef.current.position.y = 0;
            } else {
                modelRef.current.position.x = -3.2;
                modelRef.current.position.y = 0;
            }

            // === ROTATION — continues until stop section ===
            if (!reachedStop) {
                const rotRange = stopStart > 0 ? stopStart : 1;
                const rotT = Math.min(scrollY / rotRange, 1);
                modelRef.current.rotation.z = 2.598 + (rotT * Math.PI * 0.8);
            }

            // === GLOW & OPACITY — fade only until stop section ===
            if (!reachedStop) {
                const effectRange = stopStart > 0 ? stopStart : 1;
                const effectT = Math.min(scrollY / effectRange, 1);
                const glowIntensity = THREE.MathUtils.lerp(1.0, 0.4, effectT);
                const opacityFactor = THREE.MathUtils.lerp(1.0, 0.6, effectT);
                modelRef.current.traverse((child) => {
                    if (child.isMesh && child.material && child.material.uniforms) {
                        child.material.uniforms.glowIntensity.value = glowIntensity;
                        child.material.uniforms.opacityFactor.value = opacityFactor;
                    }
                });
            }
            // else: glow & opacity frozen at last values

            // === PIN CONTAINER — stop following viewport at stop section ===
            if (containerRef.current) {
                if (reachedStop) {
                    containerRef.current.style.position = 'absolute';
                    containerRef.current.style.top = stopStart + 'px';
                } else {
                    containerRef.current.style.position = 'fixed';
                    containerRef.current.style.top = '0px';
                }
            }
        };
    }

    // ======================
    // Resize Handler — uses containerRef dimensions
    // ======================
    function createResizeHandler() {
        return () => {
            if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
            const w = containerRef.current.clientWidth;
            const h = containerRef.current.clientHeight;
            cameraRef.current.aspect = w / h;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(w, h);
        };
    }

    return (
        <div
            ref={containerRef}
            className="fixed top-0 left-0 w-full h-screen pointer-events-none z-50"
        />
    );
};

export default DeviceModel;