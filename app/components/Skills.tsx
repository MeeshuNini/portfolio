"use client";

import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub, FaDatabase,
    FaBootstrap, FaChartBar, FaChartArea, FaRocket, FaLanguage, FaBrain, FaCogs
} from "react-icons/fa";
import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiFastapi, SiMongodb, SiPostgresql, SiCplusplus,
    SiStreamlit, SiNumpy, SiPandas, SiScikitlearn, SiPlotly, SiSpacy, SiJupyter, SiPostman, SiMysql
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="w-10 h-10" /> },
        { name: "CSS3", icon: <FaCss3Alt className="w-10 h-10" /> },
        { name: "JavaScript", icon: <FaJs className="w-10 h-10" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-10 h-10" /> },
        { name: "React.js", icon: <FaReact className="w-10 h-10" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10" /> },
        { name: "Node.js", icon: <FaNodeJs className="w-10 h-10" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="w-10 h-10" /> },
        { name: "Python", icon: <FaPython className="w-10 h-10" /> },
        { name: "Java", icon: <FaJava className="w-10 h-10" /> },
        { name: "C++", icon: <SiCplusplus className="w-10 h-10" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-10 h-10" /> },
        { name: "Streamlit", icon: <SiStreamlit className="w-10 h-10" /> },
        { name: "SQL", icon: <FaDatabase className="w-10 h-10" /> },
        { name: "MySQL", icon: <SiMysql className="w-10 h-10" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-10 h-10" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10" /> },
        { name: "Git", icon: <FaGitAlt className="w-10 h-10" /> },
        { name: "GitHub", icon: <FaGithub className="w-10 h-10" /> },
        { name: "VS Code", icon: <VscVscode className="w-10 h-10" /> },
        { name: "Jupyter", icon: <SiJupyter className="w-10 h-10" /> },
        { name: "Postman", icon: <SiPostman className="w-10 h-10" /> },
        // Data Science & ML
        { name: "NumPy", icon: <SiNumpy className="w-10 h-10" /> },
        { name: "Pandas", icon: <SiPandas className="w-10 h-10" /> },
        { name: "Matplotlib", icon: <FaChartBar className="w-10 h-10" /> },
        { name: "Seaborn", icon: <FaChartArea className="w-10 h-10" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="w-10 h-10" /> },
        { name: "XGBoost", icon: <FaRocket className="w-10 h-10" /> },
        { name: "Plotly", icon: <SiPlotly className="w-10 h-10" /> },
        { name: "spaCy", icon: <SiSpacy className="w-10 h-10" /> },
        { name: "NLP (NLTK/TextBlob)", icon: <FaLanguage className="w-10 h-10" /> },
        { name: "Machine Learning", icon: <FaBrain className="w-10 h-10" /> },
        { name: "EDA & Data Viz", icon: <FaChartBar className="w-10 h-10" /> },
    ];

    return (
        <section id="skills" className="section-padding bg-card/30 overflow-hidden relative">
            <div className="container-width">
                <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Skills & Technologies</h2>

                <div className="relative w-full overflow-hidden mask-gradient-x">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    <div className="flex w-max animate-scroll">
                        {/* First Set */}
                        <div className="flex gap-8 px-4">
                            {skills.map((skill, index) => (
                                <div
                                    key={`skill-1-${index}`}
                                    className="bg-card w-40 h-40 p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center gap-4 group shrink-0"
                                >
                                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </div>
                                    <span className="text-foreground font-medium text-center text-sm">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Duplicate Set for Seamless Loop */}
                        <div className="flex gap-8 px-4">
                            {skills.map((skill, index) => (
                                <div
                                    key={`skill-2-${index}`}
                                    className="bg-card w-40 h-40 p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center gap-4 group shrink-0"
                                >
                                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </div>
                                    <span className="text-foreground font-medium text-center text-sm">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
