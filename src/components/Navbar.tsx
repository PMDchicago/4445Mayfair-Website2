import Link from 'next/link';
import { getSiteConfig } from '@/lib/api';
import { AccessibilityWidget } from './AccessibilityWidget';
import { Phone } from 'lucide-react';

export function Navbar() {
    const config = getSiteConfig();

    // Default nav links if not present in config
    const navLinks = config.nav || [
        { label: "Home", href: "/" },
        { label: "Floor Plans", href: "/floor-plans" },
        { label: "Neighborhood", href: "/neighborhood" },
        { label: "Contact", href: "/contact" }
    ];

    const phoneNumber = config.phone_number || config.phone || "";

    return (
        <nav className="border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex flex-col">
                            <span className="text-2xl font-serif font-bold text-foreground tracking-tight">
                                {config.site_title || config.name}
                            </span>
                            <span className="text-xs text-primary font-medium tracking-wide uppercase">
                                Senior Living
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:ml-6 md:flex md:space-x-8 items-center">
                        {navLinks.map((item: any) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-semibold transition-colors uppercase tracking-wide"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Phone CTA */}
                        {phoneNumber && (
                            <a
                                href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
                                className="flex items-center text-secondary font-bold mr-4"
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                {phoneNumber}
                            </a>
                        )}

                        {/* Accessibility */}
                        <div className="border-l pl-4 border-gray-200">
                            <AccessibilityWidget />
                        </div>
                    </div>

                    {/* Mobile Menu Button (Simplified for now - hidden logic) */}
                    <div className="flex md:hidden items-center">
                        <AccessibilityWidget />
                        {/* Mobile menu implementation would go here */}
                    </div>
                </div>
            </div>
        </nav>
    );
}
