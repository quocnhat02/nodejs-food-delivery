import * as express from 'express';

let app: express.Application = express();

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

function is_MathByX_Available() {
  return false;
}

function is_MathByY_Available() {
  return false;
}

function result(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (is_MathByX_Available()) {
      resolve('Math by X available');
    } else if (is_MathByY_Available()) {
      resolve('Math by Y available');
    } else {
      reject('Both books not available');
    }
  });
}

// result()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function final() {
  try {
    const resultStr = await result();
    return resultStr;
  } catch (error) {
    return Promise.reject(error);
  }
}

final()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
