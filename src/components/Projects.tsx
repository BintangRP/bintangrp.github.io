const Projects = () => {
    const projects = [
		{
			name: "Olehmas (E-commerce for Souvenirs)",
			tech: "Laravel, MySQL, Bootstrap",
			link: "https://www.linkedin.com/in/bintangrp",
		},
		{
			name: "Rupi App - SYNRGY Bootcamp Final Project",
			tech: "React + vite, Material UI, with backend express, PostgreSQL",
			link: "https://github.com/muhammadajisolehudin/rupi-app",
			link2: "https://github.com/resarisyan/synrgy-final-project-fsw",
		},
		{
			name: "Merustic.id",
			tech: "HTML, CSS, JS, Bootstrap",
			link: "https://merustic.vercel.app/",
		},
	];

	return (
		<section id="projectSection" className="py-20 px-6 bg-gray-800">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-semibold mb-6 text-center">Things I've Shipped</h2>
				<div className="grid md:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<div key={index} className="bg-gray-700 p-4 rounded">
							<h3 className="text-xl font-bold">{project.name}</h3>
							<p className="text-gray-400 mt-1">Tech: {project.tech}</p>
							<div className="mt-3">
								<a href={project.link} className="text-blue-400 hover:underline">
									Link Project
								</a>
								{project.link2 && (
									<span className="ml-2 text-blue-400 hover:underline">
										<a href={project.link2}>Link Project 2</a>
									</span>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
