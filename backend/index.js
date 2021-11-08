const app = require('express')();

const { sequelize, User } = require('./models');

const port = process.env.PORT || 5000;

app.post('/api/users/signin', (req, res) => {
  // User.create({
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: req.body.password,
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   role: req.body.role,
  // })
  //   .then((user) => {
  //     res.send(user);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });
  console.log(JSON.parse(req.body));
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
