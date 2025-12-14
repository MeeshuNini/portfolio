"use client";

import { useState } from "react";
import Image from "next/image";
import TypewriterEffect from "./TypewriterEffect";

const Hero = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    // Inline styles for 3D transforms to ensure compatibility
    const wrapperStyle: React.CSSProperties = {
        perspective: "1000px",
        cursor: "pointer",
    };

    const flipperStyle: React.CSSProperties = {
        position: "relative",
        width: "100%",
        height: "100%",
        transition: "transform 0.7s",
        transformStyle: "preserve-3d",
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
    };

    const faceCommonStyle: React.CSSProperties = {
        position: "absolute",
        inset: 0,
        borderRadius: "9999px", // rounded-full
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)", // subtle border
    };

    const frontStyle: React.CSSProperties = {
        ...faceCommonStyle,
        // backgroundColor removed, using Tailwind class
        backdropFilter: "blur(16px) saturate(180%)",
        transform: "rotateY(0deg)",
        zIndex: 2,
    };

    const backStyle: React.CSSProperties = {
        ...faceCommonStyle,
        // backgroundColor removed, using Tailwind class
        transform: "rotateY(180deg)",
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden"
        >
            <div className="container-width m-0 w-full max-w-none flex flex-col md:flex-row items-start md:items-center justify-between gap-16">
                {/* Left Column: Text */}
                <div className="flex-1 text-left z-10">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-[1.1] animate-fade-in tracking-tight">
                        <TypewriterEffect
                            segments={[
                                { text: "I'm " },
                                { text: "Padmasahithi Kondeti", className: "text-primary" },
                                { text: ", a Passionate Full-Stack Developer." }
                            ]}
                        />
                    </h1>
                    <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl animate-fade-in delay-100 leading-relaxed font-mono">
                        Making the web a little more delightful, one project at a time.
                        I love building clean, responsive, and user-centric web applications with curiosity and care.
                    </p>

                    <div className="flex flex-wrap gap-5 animate-fade-in delay-200">
                        <a
                            href="https://github.com/MeeshuNini/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-md border border-border/40 bg-card/50 text-foreground font-medium hover:bg-secondary/20 transition-all flex items-center gap-3 text-sm hover:border-primary/50"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/PadmasahithiKondeti"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-md border border-border/40 bg-card/50 text-foreground font-medium hover:bg-secondary/20 transition-all flex items-center gap-3 text-sm hover:border-primary/50"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                            LinkedIn
                        </a>
                        <div className="relative">
                            <button
                                onClick={() => setIsResumeOpen(!isResumeOpen)}
                                className="px-6 py-3 rounded-md border border-border/40 bg-card/50 text-foreground font-medium hover:bg-secondary/20 transition-all flex items-center gap-3 text-sm hover:border-primary/50"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download CV
                                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isResumeOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isResumeOpen && (
                                <div className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-border/40 bg-card/95 backdrop-blur-xl shadow-xl overflow-hidden z-50 flex flex-col animate-fade-in-up">
                                    <a
                                        href="/resumes/full-stack.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-3 text-sm hover:bg-primary/10 hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                        Full Stack Developer
                                    </a>
                                    <div className="h-[1px] bg-border/40" />
                                    <a
                                        href="/resumes/ml-engineer.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-3 text-sm hover:bg-primary/10 hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        ML Engineer
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column: Visual */}
                <div className="flex-1 flex justify-center items-center relative z-0">
                    <div
                        style={wrapperStyle}
                        onMouseEnter={() => setIsFlipped(true)}
                        onMouseLeave={() => setIsFlipped(false)}
                        className="relative w-48 h-48 sm:w-[300px] sm:h-[300px]"
                    >
                        {/* Circular Background with Glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 blur-3xl opacity-40 animate-pulse" />

                        <div style={flipperStyle}>
                            {/* Front Face */}
                            <div style={frontStyle} className="shadow-2xl bg-background/75">
                                <span className="text-5xl sm:text-7xl font-bold text-primary tracking-tighter font-pacifico">
                                    &lt;Sahi/&gt;
                                </span>
                            </div>

                            {/* Back Face */}
                            <div style={backStyle} className="shadow-2xl bg-background/75">
                                <Image
                                    src="/profile-pic-2.png"
                                    alt="Padmasahithi"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#about-education"
                className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-primary cursor-pointer hover:text-primary/80 transition-colors"
                aria-label="Scroll to About section"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </a>
        </section>
    );
};

export default Hero;
