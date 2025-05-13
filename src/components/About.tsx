export default function About() {
  return (
    <section id="about">
      <h4 className="text-2xl font-semibold mb-4 text-center">Experience</h4>
      <div className=" pl-4 space-y-6 mx-auto max-w-4xl">
        <div>
          <div className="w-full justify-between md:flex items-center gap-4">
            <p className="text-lg font-semibold">
              Fullstack Developer Consultant, TechVerito, Pune
            </p>
            <p className="text-sm text-gray-500">June 2021 – Present</p>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Developed full-stack applications using Next.js, React, and Spring
              Boot.
            </li>
            <li>Collaborated with clients on UI/UX design using Figma.</li>
            <li>
              Created and managed GraphQL APIs and secured backend systems.
            </li>
            <li>
              Used Docker for containerization in isolated development
              environments.
            </li>
            <li>
              Practiced Agile and TDD for improved code quality and
              collaboration.
            </li>
          </ul>
        </div>
        <div>
          <div className="w-full justify-between md:flex items-center gap-4">
            <p className="text-lg font-semibold">
              Project Engineer, Wipro, Kolkata
            </p>
            <p className="text-sm text-gray-500">March 2021 – May 2021</p>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Managed IAM roles and access permissions for secure system
              operations.
            </li>
            <li>
              Monitored project progress and resolved security risks
              proactively.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
