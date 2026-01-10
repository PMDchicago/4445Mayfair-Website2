import { MapPin, Bus, ShoppingCart, Coffee } from 'lucide-react';

export default function NeighborhoodPage() {
    return (
        <div className="bg-background min-h-screen">
            <div className="bg-gray-900 text-white py-20 px-4 text-center">
                <h1 className="text-4xl font-serif font-bold mb-4">The Neighborhood</h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-300">
                    Located in the heart of Albany Park, Mayfair Commons puts you close to everything you need.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Walk Score: 88</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            "Very Walkable" - Most errands can be accomplished on foot. We are just steps away from transit, grocery stores, and pharmacies.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-full mr-4">
                                    <MapPin className="w-6 h-6 text-green-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">Essentials Nearby</h3>
                                    <p className="text-gray-600">Walgreens (0.1 mi), Jewel-Osco (0.5 mi)</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <Bus className="w-6 h-6 text-blue-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">Transit</h3>
                                    <p className="text-gray-600">CTA Blue Line (Montrose), Bus #78 & #81</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                                    <Coffee className="w-6 h-6 text-yellow-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">Dining & Culture</h3>
                                    <p className="text-gray-600">Diverse restaurants on Lawrence Ave.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-lg relative">
                        {/* Placeholder for Map - In a real app, embed Google Maps iframe or Leaflet */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 flex-col">
                            <MapPin className="w-16 h-16 mb-4 text-gray-300" />
                            <span className="font-medium">Map Integration</span>
                            <span className="text-sm">(e.g., Google Maps Embed)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
