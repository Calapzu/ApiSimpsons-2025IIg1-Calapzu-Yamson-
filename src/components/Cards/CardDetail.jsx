import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetail.scss"; 

const CardDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        const found = data.results?.find((ch) => String(ch.id) === String(id));
        setCharacter(found);
      })
      .catch((err) => console.error("Error al cargar personaje:", err));
  }, [id]);

  if (!character) {
    return <h2 className="text-center mt-4">Cargando personaje...</h2>;
  }

  const imageUrl = `https://cdn.thesimpsonsapi.com/200/character/${id}.webp`;

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="springfield-id">
        <div className="springfield-header">CARNET DE SPRINGFIELD</div>

        <img
          src={imageUrl}
          alt={character.name}
          className="springfield-photo"
          onError={(e) => {
            e.target.src =
              "https://upload.wikimedia.org/wikipedia/en/0/0d/Homer_Simpson_2006.png";
          }}
        />

        <h1 className="springfield-name">{character.name}</h1>

        <div className="springfield-info">
          <p>
            <strong>Ocupación:</strong> {character.occupation || "Desconocida"}
          </p>
          <p>
            <strong>Género:</strong> {character.gender || "N/A"}
          </p>
          <p>
            <strong>Frase célebre:</strong>{" "}
            {character.phrases[0] || "Desconocida"}
          </p>
        </div>

        <div className="springfield-footer">
          Springfield ID - Registro Oficial
        </div>
      </div>
    </div>
  );
};

export default CardDetail;



