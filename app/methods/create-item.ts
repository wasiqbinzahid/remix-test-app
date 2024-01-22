import { Item } from "~/models/item";
import type { CreateItemPayload, ItemType } from "~/models/types";

export const CreateItem = async (data: CreateItemPayload) => {
  if (!data.name || !data.age) {
    return {
      status: "error",
      message: "INVALID PAYLOAD",
    };
  }
  const newItem = Item.build(data as ItemType);
  await newItem.save();
  return {
    status: "success",
    data: newItem.dataValues,
  };
};
