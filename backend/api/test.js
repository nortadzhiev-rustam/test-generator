const express = require('express');
const { Department, User, Test } = require('../models/');
const router = express.Router();

router.post('/questions/add', async (req, res) => {
  const {
    title,
    question,
    answer,
    grade,
    difficulty,
    correctAnswer,
    mark,
    departmentId,
    userId,
  } = req.body;
  try {
    const test = await Test.create(
      {
        title,
        question,
        difficulty,
        correctAnswer,
        grade,
        mark,
        departmentId,
        userId,
        answer1: answer.a,
        answer2: answer.b,
        answer3: answer.c,
        answer4: answer.d,
      },
      { include: { model: User } }
    );
    res.json(test);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.get('/questions', async (req, res) => {
  try {
    const tests = await Test.findAll({
      include: { model: User, Department },
    });
    res.json(tests);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;