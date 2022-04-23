const express = require('express');
const dotenv = require('dotenv');
const { getAllUsers } = require('../database/user/getAllUsers');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/api/users', async (req, res) => {
  const users = await getAllUsers()
  console.log(users)
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))