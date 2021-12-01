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
      .status(400)
      .json({ message: 'Username or password does not match!' });
  
  if (!bcrypt.compareSync(password, userWithEmail.password))
    return res
      .status(400)
      .json({ message: 'Username or password does not match!' });

  const jwtToken = jwt.sign(userWithEmail.toJSON(), process.env.JWT_SECRET, {expiresIn: '1h'});
  
  req.session.user = userWithEmail;
  req.session.isAuth = true;

  console.log(req.session.user);
  res.json({
    message: `Welcome Back! ${userWithEmail.firstName}`,
    token: jwtToken,
  });
});

module.exports = router;
