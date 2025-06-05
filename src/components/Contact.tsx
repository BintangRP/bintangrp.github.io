
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
	return (
		<section
			id="contactSection"
			className="flex flex-col items-center justify-center p-4 my-10"
		>
			<h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
			<p className="mb-4">
				Feel free to drop me an email, message me on LinkedIn, or reach out via WhatsApp —
				I'm just a click away.
			</p>
			<div className="flex flex-row items-center gap-4 justify-center">
				<a
					href="mailto:bintangrp45@gmail.com"
					className="text-blue-700 hover:underline flex flex-col items-center hover:text-blue-400"
				>
					<FaEnvelope className="size-8" /> Email
				</a>
				<a
					href="https://www.linkedin.com/in/bintangrp"
					className="text-blue-700 hover:underline flex flex-col items-center hover:text-blue-400"
				>
					<FaLinkedin className="size-8" /> Linkedin
				</a>
				<a
					href="https://wa.me/6283877626559"
					className="text-blue-700 hover:underline flex flex-col items-center hover:text-blue-400"
				>
					<FaWhatsapp className="size-8" /> WhatsApp
				</a>
			</div>
		</section>
	);
};

export default Contact;