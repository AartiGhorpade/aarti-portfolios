"use client";

export default function Other() {
    const sectionData = [
        {
            title: "Education",
            items: ["MCA — Bharati Vidyapeeth (2022)"],
        },
        {
            title: "Skill Set",
            items: ["Web Development", "App Development", "Web Design", "App Design", "Prototyping"],
        },
        {
            title: "Technical Skills",
            items: [
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Bootstrap",
                "Tailwind CSS",
                "Redux Toolkit"
            ]

        },
        {
            title: "Languages",
            items: ["English", "Hindi", "Marathi"],
        },
    ];

    return (
        <section>
            <div>
                {sectionData.map((section, index) => (
                    <div key={index} className="mt-10">
                        <h3 className="text-xl font-semibold mb-5 text-white">
                            {section.title}
                        </h3>

                        {section.items.length === 1 ? (
                            <p className="text-gray-300">{section.items[0]}</p>
                        ) : (
                            <div className="text-gray-300 flex gap-4 flex-wrap">
                                {section.items.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1.5 bg-zinc-900 text-zinc-300 rounded text-sm font-medium hover:bg-zinc-700 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
