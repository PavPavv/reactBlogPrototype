import React, { useState, useEffect } from 'react';

const withDataFetching = WrappedComponent => ({ url, ...props }) => {

  const Hoc = () => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
      const fetchData = async (urlSource) => {
        try {
          setLoading(true);
          const data = await fetch(urlSource);
          const json = await data.json();

          if (json) {
            setLoading(false);
            setResults(json);
          }
        } catch (err) {
          setLoading(false);
          setError(err.message);
        }
      }

      fetchData(url);
    }, [url]);


    return (
      <WrappedComponent
        loading={loading}
        results={results}
        error={error}
        {...props}
      />
    );
  }

  return Hoc;
};

export default withDataFetching;
