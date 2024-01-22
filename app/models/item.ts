import { DataTypes, Model } from "sequelize";
import { sequelize } from "~/db/index.server";
import type { ItemType } from "./types";

interface ItemModelType extends ItemType, Model<ItemType> {}
export const Item = sequelize.define<ItemModelType>("Item", {
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});
