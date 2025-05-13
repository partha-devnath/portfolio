export default function Projects() {
  return (
    <section id="projects">
      <h3 className="text-3xl font-semibold mb-4 text-center">Projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded shadow p-4">
          <h4 className="text-xl font-bold mb-2 hover:text-blue-500 text-center">
            <a href="https://mockbird.in/">Mockbird</a>
          </h4>
          <p className="mb-4">
            An intuitive mock Api creation platform designed using Next.js,
            Tailwind CSS, and Node.js for seamless user experience.
          </p>
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded border">
            <iframe
              src="https://mockbird.in/"
              className="absolute top-0 left-0 w-full h-full"
              title="Mockbird Preview"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h4 className="text-xl font-bold mb-2 hover:text-blue-500 text-center">
            <a href="https://fabex.vercel.app/">Fabex</a>
          </h4>
          <p className="mb-4">
            An industry showcase platform using Next.js, Tailwind CSS, and
            Node.js, deployed on Vercel.
          </p>
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded border">
            <iframe
              src="https://fabex.vercel.app/"
              className="absolute top-0 left-0 w-full h-full"
              title="Fabex Preview"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
