const Projects = () => {
    const projects = [
        {
            name: "Olehmas (E-commerce for Souvenirs)",
            tech: "Laravel, MySQL, Bootstrap",
        },
        {
            name: "Rupi App – SYNRGY Bootcamp Final Project",
            tech: "React, Express, PostgreSQL, Tailwind",
        },
        {
            name: "Merustic.id",
            tech: "HTML, CSS, JS, Bootstrap",
        },
    ];

    return (
        <section id="projectSection" className="py-20 px-6 bg-gray-800">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="bg-gray-700 p-4 rounded">
                            <h3 className="text-xl font-bold">{proj.name}</h3>
                            <p className="text-gray-400 mt-1">Tech: {proj.tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
