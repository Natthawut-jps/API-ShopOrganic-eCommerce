const { DataTypes } = require("sequelize");
const { sequelize } = require("../_Database_Connected");

const Categories = sequelize.define("categories", {
  category_name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  sold: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  imgURL: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    field: "createdAt",
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
  updatedAt: {
    field: "updatedAt",
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
});

(async () => {
  await sequelize.sync({ force: false });
})();

module.exports = { Categories };
