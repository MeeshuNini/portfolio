"use client";

import { useState, useEffect } from "react";

interface TextSegment {
    text: string;
    className?: string;
}

interface TypewriterEffectProps {
    segments: TextSegment[];
    speed?: number;
    className?: string;
}

const TypewriterEffect = ({ segments, speed = 100, className = "" }: TypewriterEffectProps) => {
    const [displayedSegments, setDisplayedSegments] = useState<TextSegment[]>([]);
    const [currentGlobalIndex, setCurrentGlobalIndex] = useState(0);

    // Calculate total length of all segments combined
    const totalLength = segments.reduce((acc, segment) => acc + segment.text.length, 0);

    useEffect(() => {
        if (currentGlobalIndex < totalLength) {
            const timeout = setTimeout(() => {
                setCurrentGlobalIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentGlobalIndex, totalLength, speed]);

    useEffect(() => {
        let charCount = 0;
        const newDisplayedSegments: TextSegment[] = segments.map((segment) => {
            const startIndex = charCount;
            charCount += segment.text.length;

            // Calculate how many characters of this segment should be revealed
            const revealedChars = Math.max(0, Math.min(segment.text.length, currentGlobalIndex - startIndex));

            // The rest should be empty string (no underscores)
            const underscores = "";

            return {
                text: segment.text.slice(0, revealedChars) + underscores,
                className: segment.className,
            };
        });

        setDisplayedSegments(newDisplayedSegments);
    }, [currentGlobalIndex, segments]);

    return (
        <span className={className}>
            {displayedSegments.map((segment, index) => (
                <span key={index} className={segment.className}>
                    {segment.text}
                </span>
            ))}
        </span>
    );
};

export default TypewriterEffect;
