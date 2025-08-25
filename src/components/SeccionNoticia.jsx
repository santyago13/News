import CardNoticia from "./CardNoticia";

const SeccionNoticia = ({ news = [] }) => {
  if (news.length === 0) {
    return (
      <section>
        <div className="text-center my-10">
          <p className="text-gray-500">No hay noticias para mostrar. Realiza una búsqueda.</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-10 vidrio mx-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 place-items-center">
        {news.map((noticia, index) => (
          <CardNoticia 
            key={index}
            titulo={noticia.title}
            descripcion={noticia.description}
            imagen={noticia.image_url}
            url={noticia.link}
            fecha={noticia.pubDate}
            fuente={noticia.source_id}
          />
        ))}
      </div>
    </section>
  );
};

export default SeccionNoticia;