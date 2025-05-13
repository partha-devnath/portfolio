const Courses = () => {
  const certifications = [
    {
      title: "Graph Developer - Associate",
      issuer: "Apollo GraphQL",
      issuedDate: "May 2023",
      link: "https://www.credly.com/badges/4d75377a-1e23-47b7-a3fc-18963d77bd9b/public_url",
    },
    {
      title: "Java certificate",
      issuer: "Mangtas",
      issuedDate: "Mar 2023",
      link: "https://www.credly.com/badges/2129551/public_url",
    },
    {
      title: "Build Reactive MicroServices using Spring WebFlux/SpringBoot",
      issuer: "Udemy",
      issuedDate: "Feb 2023",
      link: "https://www.udemy.com/certificate/UC-66d8cc96-da47-42ea-9171-ecb52410870d/",
    },
    {
      title: "Testing React with Jest and React Testing Library (RTL)",
      issuer: "Udemy",
      issuedDate: "Jul 2022",
      link: "https://www.udemy.com/certificate/UC-ecf98b92-68e4-4eaf-b40e-77ef4148c324/",
    },
    {
      title: "Fullstack project with Spring boot java and React Hooks -TDD",
      issuer: "Udemy",
      issuedDate: "Oct 2021",
      link: "https://www.udemy.com/certificate/UC-60086dac-7067-4743-a32e-9742299e764a/",
    },
    {
      title: "MTA - Introduction to programming using Python",
      issuer: "Microsoft",
      issuedDate: "Feb 2019",
      link: "https://www.youracclaim.com/badges/1b9e5e0d-c0ab-4fe9-b2a0-100f8f5f0559/linked_in_profile",
    },
    {
      title: "Programming, Data Structures and Algorithms using Python - NPTEL",
      issuer: "NPTL",
      issuedDate: "Nov 2018",
      link: "http://nptel.ac.in/noc/social_cert/noc18-cs34/NPTEL18CS34S214700881810025284.jpg",
    },
  ];

  return (
    <section id="courses">
      <h3 className="text-3xl font-semibold mb-4 text-center">Courses</h3>
      <div className="pl-4 grid md:grid-cols-2 space-y-6 mx-auto p-4 ">
        {certifications.map((cert, index) => (
          <div key={index} className="mb-4 p-4">
            <div className="w-full justify-between md:flex items-center gap-4">
              <p className="text-lg font-semibold">{cert.title}</p>
              <p className="text-sm text-gray-500 text-nowrap">
                {cert.issuedDate}
              </p>
            </div>
            <div className="list-disc list-inside text-gray-700">
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {cert.issuer || ""}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
