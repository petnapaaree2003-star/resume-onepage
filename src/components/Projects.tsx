function Projects() {
  return (
    <section id="projects" className="px-10 py-10 border-b">
      <h2 className="text-lg font-bold tracking-widest mb-8">
        EXPERIENCE
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-sm">
        <div className="md:col-span-1">
          <p className="font-semibold">Frontend Developer</p>
          <p>(Self-Directed Project)</p>
          <p className="mt-2">2026</p>
        </div>

        <div className="md:col-span-2 space-y-3 text-gray-700">
          <p>
            Designed and developed a One-Page Resume web application using
            React, Vite, and TypeScript with structured component-based architecture.
          </p>
          <p>
            Implemented responsive UI and ensured cross-device compatibility.
          </p>
          <p>
            Managed source code with Git using branch-based workflow and best
            version control practices.
          </p>
          <p>
            Configured build optimization and deployed to production
            environment with CI/CD integration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;