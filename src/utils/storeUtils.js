export const updateObject = (prevObj, nextObj) => {
  return {
    ...prevObj,
    ...nextObj,
  }
};

export const fakeFetch = data => {
  const L = 'admin';
  const P = '123456';

  return new Promise(resolve => {
    if (data.login === L && data.password === P) {
      setTimeout(() => {
        resolve({
          token: 'goodToken',
        });
      }, 2500)
    } else {
      setTimeout(() => {
        resolve({
          message: 'FakeFetch error: bad credentials!',
        });
      }, 2000)
    }
  });
};