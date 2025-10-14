import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/CardsEpisodes";
import Pagination from "../../components/Pagination/Pagination";
import Loader from '../../components/Loader/Loader';

import '../Episodes/Episodes.scss'

const Episodes = () => {
  const [results, setResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function fetchEpisodes() {
      setLoading(true);
      try {
        const res = await fetch(`https://thesimpsonsapi.com/api/episodes?page=${pageNumber}`);
        const data = await res.json();

        if (!data || !Array.isArray(data.results)) {
          return;
        }

        setPages(data.pages || 1);

        const updatedResults = data.results.map((ep) => {
          const fallback =
            "https://upload.wikimedia.org/wikipedia/en/0/0d/Homer_Simpson_2006.png";
          const imageUrl = ep.episode_number
            ? `https://cdn.thesimpsonsapi.com/200/episode/${ep.episode_number}.webp`
            : fallback;

          return {
            ...ep,
            image_path: imageUrl,
          };
        });

        setResults(updatedResults);
      } catch (error) {
        console.error("Error al cargar episodios:", error);
      } finally {
        setTimeout(() => setLoading(false), 3000);
      }
    })();
  }, [pageNumber]);

  if (loading) return <Loader />;

  if (!loading && results.length === 0) {
        return (
            <div className="text-center mt-5 text-light">
                <h3>No se encontraron Episodes</h3>
            </div>
        );
    }

  return (
    <div className="container my-4 episodes-container">
      <h1 className="text-center mb-4 text-warning episodes-title">Episodios de Los Simpson</h1>

      <Cards results={results} />

      <Pagination
        pages={pages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        hasMore={pages > 1}
      />
    </div>
  );
};

export default Episodes;

