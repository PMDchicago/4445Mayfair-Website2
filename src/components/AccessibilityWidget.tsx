'use client';

import { useState, useEffect } from 'react';
import { Type } from 'lucide-react';

export function AccessibilityWidget() {
    const [fontSize, setFontSize] = useState<number>(100);

    useEffect(() => {
        // initialize from local storage or default
        const saved = localStorage.getItem('website-font-size');
        if (saved) {
            const size = parseInt(saved);
            setFontSize(size);
            document.documentElement.style.fontSize = `${size}%`;
        }
    }, []);

    const toggleFontSize = () => {
        const newSize = fontSize >= 125 ? 100 : fontSize + 12.5; // Toggle between 100 -> 112.5 -> 125 -> 100
        setFontSize(newSize);
        document.documentElement.style.fontSize = `${newSize}%`;
        localStorage.setItem('website-font-size', newSize.toString());
    };

    return (
        <button
            onClick={toggleFontSize}
            className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
            aria-label="Toggle font size"
            title="Increase Font Size"
        >
            <Type className="h-5 w-5" />
            <span className="hidden md:inline">
                {fontSize > 100 ? 'Reset Text' : 'Large Text'}
            </span>
        </button>
    );
}
