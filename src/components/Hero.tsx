import { FaReadme } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="heroSection" className="min-h-screen flex items-center justify-center text-center p-6">
            <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Bintang Rizqi Pasha
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                    Frontend Developer | RHCSA Certified | Passionate about UI/UX & Clean Code
                </p>
                <p className="mt-6 text-gray-300">
                    Freshgraduate Informatics Engineering with experience in fullstack development and Linux administration.
                </p>
                <a
                    href="https://docs.google.com/document/d/1R4udvEjefxl_lQpto5oHhZJapFbo0Px_7uTWRV0LwqM/edit?usp=sharing"
                    className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Resume
                </a>
            </div>
        </section>
    );
};

export default Hero;
