const express = require('express');
const router = express.Router();

router.get('/isAuth', (req, res) => {
const {user} = req.session;
if (user) {
  res.json({
    message: `Welcome Back! ${user.firstName}`,
    user: user
  });
} else {
    res.status(401).json({
        message: '🙅‍♀️ - Unauthorized',
    });
}
});

module.exports = router;
    