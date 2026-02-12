import React, { useRef, useEffect } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Configuration
        const particleCount = 100; // Number of dots
        const connectionDistance = 0; // No lines needed based on request, just dots
        const mouseRepelRadius = 150; // Radius of effect
        const mouseRepelForce = 1.2; // Strength of repulsion
        const baseColor = 'rgba(255, 255, 255, 0.4)'; // Dot color (More opaque)

        // Resize canvas
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        // Mouse state
        const mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        class Particle {
            constructor() {
                this.originX = Math.random() * canvas.width;
                this.originY = Math.random() * canvas.height;
                this.x = this.originX;
                this.y = this.originY;
                this.size = Math.random() * 2 + 1; // Random size 1-3px
                this.vx = 0;
                this.vy = 0;
                this.friction = 0.9;
                this.springFactor = 0.05;
            }

            update() {
                // Distance from mouse
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Repulsion logic (Magnet Effect)
                if (distance < mouseRepelRadius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseRepelRadius - distance) / mouseRepelRadius;
                    const repulsionStrength = force * mouseRepelForce * 10; // Stronger push

                    this.vx -= forceDirectionX * repulsionStrength;
                    this.vy -= forceDirectionY * repulsionStrength;
                }

                // Spring back to origin
                const returnDx = this.originX - this.x;
                const returnDy = this.originY - this.y;

                this.vx += returnDx * this.springFactor;
                this.vy += returnDy * this.springFactor;

                // Apply friction
                this.vx *= this.friction;
                this.vy *= this.friction;

                // Update position
                this.x += this.vx;
                this.y += this.vy;
            }

            draw() {
                ctx.fillStyle = baseColor;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            // Create a grid of particles for a uniform look, or random?
            // User said "little white dots", usually implies a pattern or random distribution.
            // Let's go with random for "stars/dust" feel, or grid for "tech" feel.
            // Grid is often cleaner for "magnetic" effects.

            const spacing = 40;
            const cols = Math.ceil(canvas.width / spacing);
            const rows = Math.ceil(canvas.height / spacing);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const p = new Particle();
                    p.originX = i * spacing + spacing / 2;
                    p.originY = j * spacing + spacing / 2;
                    p.x = p.originX;
                    p.y = p.originY;
                    particles.push(p);
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove); // Attach to window to catch movement even outside? No, maybe canvas parent.
        // Actually, attaching to window is safer for broad movements.

        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default InteractiveBackground;
