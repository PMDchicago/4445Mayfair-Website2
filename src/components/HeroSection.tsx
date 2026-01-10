import Link from 'next/link';

interface HeroProps {
    title: string;
    subtitle: string;
    image: string;
}

export function HeroSection({ title, subtitle, image }: HeroProps) {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
                style={{ backgroundImage: `url(${image})` }}
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight drop-shadow-md">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-100 max-w-2xl mx-auto drop-shadow-sm">
                    {subtitle}
                </p>
                <div className="pt-4">
                    <Link
                        href="/contact"
                        className="inline-block bg-accent hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
                    >
                        Join Waitlist
                    </Link>
                </div>
            </div>
        </div>
    );
}
