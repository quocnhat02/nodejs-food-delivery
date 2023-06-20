import * as express from 'express';

let app: express.Application = express();

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

const object1 = { id: 1, name: 'Nhat' };
const object2 = { ...object1, email: 'ae@gmail.com' };
const object3 = object1;
object1.id = 2;
console.log('2', object2);
console.log('3', object3);
