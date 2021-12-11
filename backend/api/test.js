const express = require('express');
const { Department, User, Test } = require('../models/');
const router = express.Router();
const multer = require('multer');
const FroalaEditor = require('wysiwyg-editor-node-sdk/lib/froalaEditor.js');

//route to store input and upload image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './fronend/public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

router.use(express.static(__dirname + '/public'));
router.use('/uploads', express.static('uploads'));

router.post('/questions', multer({ storage: storage }).single('image'), async (req, res) => {

  FroalaEditor.Image.upload(req, async (err, data) => {
    if (err) {
      return res.send(JSON.stringify(err));
    }
    const { question, answer, test_id } = req.body;
    const { image } = data;
    const newQuestion = await Test.create({ question, answer, image, test_id });
    res.send(newQuestion);
  });

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
        image: req.file.originalname,
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

//route to get all questions
router.get('/questions', async (req, res) => {
  try {
    const test = await Test.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
        },
        {
          model: Department,
          as: 'department',
          attributes: ['id', 'name'],
        },
      ],
    });
    res.json(test);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});


module.exports = router;