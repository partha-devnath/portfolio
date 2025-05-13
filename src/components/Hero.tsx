import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="text-center" id="hero">
      <h2 className="text-4xl font-bold mb-4">Hi, I'm Partha Debnath</h2>
      <p className="text-lg">
        A Full Stack Web Developer specializing in Java, Spring Boot, and React
      </p>
      <div className="max-w-md mx-auto">
        <div className="pt-8 text-center">
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/partha-devnath"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-2"
            >
              <FaGithub className="text-2xl" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/partha-devnath"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-2"
            >
              <FaLinkedin className="text-2xl" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <a
          href="#projects"
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
