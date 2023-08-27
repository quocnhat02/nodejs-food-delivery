import * as express from 'express';

const app: express.Application = express();

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
