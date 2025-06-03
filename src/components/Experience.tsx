const Experience = () => {
    const experiences = [
        {
            title: "Frontend Engineer – Merustic.id",
            time: "Jul 2022 – Aug 2023",
            desc: "Built website UI using HTML/CSS/JS and Bootstrap. Designed interface in Figma.",
        },
        {
            title: "RHCSA Independent Study – Infinite Learning",
            time: "Aug 2023 – Dec 2023",
            desc: "Learned Linux system administration, container basics, and passed EX200.",
        },
        {
            title: "Project-Based Intern: Fullstack Developer Virtual Internship Experience - Investree",
            time: "Dec 2022",
            desc: "Built Laravel + MySQL based API with PHP OOP principles.",
        },
    ];

    return (
        <section id="experienceSection" className="py-20 px-6 bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6 text-center">Experience</h2>
                <ul className="space-y-8">
                    {experiences.map((exp, index) => (
                        <li key={index} className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <p className="text-gray-400 text-sm mb-2">{exp.time}</p>
                            <p className="text-gray-300">{exp.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Experience;
