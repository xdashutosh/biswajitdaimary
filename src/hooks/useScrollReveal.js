import { useEffect, useRef } from 'react';

/**
 * Lightweight hook to replace framer-motion's whileInView.
 * Uses IntersectionObserver to add 'is-visible' class when elements scroll into view.
 * 
 * Usage:
 *   const ref = useScrollReveal();
 *   <div ref={ref} className="animate-on-scroll">...</div>
 */
export function useScrollReveal(options = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible');
                    observer.unobserve(el); // only animate once
                }
            },
            { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || '0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}

/**
 * Hook to observe multiple children inside a container.
 * All children with 'animate-on-scroll' class get revealed on scroll.
 */
export function useScrollRevealChildren(options = {}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const children = container.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px' }
        );

        children.forEach(child => observer.observe(child));
        return () => observer.disconnect();
    }, []);

    return containerRef;
}
