import React from "react";

const CardNoticia = () => {
  return (
    <div className="card vidrio w-50 shadow-sm">
      <figure>
        <img
          className="object-cover w-full"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p>diario x</p>
        <h2 className="card-title">Nueva zapatilla</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-center">
          <button
            className="btn rounded-full border-none"
            style={{ backgroundColor: "#0b224e2b"  }}
          >
            Ver articulo completo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardNoticia;
