import SeccionNoticia from "./SeccionNoticia";

const Buscador = () => {
  return (
    <>
      <div className="border-primary my-10 text-center mx-2">
        <h1 className="font-bold text-4xl">Buscar noticias</h1>
        <div>
          <form className="mt-2">
            <div className="my-3">
              <select
                id="estado"
                name="estado"
                className="select vidrio"
                required
              >
                <option value="" className="">
                  Selecciona una categoria
                </option>
                <option value="creada">Creada</option>
                <option value="en_proceso">En proceso</option>
                <option value="terminada">Terminada</option>
              </select>
            </div>
            <div>
              <select
                id="estado"
                name="estado"
                className="select vidrio"
                required
              >
                <option value="" className="">
                  Selecciona un país
                </option>
                <option value="creada">Creada</option>
                <option value="en_proceso">En proceso</option>
                <option value="terminada">Terminada</option>
              </select>
            </div>
            <div className="mt-3">
              <button
                className="btn rounded-full border-none"
                style={{ backgroundColor: "#0b224e2b" }}
              >
                Ver articulo completo
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <SeccionNoticia />
      </div>
    </>
  );
};

export default Buscador;
