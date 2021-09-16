import React, { useEffect } from 'react';

import useDataFetching from '../hookHoc';

const CustomHookTest = () => {
  const [loading, results, error] = useDataFetching(
    "https://jsonplaceholder.typicode.com/albums"
  );

  useEffect(() => {
    console.log('loading', loading)
    console.log('results', results)
    console.log('error', error)
  }, [results])

  // if (loading || error) {
  //   return loading ? "Loading..." : error.message;
  // }

  return (
    <div>tt</div>
    // <ul style={{ marginTop: '50px', }}>
    //   {results.filter(item => item.id < 10).map(result => (
    //     <li key={result.id}>{result.title}</li>
    //   ))}
    // </ul>
  );
}

export default CustomHookTest;
