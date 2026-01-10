import * as Icons from 'lucide-react';

interface Feature {
    title: string;
    description: string;
    icon: string;
}

interface FeaturesListProps {
    features: Feature[];
}

export function FeaturesList({ features }: FeaturesListProps) {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {features.map((feature, idx) => {
                        // Dynamically access icon from lucide-react, fallback to Circle if not found
                        // @ts-ignore
                        const IconComponent = (Icons as any)[feature.icon] || Icons.Circle;

                        return (
                            <div key={idx} className="flex flex-col items-center p-6 rounded-lg">
                                <div className="bg-primary/10 p-4 rounded-full mb-6">
                                    <IconComponent className="w-10 h-10 text-primary" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3 font-serif">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
