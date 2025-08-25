const Buscador = () => {
  return (
    <div className="border-primary my-10 text-center mx-2">
      <h1 className="font-bold text-4xl">Buscar noticias</h1>
      <div>
        <form className="mt-2">
          <label className="input border-none vidrio focus:outline-none">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Buscador;
