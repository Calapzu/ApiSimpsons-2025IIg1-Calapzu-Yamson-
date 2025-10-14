import React, { useState, useEffect } from 'react';

import Filters from '../../components/Filters/Filters';
import Cards from '../../components/Cards/Cards';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import Loader from '../../components/Loader/Loader';

import "../Home/Home.scss"

const Home = () => {
    const [allCharacters, setAllCharacters] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [loading, setLoading] = useState(true);

    const charactersPerPage = 20;
    useEffect(() => {
        const fetchAllCharacters = async () => {
            setLoading(true);
            let currentPage = 1;
            let totalPages = 1;
            let collectedCharacters = [];

            try {
                const initialRes = await fetch(`https://thesimpsonsapi.com/api/characters?page=${currentPage}`);
                const initialData = await initialRes.json();

                totalPages = initialData.pages || 1;
                collectedCharacters = collectedCharacters.concat(initialData.results);
                currentPage++;

                while (currentPage <= totalPages) {
                    const res = await fetch(`https://thesimpsonsapi.com/api/characters?page=${currentPage}`);
                    const data = await res.json();

                    if (data && Array.isArray(data.results)) {
                        collectedCharacters = collectedCharacters.concat(data.results);
                    }
                    currentPage++;
                }

                setAllCharacters(collectedCharacters);

            } catch (err) {
                console.error("Error al cargar todos los datos:", err);
                setAllCharacters([]);
            } finally {
                setTimeout(() => setLoading(false), 1000);
            }
        };
        fetchAllCharacters();
    }, []);

    const filteredCharacters = allCharacters.filter((char) => {

        const matchesName = char.name?.toLowerCase().includes(search.toLowerCase());

        const matchesStatus = status ? char.status?.toLowerCase() === status.toLowerCase() : true;

        let matchesGender = true;
        if (gender) {
            const charGenderValue = char.gender?.toLowerCase();
            if (gender === 'unknown') {
                matchesGender = (charGenderValue === 'unknown' || !charGenderValue || charGenderValue === '');
            } else {
                matchesGender = charGenderValue === gender.toLowerCase();
            }
        }

        return matchesName && matchesStatus && matchesGender;
    });

    const startIndex = (pageNumber - 1) * charactersPerPage;
    const charactersToShow = filteredCharacters.slice(startIndex, startIndex + charactersPerPage);
    const localTotalPages = Math.ceil(filteredCharacters.length / charactersPerPage);

    const handleReset = () => {
        setSearch("");
        setStatus("");
        setGender("");
        setPageNumber(1);
    };

    if (loading) return <Loader />;

    if (!loading && filteredCharacters.length === 0) {
        return (
            <div className="notfound-msg text-center text-dark mt-5">
                <h3>No se encontraron personajes</h3>
                <p>Intenta ajustar tus filtros de búsqueda.</p>
                <button className="btn-simpsons-back" onClick={handleReset}>
                    Volver atrás
                </button>
            </div>
        );
    }

    return (
        <div className='App simpsons-theme'>
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />

            <div className='container bg-white p-4 rounded-4 shadow-sm'>
                <div className='row'>
                    <Filters
                        setStatus={setStatus}
                        setGender={setGender}
                        setPageNumber={setPageNumber}
                        status={status}
                        gender={gender}
                    />
                    <div className='col-8'>
                        <div className='row'>
                            <Cards page="/" results={charactersToShow} />
                        </div>
                    </div>
                </div>
            </div>

            <Pagination
                pages={localTotalPages}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                hasMore={charactersToShow.length > 0}
            />
        </div>
    );
};

export default Home;