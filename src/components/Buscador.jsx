import SeccionNoticia from "./SeccionNoticia";
import { useState } from "react";

const Buscador = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: "",
    country: ""
  });

  const API_KEY = 'pub_9bc223dfba1a49c59c28c353cf09161d';
  const BASE_URL = 'https://newsdata.io/api/1/news';

  const searchNews = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Construir parámetros de la URL
      const params = new URLSearchParams({
        apikey: API_KEY,
        language: 'es'
      });

      // Agregar filtros si existen
      if (filters.category) params.append('category', filters.category);
      if (filters.country) params.append('country', filters.country);

      const response = await fetch(`${BASE_URL}?${params}`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.results) {
        setNews(data.results);
      } else {
        setNews([]);
      }

    } catch (err) {
      setError('Error al cargar las noticias. Por favor, intenta nuevamente.');
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <div className="border-primary my-10 text-center mx-2">
        <h1 className="font-bold text-4xl">Buscar noticias</h1>
        <div>
          <form className="mt-2" onSubmit={searchNews}>
            <div className="my-3">
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="select vidrio"
              >
                <option value="">Selecciona una categoria</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="politics">Política</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnología</option>
                <option value="top">Top</option>
              </select>
            </div>
            <div>
              <select
                name="country"
                value={filters.country}
                onChange={handleFilterChange}
                className="select vidrio"
              >
                <option value="">Selecciona un país</option>
                <option value="ar">Argentina</option>
                <option value="br">Brasil</option>
                <option value="cl">Chile</option>
                <option value="co">Colombia</option>
                <option value="es">España</option>
                <option value="mx">México</option>
                <option value="us">Estados Unidos</option>
              </select>
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="btn rounded-full border-none"
                style={{ backgroundColor: "#0b224e2b" }}
                disabled={loading}
              >
                {loading ? 'Buscando...' : 'Buscar Noticias'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mostrar estados */}
      {loading && (
        <div className="text-center my-10">
          <span className="loading loading-spinner loading-lg"></span>
          <p className="mt-2">Buscando noticias...</p>
        </div>
      )}
      
      {error && (
        <div className="alert alert-error max-w-md mx-auto">
          <span>{error}</span>
        </div>
      )}

      <div>
        <SeccionNoticia news={news} />
      </div>
    </>
  );
};

export default Buscador;