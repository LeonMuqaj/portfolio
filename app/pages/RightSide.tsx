import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";

export default function RightSide() {
  return (
    <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4 text-lg">
            I'm a developer passionate about crafting{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="accessible (opens in a new tab)"
            >
              accessible
            </a>
            , pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that not only look
            great but are meticulously built for performance and usability.
          </p>
          <p className="mb-4 text-lg">
            Currently, I'm a Front-End Engineer at{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://tetbit.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Tetbit (opens in a new tab)"
            >
              Tetbit
            </a>
            , where I contribute to building critical components that power the
            company's web presence. I work closely with cross-functional teams
            to implement best practices in web development and ensure our
            platform delivers an inclusive user experience.
          </p>
          <p className="mb-4 text-lg">
            In the past, I've had the opportunity to develop software across a
            variety of settings, gaining experience in building accessible,
            performant applications. I enjoy learning new technologies and
            frameworks that help me become a better developer.
          </p>
          <p className="text-lg">
            When I'm not at the computer, I enjoy spending time outdoors,
            reading and exploring new places.
          </p>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <div>
          <ol className="group/list">
            <ExperienceCard
              dateRange="2025 — Present"
              dateAriaLabel="2025 to Present"
              title="Junior Front End Developer"
              company="Tetbit llc"
              href="#"
              description="Build and maintain critical components used to construct the company's web presence. Work closely with cross-functional teams, including designers and project managers, to implement new features."
              technologies={[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Figma",
                "Github",
              ]}
            />

            <ExperienceCard
              dateRange="2019 — 2024"
              dateAriaLabel="2019 to 2024"
              title="Full Stack Developer"
              company="Freelancer"
              href="#"
              description="Developed and shipped highly interactive web applications for clients. Collaborated with other developers and stakeholders to deliver high-quality projects on time."
              technologies={["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"]}
            />
          </ol>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Selected projects"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Projects
          </h2>
        </div>
        <div>
          <ul className="group/list">
            <ProjectCard
              title="Project One"
              href="#"
              description="A web application that helps users track their daily habits and provides insights into their progress over time."
              technologies={["React", "Firebase"]}
            />

            <ProjectCard
              title="Project Two"
              href="#"
              description="An e-commerce platform with a modern design, featuring a seamless shopping experience and secure payment integration."
              technologies={["Next.js", "Stripe"]}
            />

            <ProjectCard
              title="Project Two"
              href="#"
              description="An e-commerce platform with a modern design, featuring a seamless shopping experience and secure payment integration."
              technologies={["Next.js", "Stripe"]}
            />

            <ProjectCard
              title="Project Two"
              href="#"
              description="An e-commerce platform with a modern design, featuring a seamless shopping experience and secure payment integration."
              technologies={["Next.js", "Stripe"]}
            />

            <ProjectCard
              title="Project Two"
              href="#"
              description="An e-commerce platform with a modern design, featuring a seamless shopping experience and secure payment integration."
              technologies={["Next.js", "Stripe"]}
            />
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        <p>
          Loosely designed in{" "}
          <span className="font-medium text-slate-400">Figma</span> and coded in{" "}
          <span className="font-medium text-slate-400">Cursor</span> by yours
          truly. Built with{" "}
          <span className="font-medium text-slate-400">Next.js</span>,{" "}
          <span className="font-medium text-slate-400">React</span> and{" "}
          <span className="font-medium text-slate-400">Tailwind CSS</span>,
          deployed with{" "}
          <span className="font-medium text-slate-400">Vercel</span>.
        </p>
      </footer>
    </main>
  );
}
