const CardNoticia = ({ 
  titulo, 
  descripcion, 
  imagen, 
  url, 
  fuente,
  fecha 
}) => {
  return (
    <article>
      <div className="card vidrio w-60 shadow-sm">
        <figure>
          <img
            className="object-cover w-full h-48"
            src={imagen || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
            alt={titulo || "Noticia"}
            onError={(e) => {
              e.target.src = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp";
            }}
          />
        </figure>
        <div className="card-body">
          <p className="text-sm text-gray-600">{fuente || "Diario X"}</p>
          <h2 className="card-title text-lg line-clamp-2">
            {titulo || "Título de la noticia"}
          </h2>
          <p className="line-clamp-3">
            {descripcion || "Descripción de la noticia..."}
          </p>
          {fecha && (
            <p className="text-xs text-gray-500 mt-2">
              {new Date(fecha).toLocaleDateString()}
            </p>
          )}
          <div className="card-actions justify-center mt-3">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-full border-none"
                style={{ backgroundColor: "#0b224e2b" }}
              >
                Ver artículo completo
              </a>
            ) : (
              <button
                className="btn rounded-full border-none"
                style={{ backgroundColor: "#0b224e2b" }}
                disabled
              >
                Ver artículo completo
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardNoticia;