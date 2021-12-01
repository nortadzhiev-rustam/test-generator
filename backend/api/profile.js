const express = require('express');
const router = express.Router();
const { User, Department } = require('../models/');
const { isAuth } = require('../middlewares');

router.get('/profile', isAuth, (req, res) => {
  const { user } = req.session;
  User.findOne({
    where: {
      id: user.id,
    },
    include: [
      {
        model: Department,
        as: 'department',
        attributes: ['name'],
      },
    ],
  }).then((foundUser) => {
    res.status(200).send(foundUser);
  });
});

module.exports = router;