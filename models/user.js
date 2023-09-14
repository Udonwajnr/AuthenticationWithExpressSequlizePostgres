'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    fullName: {
     type: DataTypes.STRING
    },

    userName: {
      type:DataTypes.STRING(22),
      unique:true,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isEmail:true
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false
    },
    repeatPassword: {
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};