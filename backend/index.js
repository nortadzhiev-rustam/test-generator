const express = require('express');
const { sequelize, User, Department } = require('./models');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
//post method to take all api/signup request and create a new user
app.post('/api/users/signup', async (req, res) => {
  const { username, password, email, firstName, lastName, role } = req.body;
  const userExists =
    (await User.findOne({ where: { username } })) ||
    (await User.findOne({ where: { email } }));
  try {
    if (!userExists) {
      const user = await User.create({
        username,
        password,
        email,
        firstName,
        lastName,
        role,
      });
      res.json({ user });
    } else {
      res.status(400).json({ message: 'User already exists' });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

//route that registers departments
app.post('/api/departments', async (req, res) => {
  const { name } = req.body;
  try {
    const department = await Department.create({
      name,
    });
    res.json({ department });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

//route that gets all departments
app.get('/api/departments', async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.json( departments );
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

app.get('/api/users', (req, res) => {
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.send(err);
    });
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
