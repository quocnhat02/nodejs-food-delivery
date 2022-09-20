const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
