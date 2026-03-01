function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-[900px] mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-semibold tracking-widest text-sm">
          PETNAPA AREE
        </h1>

        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Experience</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;