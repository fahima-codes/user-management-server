import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

const pass = [
  { roll: 1, name: 'maha', class: 2 },
  { roll: 2, name: 'saha', class: 2 },
  { roll: 3, name: 'raha', class: 2 },
  { roll: 4, name: 'faha', class: 2 },
  { roll: 5, name: 'jaha', class: 2 },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/pass', (req, res) => {
  res.send(pass);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
