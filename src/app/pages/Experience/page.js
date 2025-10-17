export default function Experience() {
    const experiences = [
        {
            company: "Rialtes Technology Pvt Ltd.",
            role: "Frontend Developer",
            duration: "May 2025 - Present",
            location: "Pune, Maharashtra",
            description: "Developed server-side rendered pages using Next.js, improving load speed and SEO performance. Built responsive UI layouts with Tailwind CSS for design consistency. Implemented SEO best practices to boost organic search visibility.",
            technologies: [
                'Next Js', 'Tailwind Css', 'Next.js i18n', 'Azure'
            ]
        },
        {
            company: "PHN Technology Pvt Ltd",
            role: "Software Engineer",
            duration: "Apr 2023 - Aug 2024",
            location: "Pune, Maharashtra",
            description: "Developed responsive web pages using HTML5, CSS3, Bootstrap, and JavaScript. Built reusable React.js components and integrated Laravel dashboards with real-time APIs. Optimized website performance by 90%.",
            technologies: [
                'Html', 'Css', 'Javascript', 'Bootstrap', 'React Js', 'Laravel', 'API Integration',
                'PHP MyAdmin', 'Figma'
            ]
        }

    ];

    return (
        <section>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="rounded-lg p-8 border border-zinc-600 hover:border-zinc-700 transition-colors">
                        {/* Header */}
                        <div className="lg:flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-white text-2xl font-bold mb-2">
                                    {exp.company}
                                </h2>
                                <p className="text-blue-400 text-lg font-medium">
                                    {exp.role}
                                </p>
                            </div>
                            <div className="lg:text-right max-lg:mt-4">
                                <p className="text-zinc-300 text-base">
                                    {exp.duration}
                                </p>
                                <p className="text-zinc-400 text-sm mt-1">
                                    {exp.location}
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <p className="text-zinc-300 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-3 py-1.5 bg-zinc-900 text-zinc-300 rounded text-sm font-medium hover:bg-zinc-700 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}