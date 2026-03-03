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
            // Background color morph: Cream → Sage Green as user scrolls through this section
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
                { y: 0 },
                {
                    y: -150,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5,
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden"
            style={{ backgroundColor: "#F9F7F2" }}
        >
            {/* Iceberg illustration — midground layer, parallaxed upward on scroll */}
            <div
                ref={icebergRef}
                className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center"
                style={{ zIndex: "var(--z-layer-midground)" }}
            >
                <div className="relative w-full max-w-4xl px-4">
                    <Image
                        src="/illustrations/iceberg.png"
                        alt="Iceberg illustration — conscious tip above, vast subconscious root system below"
                        width={1024}
                        height={480}
                        className="w-full h-auto object-contain opacity-25 md:opacity-35 select-none"
                        priority={false}
                    />
                </div>
            </div>

            {/* Foreground: PainMirror + DeeperPain sections */}
            <div style={{ position: "relative", zIndex: "var(--z-layer-foreground)" }}>
                {children}
            </div>
        </div>
    );
}
