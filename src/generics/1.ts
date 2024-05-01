// import axios from 'axios';

// async function fetchData(url) {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними.
//  Використовуйте Generics для типізації повернутих даних.

const promise: Promise<string> = new Promise((resolve) => {
    setInterval(() => {
      resolve('Done!');
    }, 1000);
  });
  
  promise.then((data) => {
    console.log(data);
  });
  
  export {};
  