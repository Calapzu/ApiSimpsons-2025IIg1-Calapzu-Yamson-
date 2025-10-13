import React, { useState, useEffect } from 'react'
import Filters from '../../components/Filters/Filters'
import Cards from '../../components/Cards/Cards'
import { useFetchCharacters } from '../../Hooks/useFetchCharacters';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';

const Home = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    let [status, setStatus] = useState("");
    let [gender, setGender] = useState("")
    const [characters, setCharacters] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [totalPages, setTotalPages] = useState(1);

    let [fetchedData, updateFetchedData] = useState({ results: [], info: {} });

    let api = `https://thesimpsonsapi.com/api/characters?page=${pageNumber}`;

    useEffect(() => {
        (async function () {
            try {
                const res = await fetch(api);
                const data = await res.json();

                if (data && Array.isArray(data.results) && data.results.length > 0) {
                    setCharacters(data.results);
                    setTotalPages(data.pages);
                    setHasMore(true);
                } else {
                    setCharacters([]);
                    setHasMore(false);
                }
            } catch (err) {
                console.error(err);
                setCharacters([]);
                setHasMore(false);
            }
        })();
    }, [api]);

    const { info, results } = fetchedData;

    const filteredResults = characters.filter((char) => {
        const matchesName = char.name?.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = status ? char.status?.toLowerCase() === status.toLowerCase() : true;
        const matchesGender = gender ? char.gender?.toLowerCase() === gender.toLowerCase() : true;
        return matchesName && matchesStatus && matchesGender;
    });

    return (
        <div className='App'>
            <h1 className='text-center chewy my-4'> Los Simpsons</h1>

            <Search setSearch={setSearch} setPageNumber={setPageNumber} />

            <div className='container'>
                <div className='row'>
                    <Filters
                        setStatus={setStatus}
                        setGender={setGender}
                        setPageNumber={setPageNumber}
                    />
                    <div className='col-8'>
                        <div className='row'>
                            <Cards results={filteredResults} />
                        </div>
                    </div>
                </div>
            </div>

            {hasMore && (
                <Pagination
                    pages={totalPages}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    hasMore={hasMore}
                />
            )}

        </div>
    )
}

export default Home
