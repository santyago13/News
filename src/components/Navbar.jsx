import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-xl vidrio py-4 ">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center p-4">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold text-white hover:text-sky-200 transition"
          >
            Noticias
          </a>

          {/* Botón hamburguesa */}
          <button
            className="lg:hidden flex flex-col justify-between w-8 h-8 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-1 w-full bg-gradient-to-t from-sky-400 to-sky-600 rounded transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-3" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-gradient-to-t from-sky-400 to-sky-600 rounded transition duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-gradient-to-t from-sky-400 to-sky-600 rounded transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Menú */}
        <ul
          className={`margin-responsive flex flex-col lg:flex-row lg:space-x-6 overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 mt-4" : "max-h-0 lg:max-h-full lg:mt-0"
          }`}
        >
          <li className="py-2 lg:py-0 px-4 lg:px-0">
            <a href="#" className="text-white block hover:text-sky-200 transition">
              Inicio
            </a>
          </li>
          <li className="py-2 lg:py-0 px-4 lg:px-0">
            <a href="#" className="text-white block hover:text-sky-200 transition">
              Servicios
            </a>
          </li>
          <li className="py-2 lg:py-0 px-4 lg:px-0">
            <a href="#" className="text-white block hover:text-sky-200 transition">
              Acerca
            </a>
          </li>
          <li className="py-2 lg:py-0 px-4 lg:px-0">
            <a href="#" className="text-white block hover:text-sky-200 transition">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
