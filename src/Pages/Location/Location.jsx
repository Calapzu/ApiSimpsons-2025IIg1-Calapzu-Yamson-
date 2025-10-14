import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/CardLocation"
import Pagination from "../../components/Pagination/Pagination";

import '../Episodes/Episodes.scss'

const Location = () => {
  const [results, setResults] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pages, setPages] = useState(1);
  
    useEffect(() => {
      (async function fetchLocation() {
        try {
          const res = await fetch(`https://thesimpsonsapi.com/api/locations?page=${pageNumber}`);
          const data = await res.json();
  
          if (!data || !Array.isArray(data.results)) {
            return;
          }
  
          setPages(data.pages || 1);
  
          const updatedResults = data.results.map((ep) => {
            const fallback =
              "https://upload.wikimedia.org/wikipedia/en/0/0d/Homer_Simpson_2006.png";
            const imageUrl = ep.id
              ? `https://cdn.thesimpsonsapi.com/200/location/${ep.id}.webp`
              : fallback;
  
            return {
              ...ep,
              image_path: imageUrl,
            };
          });
  
          setResults(updatedResults);
        } catch (error) {
          console.error("Error al cargar episodios:", error);
        }
      })();
    }, [pageNumber]);
  return (
    <div className="container my-4 episodes-container">
      <h1 className="text-center mb-4 text-warning episodes-title">Locacion de Los Simpson</h1>

      <Cards results={results} />

      <Pagination
        pages={pages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        hasMore={pages > 1}
      />
    </div>
  )
}

export default Location