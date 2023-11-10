import express from 'express';

const app = express();
const PORT = process.env.PORT || 3031;

app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
