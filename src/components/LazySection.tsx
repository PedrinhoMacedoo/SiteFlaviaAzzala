import React, { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface LazySectionProps {
    children: ReactNode;
    minHeight?: string;
    threshold?: number;
    rootMargin?: string;
}

export const LazySection: React.FC<LazySectionProps> = ({
    children,
    minHeight = '50vh',
    threshold = 0,
    rootMargin = '100px 0px'
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = sectionRef.current;

        // Fallback pra navegadores muito antigos
        if (!window.IntersectionObserver) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Renderiza uma vez e para de observar
                }
            },
            {
                root: null,
                rootMargin,
                threshold,
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [rootMargin, threshold]);

    return (
        <div ref={sectionRef} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
            {isVisible ? children : null}
        </div>
    );
};
