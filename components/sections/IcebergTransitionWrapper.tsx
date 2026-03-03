"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IcebergTransitionWrapper({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const icebergRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background color morph: Cream → Sage Green
            gsap.to(containerRef.current, {
                backgroundColor: "#7D907E",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                },
            });

            // Iceberg parallax: drifts upward ("diving" sensation) as user scrolls
            gsap.fromTo(
                icebergRef.current,
                { y: 60 },
                {
                    y: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2,
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative"
            style={{ backgroundColor: "#F9F7F2" }}
        >
            {/* Iceberg illustration — absolute, centered, midground layer */}
            <div
                ref={icebergRef}
                className="absolute inset-x-0 top-1/4 pointer-events-none flex justify-center"
                style={{ zIndex: "var(--z-layer-midground)" }}
            >
                <Image
                    src="/illustrations/iceberg.png"
                    alt="Iceberg — conscious tip above, vast subconscious root system below"
                    width={1200}
                    height={560}
                    className="w-full max-w-5xl h-auto object-contain"
                    style={{ opacity: 0.18 }}
                    priority={false}
                />
            </div>

            {/* Foreground content — children must have transparent backgrounds */}
            <div className="relative" style={{ zIndex: "var(--z-layer-foreground)" }}>
                {children}
            </div>
        </div>
    );
}
