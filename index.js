import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

const users = [
  { id: 1, name: 'jhone Doe', email: 'jhone.doe@exmaple.com' },
  { id: 2, name: 'Mark Doe', email: 'Mark.doe@exmaple.com' },
  { id: 3, name: 'Roni Doe', email: 'Roni.doe@exmaple.com' },
  { id: 4, name: 'fasha Doe', email: 'Fasha.doe@exmaple.com' },
];

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.get('/users', (req, res) => {
  res.send(users); // ba res.json(users) dile aro valo
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
