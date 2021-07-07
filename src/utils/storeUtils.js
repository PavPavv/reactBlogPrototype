export const updateObject = (prevObj, nextObj) => {
  return {
    ...prevObj,
    ...nextObj,
  }
};

export const fakeFetch = data => {
  const generateRandomKey = () => {
    const arr = ['Turing', 'Shannon', 'Atanasoff', 'Hewlett', 'Neumann', 'Zuse', 'Shockley', 'Kilby', 'Cerf', 'Torvalds', 'BernersLee', 'Brin']
    let randomNum = Math.floor(10000000 + Math.random() * 90000000);
    let randomName = arr[Math.floor(Math.random() * arr.length)];
    return randomName + '.' + randomNum.toString();
  };
  const L = 'admin';
  const P = '123456';

  return new Promise(resolve => {
    if (data.login === L && data.password === P) {
      setTimeout(() => {
        resolve({
          token: generateRandomKey(),
          expires_in: '3600000',
        });
      }, 800)
    } else {
      setTimeout(() => {
        resolve({
          message: 'FakeFetch error: bad credentials!',
        });
      }, 300)
    }
  });
};

export const fakePhoto = () => {
  //https://jsonplaceholder.typicode.com/photos?id=1

  let randomId = Math.round(Math.random() * 1000);
  return randomId;
};