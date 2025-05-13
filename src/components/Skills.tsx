export default function Skills() {
  return (
    <section className="text-center" id="skills">
      <h3 className="text-3xl font-semibold mb-4">Skills</h3>
      <div className="flex flex-wrap gap-8 justify-center">
        {[
          { src: "java", alt: "Java", text: "Java" },
          { src: "spring", alt: "Spring Boot", text: "Spring Boot" },
          { src: "nextjs", alt: "Next.js", text: "Next.js" },
          { src: "git", alt: "Git", text: "Git" },
          { src: "react", alt: "React", text: "React" },
          { src: "ts", alt: "TypeScript", text: "TypeScript" },
          { src: "html", alt: "HTML5", text: "HTML5" },
          { src: "css", alt: "CSS", text: "CSS" },
          { src: "js", alt: "JavaScript", text: "JavaScript" },
          { src: "jest", alt: "Jest", text: "Jest" },
          { src: "graphql", alt: "GraphQL", text: "GraphQL" },
          { src: "mongodb", alt: "MongoDB", text: "MongoDB" },
          { src: "postgres", alt: "PostgreSQL", text: "PostgreSQL" },
          { src: "nodejs", alt: "Node.js", text: "Node.js" },
          { src: "docker", alt: "Docker", text: "Docker" },
        ].map(({ src, alt, text }, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`https://skillicons.dev/icons?i=${src}`}
              alt={alt}
              className="h-10 mb-2"
            />
            <p className="text-sm font-medium text-gray-700 hover:text-blue-500">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
