const User = require('./User');

module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    'Department',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      // userId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: User,
      //     key: 'id',
      //   },
      // },
    },
    {
      tableName: 'department',
      timestamps: true,
    }
  );

  Department.associate = function (models) {
    Department.hasMany(models.User, {
      foreignKey: 'departmentId',
      as: 'department',
    });

   
  };

  return Department;
};
