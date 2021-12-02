const express = require('express');
const { User } = require('../models/');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const userWithEmail = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log('Error: ', err);
    }
  );

  if (!userWithEmail)
    return res
      .status(404)
      .json({ message: 'couldn\'t find user with this credentials' });
  
  if (!bcrypt.compareSync(password, userWithEmail.password))
    return res
      .status(404)
      .json({ message: 'couldn\'t find user with this credentials' });


  
  req.session.user = userWithEmail;
  req.session.isAuth = true;

  console.log(req.session.user);
  res.json({
    message: `Welcome Back! ${userWithEmail.firstName}`,
    user: userWithEmail,
    isAuth: req.session.isAuth,
  });
});

module.exports = router;
