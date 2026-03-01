function Skills() {
  return (
    <section id="skills" className="px-10 py-10 border-b">
      <h2 className="text-lg font-bold tracking-widest mb-8">
        SKILLS
      </h2>

      <div className="grid md:grid-cols-2 gap-12 text-sm">
        <div>
          <h3 className="font-semibold mb-4">Technical Skills</h3>
          <ul className="space-y-2 text-gray-700">
            <li>React (Component-Based Architecture)</li>
            <li>TypeScript</li>
            <li>Vite</li>
            <li>HTML5 / CSS3</li>
            <li>Git & GitHub (Branching Workflow)</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Soft Skills</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Problem-Solving</li>
            <li>Self-Learning & Research Skills</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;