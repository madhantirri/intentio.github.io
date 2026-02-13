import React from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    // ----------------------------------------------------------------------
    // PASTE YOUR GOOGLE SHEET WEB APP URL HERE
    // ----------------------------------------------------------------------
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyiSEL2VCIlYjS2ubadIW98os9YWfKnXyMdOF4m46RM6EWxeWC5_DywK8TicufB6DSj/exec";

    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        hospital: '',
        inquiryType: 'General Inquiry',
        message: ''
    });

    const [status, setStatus] = React.useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (GOOGLE_SCRIPT_URL === "PASTE_YOUR_WEB_APP_URL_HERE") {
            alert("Please paste your Google Script URL in the code first!");
            return;
        }

        setStatus({ submitting: true, submitted: false, error: null });

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Sheets
                headers: {
                    'Content-Type': 'text/plain', // Use text/plain to avoid CORS preflight
                },
                body: JSON.stringify(formData)
            });

            // Since mode is no-cors, we assume success if no network error
            setStatus({ submitting: false, submitted: true, error: null });
            setFormData({
                fullName: '',
                email: '',
                hospital: '',
                inquiryType: 'General Inquiry',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, submitted: false }));
            }, 5000);

        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus({ submitting: false, submitted: false, error: "Something went wrong. Please try again." });
        }
    };

    return (
        <section id="contact" className="py-24 bg-gray-50">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    <div>
                        <span className="text-secondary font-bold tracking-wide uppercase text-sm mb-2 block">Get in Touch</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Transforming Bone Biopsy Standards.</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Intentio Biopsy eliminates the guesswork in bone marrow procedures. Contact us to learn more about our clinical trails and purchasing options.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: MapPin, label: "Headquarters", text: "Ahmedabad, Gujarat, India" },
                                { icon: Mail, label: "Email", text: "contact@intentio.in" },
                                { icon: Phone, label: "Business", text: "+91 98765 43210" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary shrink-0">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{item.label}</h4>
                                        <p className="text-gray-600">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
                        {status.submitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-600">Thank you for your inquiry. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus(prev => ({ ...prev, submitted: false }))}
                                    className="mt-6 text-secondary font-semibold hover:text-secondary-dark"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                            placeholder="Dr. John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                            placeholder="john@hospital.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Hospital / Institution</label>
                                    <input
                                        name="hospital"
                                        value={formData.hospital}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        placeholder="City General Hospital"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                                    <div className="relative">
                                        <select
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all appearance-none bg-white"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Request a Demo</option>
                                            <option>Investment Opportunity</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                {status.error && (
                                    <div className="text-red-500 text-sm text-center">{status.error}</div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status.submitting}
                                    className="w-full btn btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status.submitting ? 'Sending...' : 'Send Inquiry'}
                                    {!status.submitting && <Send size={18} />}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
