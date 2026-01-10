import Link from 'next/link';
import { getSiteConfig } from '@/lib/api';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    const config = getSiteConfig();
    const year = new Date().getFullYear();

    // Default nav links if not present in config
    const navLinks = config.nav || [
        { label: "Home", href: "/" },
        { label: "Floor Plans", href: "/floor-plans" },
        { label: "Neighborhood", href: "/neighborhood" },
        { label: "Contact", href: "/contact" }
    ];

    const phoneNumber = config.phone_number || config.phone || "";

    // Handle address object or string
    const addressString = typeof config.address === 'object'
        ? `${config.address.street}, ${config.address.city}, ${config.address.state} ${config.address.zip}`
        : config.address;

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand & Address */}
                    <div>
                        <h3 className="text-white text-lg font-serif font-bold mb-4">{config.site_title || config.name}</h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary" />
                                <span>{addressString}</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-primary" />
                                <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="hover:text-white">
                                    {phoneNumber}
                                </a>
                            </div>
                            {config.email && (
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 mr-3 text-primary" />
                                    <a href={`mailto:${config.email}`} className="hover:text-white">
                                        {config.email}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {navLinks.map((item: any) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-primary transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About / tagline */}
                    <div>
                        <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">About Us</h3>
                        <p className="text-sm leading-relaxed">
                            {config.description || config.seo_description || "Affordable Independent Senior Living"}
                        </p>
                        <p className="mt-4 text-xs text-gray-500">
                            We are an equal opportunity housing provider.
                        </p>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; {year} {config.site_title || config.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
