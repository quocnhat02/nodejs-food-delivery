const fs = require('fs');

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado ${textIn}\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut, 'utf-8');
// console.log('File written!');

// Non-locking, asynchronous way
fs.readFile('./txt/start.txt', (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});
