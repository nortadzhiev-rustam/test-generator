const express = require('express');
const { Department, User, Test } = require('../models/');
const router = express.Router();
const multer = require('multer');
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

//route for uploading images to the server
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './frontend/public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

router.post('/upload', async (req, res) => {
  const upload = multer({ storage: storage }).single('file');
  upload(req, res, function (err) {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json({
      file: req.file,
    });
  });
});

  


module.exports = router;