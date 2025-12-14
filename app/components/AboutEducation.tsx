"use client";

const AboutEducation = () => {
    const education = [
        {
            institution: "International Institute of Information Technology (IIIT)",
            location: "Hyderabad, India",
            degree: "Master of Science in Data Science",
            period: "Jul. 2024 – Present",
            gpa: "CGPA: 9.34/10",
        },
        {
            institution: "Sri Venkateswara University (SVU)",
            location: "Tirupati, India",
            degree: "Bachelor of Technology in Chemical Engineering (Gold Medalist)",
            period: "Aug. 2017 – Jul 2021",
            gpa: "CGPA: 9.08/10",
        },
        {
            institution: "Sri Chaitanya Junior College",
            location: "Nellore, India",
            degree: "Higher Secondary Education (Class XII)",
            period: "Jun. 2015 – Mar. 2017",
            gpa: "CGPA: 9.81/10",
        },
        {
            institution: "Sanghamitra Vidyalayam",
            location: "Nellore, India",
            degree: "Secondary Education (Class X)",
            period: "Jun. 2014 – Mar. 2015",
            gpa: "CGPA: 9.8/10",
        },
    ];

    return (
        <section id="about-education" className="section-padding bg-background">
            <div className="container-width">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* About Me Column */}
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">About Me</h2>
                        <div className="prose dark:prose-invert max-w-none text-muted-foreground text-justify">
                            <p className="mb-4">
                                Hello! I’m Padmasahithi, a full-stack developer who loves building scalable web applications and enjoys a good cup of coffee while doing it.
                                I turn complex ideas into clean, efficient code and genuinely enjoy the problem-solving that comes with it.
                            </p>
                            <p className="mb-4">
                                With a strong foundation across both frontend and backend, I focus on creating seamless user experiences backed by reliable, well-structured systems.
                                I care about how things look, how they work, and how they feel to use.
                            </p>
                            <p className="mb-4">
                                I’m the kind of developer who likes understanding the why behind the code—not just making it work, but making it better.
                                I enjoy learning new technologies, experimenting with ideas, and refining my craft one project at a time.
                            </p>
                            <p>
                                When I’m not coding, you’ll probably find me with coffee in hand, a cat nearby, or exploring projects that make the web a little more thoughtful, functional, and fun.
                            </p>
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Education & Certifications</h2>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md flex gap-4 items-start"
                                >
                                    {/* Icon */}
                                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                                        <svg
                                            className="w-6 h-6 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-primary mb-1">{edu.degree}</h3>
                                        <p className="text-foreground font-medium mb-1">{edu.institution}, {edu.location}</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-sm text-muted-foreground bg-secondary/10 px-2 py-0.5 rounded">
                                                {edu.period}
                                            </span>
                                            <span className="text-sm font-medium text-muted-foreground">
                                                {edu.gpa}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutEducation;
