
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contactSection" className="flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <p className="mb-4">Feel free to reach out to me via email or connect with me on LinkedIn.</p>
            <div className="flex flex-row items-center gap-4 justify-center">
                <a href="mailto:bintangrp45@gmail.com" className="text-blue-500 hover:underline flex flex-col items-center">
                    <FaEnvelope className="size-8" /> Email
                </a>
                <a href="https://www.linkedin.com/in/bintangrp" className="text-blue-500 hover:underline flex flex-col items-center">
                    <FaLinkedin className="size-8" /> Linkedin
                </a>
            </div>
        </section>
    );
}

export default Contact;