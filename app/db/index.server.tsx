import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "postgres://postgres:123456@localhost:5432/my-remix-db"
);
sequelize
  .authenticate()
  .then(() => {
    console.log();
    console.log("AUTH SUCCESS");
  })
  .catch((e) => {
    console.error(e);
    console.log("AUTH FAIL");
  });
sequelize.sync();
