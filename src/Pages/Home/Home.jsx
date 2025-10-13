import React, { useState, useEffect } from 'react'
import Filters from '../../components/Filters/Filters'
import Cards from '../../components/Cards/Cards'
import { useFetchCharacters } from '../../Hooks/useFetchCharacters';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';

const Home = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    let [fetchedData, updateFetchedData] = useState({});
    const { pages = 0, results = [] } = fetchedData;

    let api = `https://thesimpsonsapi.com/api/characters?page=${pageNumber}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);

    const filteredResults = results.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='App'>
            <h1 className='text-center chewy my-4'> Los Simpsons</h1>

            <Search setSearch={setSearch} setPageNumber={setPageNumber}/>

            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <Filters />
                    </div>
                    <div className='col-8'>
                        <div className='row'>
                            <Cards results={filteredResults} />
                        </div>
                    </div>
                </div>
            </div>

            <Pagination
                pages={pages}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}

            />
            )


        </div>
    )
}

export default Home
