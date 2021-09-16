import React from 'react';

import withDataFetching from '../classHoc';

const ClassHocTest = ({ loading, results, error }) => {
  if (loading || error) {
    return loading ? <div>Loading data...</div> : <div>error.message</div>
  }

  return (
    <ul>
      {results.filter(item => item.id < 10).map(result => (
        <li key={result.id}>{result.title}</li>
      ))}
    </ul>
  )
}

export default withDataFetching({
  dataSource: 'https://jsonplaceholder.typicode.com/albums',
})(ClassHocTest);
