const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, data1) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data1;
  readFile('./content/second.txt', 'utf-8', (err, data2) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = data2;
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
