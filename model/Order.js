const { DataTypes } = require("sequelize");
const { sequelize } = require("./_Database_Connected");

const Order = sequelize.define("order", {
  reference: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  tracking_id: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  payment_menthod: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  amount_total: {
    type: DataTypes.DECIMAL(32, 2),
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  customer_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address_id: {
    type: DataTypes.INTEGER,
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
module.exports = { Order };
