import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Hero = () => {
	return (
		<section
			id="heroSection"
			className="min-h-screen flex items-center justify-center text-center p-6"
		>
			<div className="flex items-center justify-center flex-row space-x-12 flex-wrap">
				<div className="">
					<img
						src="./public/img/logo2.jpg"
						alt="Bintang Rizqi Pasha"
						className="w-50 h-50 rounded-full shadow-lg mb-12"
					/>
				</div>
				<div className="text-left">
					<h1 className="text-4xl md:text-6xl font-bold py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
						Bintang Rizqi Pasha
					</h1>
					<p className="text-xl md:text-2xl mx-auto">
						Frontend Developer | RHCSA Certified | Passionate about UI/UX & Clean Code
					</p>
					<p className="mt-6 text-gray-400">
						Freshgraduate Informatics Engineering with experience in fullstack
						development and Linux administration.
					</p>
					<div className="flex items-center flex-row space-x-4 space-y-6">
						<a
							href="https://docs.google.com/document/d/1R4udvEjefxl_lQpto5oHhZJapFbo0Px_7uTWRV0LwqM/edit?usp=sharing"
							className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							Dive Into My Resume
						</a>
						<div className="flex flex-row items-center justify-center space-x-4">
							<a
								href="https://github.com/bintangrp"
								className="text-blue-700 hover:underline flex flex-col items-center hover:text-blue-400"
								target="_blank"
							>
								<FaGithub className="size-8" />
							</a>
							<a
								href="mailto:bintangrp45@gmail.com"
								className="text-blue-700 hover:underline flex flex-col items-center hover:text-blue-400"
								target="_blank"
							>
								<FaEnvelope className="size-8" />
							</a>
							<a
								href="https://www.linkedin.com/in/bintangrp"
								className="text-blue-700 hover:underline flex flex-col items-center hover:text-blue-400"
								target="_blank"
							>
								<FaLinkedin className="size-8" />
							</a>
							<a
								href="https://wa.me/6283877626559"
								className="text-blue-700 hover:underline flex flex-col items-center hover:text-blue-400"
								target="_blank"
							>
								<FaWhatsapp className="size-8" />
							</a>
							<a
								href="https://www.youtube.com/@pashawannamore"
								className="text-blue-700 hover:underline flex flex-col items-center hover:text-blue-400"
								target="_blank"
							>
								<FaYoutube className="size-8" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
