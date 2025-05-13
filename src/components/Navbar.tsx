export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 sticky top-0 z-20 bg-white shadow-sm">
      <ul className="flex gap-6 mx-auto">
        <li>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-500">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#education" className="hover:text-blue-500">
            Education
          </a>
        </li>
      </ul>
    </nav>
  );
}
