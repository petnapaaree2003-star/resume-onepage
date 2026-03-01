function About() {
  return (
    <section id="about" className="px-10 py-10 border-b">
      <h2 className="text-lg font-bold tracking-widest mb-6">
        PERSONAL DETAILS
      </h2>

      <div className="grid md:grid-cols-2 gap-6 text-sm">
        <div>
          <p><span className="font-semibold">Name:</span> Petnapa Aree</p>
          <p><span className="font-semibold">Date Of Birth:</span> 4 August 2003</p>
          <p><span className="font-semibold">Citizenship:</span> Thai</p>
          <p><span className="font-semibold">Gender:</span> Female</p>
        </div>
      </div>
    </section>
  );
}

export default About;