"use client";

const Experience = () => {
    const experiences = [
        {
            company: "BYOL ACADEMY",
            role: "AI/ML Intern",
            period: "September 2025 – Present",
            description: [
                "Contributed to development of current affairs platform using modern web technologies including Next.js, React, TypeScript, and MongoDB.",
                "Implemented responsive UI components with Tailwind CSS, including search functionality, calendar integration, and article cards with tag-based categorization.",
                "Built dark mode support across entire application ensuring consistent user experience in different lighting conditions.",
                "Developed database queries for content filtering, search operations, and date-based article retrieval using MongoDB aggregation.",
                "Collaborated on creating reusable React components for article display, modals, and PDF sidebar navigation."
            ],
        },
    ];

    return (
        <section id="experience" className="section-padding bg-card/30">
            <div className="container-width">
                <h2 className="text-3xl font-bold text-foreground mb-16 text-center">Professional Experience</h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 sm:pl-12 border-l border-border/50">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                                <span className="text-sm font-medium text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full mt-1 sm:mt-0 w-fit">
                                    {exp.period}
                                </span>
                            </div>
                            <div className="text-base text-primary font-medium mb-4">{exp.company}</div>
                            {Array.isArray(exp.description) ? (
                                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground leading-relaxed">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
