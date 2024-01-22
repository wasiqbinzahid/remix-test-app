import { DataTypes } from "sequelize";
import { sequelize } from "~/db/index.server";

export const UserModel = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
});
async function myFn() {
  const userCount = await UserModel.count();
  console.log("USER ALREADY EXISTS");
  if (userCount === 0) {
    await UserModel.create({
      email: "user1@example.com",
      password: "123456",
    });
    console.log("USER CREATED");
  }
}
myFn();
