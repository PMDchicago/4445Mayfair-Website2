import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { getSiteConfig } from '@/lib/api';

export default function ContactPage() {
    const config = getSiteConfig();
    const phoneNumber = config.phone_number || config.phone || "";

    // Handle address object or string
    const addressString = typeof config.address === 'object'
        ? `${config.address.street}, ${config.address.city}, ${config.address.state} ${config.address.zip}`
        : config.address;

    return (
        <div className="bg-background min-h-screen py-16 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* Contact Info */}
                    <div className="bg-primary p-12 text-white">
                        <h1 className="text-3xl font-serif font-bold mb-6">Contact Us</h1>
                        <p className="text-green-50 mb-12">
                            We'd love to hear from you. Reach out to schedule a tour or ask about availability.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center">
                                <Phone className="w-6 h-6 mr-4 opacity-80" />
                                <span className="text-lg font-semibold">{phoneNumber}</span>
                            </div>
                            {config.email && (
                                <div className="flex items-center">
                                    <Mail className="w-6 h-6 mr-4 opacity-80" />
                                    <span className="text-lg">{config.email}</span>
                                </div>
                            )}
                            {config.office_hours && (
                                <div className="flex items-center">
                                    <Clock className="w-6 h-6 mr-4 opacity-80" />
                                    <span className="text-lg">{config.office_hours}</span>
                                </div>
                            )}
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 mr-4 opacity-80 mt-1" />
                                <span className="text-lg w-2/3">{addressString}</span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            className="space-y-6"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition-colors shadow-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
