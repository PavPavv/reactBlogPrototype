import React, { useState, useEffect } from "react";

const useDataFetching = (dataSource) => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(dataSource)

    async function fetchData() {
      console.log('fetching', dataSource)
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/albums");
        const json = await data.json();
        console.log('json', json)
        if (json) {
          setLoading(false);
          setResults(json);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }

      setLoading(false);
    }

    fetchData();
  }, [dataSource]);

  return [loading, results, error];
}

export default useDataFetching;