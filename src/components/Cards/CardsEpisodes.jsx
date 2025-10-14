import '../Cards/Cards.scss';

const Cards = ({ results }) => {
    if (!results || results.length === 0) {
        return <h2 className="text-center">No se encontraron episodios</h2>;
    }

    return (
        <div className="row">
            {results.map((episode) => {
                const { id, name, airdate, episode_number, season, image_path } = episode;

                const imageUrl = episode_number
                    ? `https://cdn.thesimpsonsapi.com/200/episode/${episode_number}.webp`
                    : "https://upload.wikimedia.org/wikipedia/en/0/0d/Homer_Simpson_2006.png";

                return (
                    <div key={id} className="col-lg-3 col-md-6 col-12 mb-4">
                        <div className="card simpson-card shadow-sm border-0 text-center">
                            <div className="p-2 simpson-header fs-4">{name}</div>

                            <img
                                src={imageUrl}
                                alt={name}
                                className="card-img-top img-simpson"
                            />

                            <div className="p-2 simpson-footer">
                                <div className="fs-5">
                                    <strong>Fecha emisión:</strong> {airdate || "Desconocida"}
                                </div>
                                <div className="fs-5">
                                    <strong>Episodio #:</strong> {episode_number || "N/A"}
                                </div>
                                <div className="fs-5">
                                    <strong>Temporada:</strong> {season || "N/A"}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;