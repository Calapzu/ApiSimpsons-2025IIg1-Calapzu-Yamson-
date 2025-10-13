import React, { useEffect, useState } from 'react';

export  function useFetchCharacters(api) {

    const [data, setData] = useState({info: {}, results: [], count: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

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
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, [api])

  return {data, loading, error};
}
