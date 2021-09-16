import React from 'react';

import withDataFetching from '../funcHoc';

const FuncHocTest = ({ loading, results, error }) => {
  if (loading || error) {
    return loading ? <div>Loading data...</div> : <div>error.message</div>
  }

  let list = <div>Ничего @...</div>;

  if (results) {
    list = (
      <ul style={{ marginTop: '50px', }}>
        {results.filter(item => item.id < 10).map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    );
  }

  return (
    <ul>
      {list}
    </ul>
  )
}

export default withDataFetching(FuncHocTest)({ url: 'https://jsonplaceholder.typicode.com/albums' });
