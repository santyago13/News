import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-xl ">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center p-4">
        <div className="flex justify-between items-center">
          {/* Logo con SVG */}
          <a
            href="#"
            className="flex items-center text-4xl font-bold text-white hover:text-sky-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 256 256"
              className="mr-2"
            >
              <g transform="">
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M7.5,6c-2.4675,0 -4.5,2.0325 -4.5,4.5v25c0,3.57194 2.92806,6.5 6.5,6.5h29c3.57194,0 6.5,-2.92806 6.5,-6.5v-15c0,-2.4675 -2.0325,-4.5 -4.5,-4.5h-1.5v-5.5c0,-2.4675 -2.0325,-4.5 -4.5,-4.5zM7.5,9h27c0.8465,0 1.5,0.6535 1.5,1.5v6.75391c-0.02645,0.16103 -0.02645,0.3253 0,0.48633v16.75977c-0.00765,0.54095 0.27656,1.04412 0.74381,1.31683c0.46725,0.27271 1.04514,0.27271 1.51238,0c0.46725,-0.27271 0.75146,-0.77588 0.74381,-1.31683v-15.5h1.5c0.8465,0 1.5,0.6535 1.5,1.5v15c0,1.95006 -1.54994,3.5 -3.5,3.5h-29c-1.95006,0 -3.5,-1.54994 -3.5,-3.5v-25c0,-0.8465 0.6535,-1.5 1.5,-1.5zM10.5,15c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h21c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381zM10.5,23c-0.82839,0.00008 -1.49992,0.67161 -1.5,1.5v7c0.00008,0.82839 0.67161,1.49992 1.5,1.5h7c0.82839,-0.00008 1.49992,-0.67161 1.5,-1.5v-7c-0.00008,-0.82839 -0.67161,-1.49992 -1.5,-1.5zM23.5,23c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h8c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381zM12,26h4v4h-4zM23.5,30c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h8c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381z"></path>
                  </g>
                </g>
              </g>
            </svg>
            Noticias
          </a>

          {/* Botón hamburguesa */}
          <button
            className="lg:hidden flex flex-col justify-between w-8 h-8 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-1 w-full bg-sky-900 rounded transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-3" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-sky-600 rounded transition duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-sky-400 rounded transform transition duration-300 ${
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
            <a
              href="#"
              className="text-white block hover:text-sky-200 transition"
            >
              Inicio
            </a>
          </li>
          <li className="py-2 lg:py-0 px-4 lg:px-0">
            <a
              href="#"
              className="text-white block hover:text-sky-200 transition"
            >
              Servicios
            </a>
          </li>
          <li className="py-2 lg:py-0 px-4 lg:px-0">
            <a
              href="#"
              className="text-white block hover:text-sky-200 transition"
            >
              Acerca
            </a>
          </li>
          <li className="py-2 lg:py-0 px-4 lg:px-0">
            <a
              href="#"
              className="text-white block hover:text-sky-200 transition"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
