import React, { useEffect, useState } from 'react'
import { info } from 'sass'

export  function useFetchCharacters(api) {

    const [data, setData] = useState({info: {}, results: [], count: 0 });
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setloading(true);

        fetch(api)
        .then((response) => {
            if(!response.ok){
                throw new Error(`HTTP erro! status: ${response.status}`);
            }
            return response.json();
        })
        .then((result) => {
            setData(result);
            setError(null);
        })
        .catch((err) => setError(err.messge))
        .finally(() => setloading(false));
    }, [api])

  return {data, loading, error};
}
