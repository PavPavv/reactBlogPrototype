import React, { useState, useEffect } from 'react';

const useRequest = (request) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      request()
        .then(response => setData(response.data))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, 2000);

  }, []);

  return [data, loading, error];

};

export default useRequest;