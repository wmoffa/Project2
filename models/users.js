module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return User;
};
