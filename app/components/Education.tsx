"use client";

const Education = () => {
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
        <section id="education" className="section-padding bg-background">
            <div className="container-width">
                <h2 className="text-3xl font-bold text-foreground mb-16">Education</h2>
                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <div key={index} className="relative pl-8 sm:pl-12 border-l border-border/50">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl font-semibold text-foreground">{edu.institution}</h3>
                                <span className="text-sm font-medium text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full mt-1 sm:mt-0 w-fit">
                                    {edu.period}
                                </span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                <span className="text-base text-primary font-medium">{edu.degree}</span>
                                <span className="hidden sm:inline text-muted-foreground">•</span>
                                <span className="text-sm text-muted-foreground">{edu.location}</span>
                            </div>
                            <p className="text-muted-foreground font-medium">{edu.gpa}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
