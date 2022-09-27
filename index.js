const fs = require('fs');
const http = require('http');
const url = require('url');

///////////////////////////////////////////////////
// FILES

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado ${textIn}\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut, 'utf-8');
// console.log('File written!');

// Non-locking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (error, data1) => {
//   if (error) {
//     return console.log(error);
//   }
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (error, data2) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log(data2);

//     fs.readFile('./txt/append.txt', 'utf-8', (error, data3) => {
//       if (error) {
//         return console.log(error);
//       }
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
//         if (error) {
//           return console.log(error);
//         }
//         console.log('Your file has been written');
//       });
//     });
//   });
// });

// console.log('Will read file!');

///////////////////////////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end('Hello from the server');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to request on port 8000');
});
