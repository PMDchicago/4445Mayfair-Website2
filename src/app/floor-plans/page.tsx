import { getUnitsConfig } from '@/lib/api';
import { UnitGrid } from '@/components/UnitGrid';

export default function FloorPlansPage() {
    const config = getUnitsConfig();
    const units = config.units || [];
    // Disclaimer is no longer in units.yaml, using a default or relying on UnitGrid internal logic
    const disclaimer = "Income restrictions apply (LIHTC). 62+ only.";

    return (
        <div className="min-h-screen bg-background">
            <div className="bg-primary/10 py-12 text-center">
                <h1 className="text-4xl font-serif font-bold text-foreground">Floor Plans & Pricing</h1>
                <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                    Explore our spacious and affordable unit options designed for your comfort.
                </p>
            </div>

            <UnitGrid units={units} disclaimer={disclaimer} />
        </div>
    );
}
