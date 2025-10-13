import React, { useState } from 'react'
import Filters from '../../components/Filters/Filters'
import Cards from '../../components/Cards/Cards'
import { useFetchCharacters } from '../../Hooks/useFetchCharacters';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';

const Home = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    
    const api = `https://thesimpsonsapi.com/api/characters?page=${pageNumber}&name=${search}`;

    const {data: fetchedData, loading, error} = useFetchCharacters(api);
    const {info, results} = fetchedData || [];

    console.log(fetchedData);
    
    
  return (
    <div className='App'>
        <h1 className='text-center chewy my-4'> Los Simpsons</h1>

        <Search setSearch={setSearch}/>

        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <Filters/>
                </div>
                <div className='col-8'>
                    <div className='row'>
                    <Cards results={results}/>
                    </div>
                </div>
            </div>
        </div>

        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  )
}

export default Home