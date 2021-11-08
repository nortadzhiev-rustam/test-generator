module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Test', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer4: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correctAnswer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
};
