import { Item } from "~/models/item";
import { ItemType } from "~/models/types";

export const EditItem = async (data: ItemType) => {
  await Item.update(data, {
    where: {
      id: data.id,
    },
  });
  return {
    status: "success",
    data,
  };
};
