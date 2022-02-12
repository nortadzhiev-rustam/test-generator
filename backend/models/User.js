
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'default',
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
<<<<<<< HEAD
    
=======
    // departmentId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: Department,
    //     key: 'id',
    //   },
    // },
   
>>>>>>> parent of 16fd8ff (added FroalaEditor & Mathtype)
  });

  User.associate = (models) => {
    User.hasMany(models.Test, {
      foreignKey: 'userId',
      as: 'user',
    });
<<<<<<< HEAD
    User.belongsTo(models.Department, {
      
      foreignKey: 'departmentId',
      as: 'department',
    });
  };
=======
  }
  
>>>>>>> parent of 16fd8ff (added FroalaEditor & Mathtype)

  return User;
};
