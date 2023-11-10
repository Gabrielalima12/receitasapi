import express from 'express';
import router from './rotas/index.js';

const app = express();
const PORT = process.env.PORT || 3031;

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
