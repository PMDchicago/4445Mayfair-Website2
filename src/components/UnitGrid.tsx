import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

interface Unit {
    title: string;
    price_range: string;
    sq_ft: number;
    features: string[];
    availability: string;
    income_restricted?: boolean;
    images?: string[];
}

interface UnitGridProps {
    units: Unit[];
    disclaimer?: string;
}

export function UnitGrid({ units, disclaimer }: UnitGridProps) {
    return (
        <section className="py-16 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Available Floor Plans</h2>
                    {disclaimer && <p className="text-gray-600 max-w-2xl mx-auto">{disclaimer}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {units.map((unit, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                            {/* Image Grid */}
                            {unit.images && unit.images.length > 0 && (
                                <div className="grid grid-cols-2 gap-0.5 aspect-[4/3] w-full">
                                    {unit.images.slice(0, 4).map((img, imgIdx) => (
                                        <div key={imgIdx} className="relative w-full h-full bg-gray-100">
                                            {/* Using explicit width/height for static export compatibility if needed, using img tag for simpler placeholder handling or Next Image unoptimized */}
                                            <img
                                                src={img}
                                                alt={`${unit.title} view ${imgIdx + 1}`}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="p-6 flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-primary">{unit.title}</h3>
                                    <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                        {unit.sq_ft} sq ft
                                    </span>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2 font-serif">
                                    {unit.price_range}<span className="text-sm font-normal text-gray-500"> /mo</span>
                                </div>
                                {unit.income_restricted && (
                                    <div className="mb-4">
                                        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Income Restricted</span>
                                    </div>
                                )}
                                <div className="mb-4 text-sm font-medium text-gray-500">
                                    Status: <span className={unit.availability === 'Available' ? 'text-green-600' : 'text-orange-600'}>{unit.availability}</span>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {unit.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-primary hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                                >
                                    Check Eligibility
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
