export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if(success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      const error = new Error('The fake API is not working currently');
      console.error(error);
      reject(error);
    }
  }).catch((error) => {
    return Promise.reject(error);
  });
}
