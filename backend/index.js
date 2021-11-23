const express = require('express');
const { sequelize, User, Department } = require('./models');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/static', express.static('public'));
//post method to take all api/users/signup request and create a new user
app.post('/api/users/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password, departmentId } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, 10),
      departmentId,
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//post method to take all api/users/login request and login a user
app.post('/api/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.response.data.message || error.message });
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
    res.json(departments);
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
