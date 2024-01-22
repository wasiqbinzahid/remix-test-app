import { Item } from "~/models/item";

export const GetItemById = async (id: number | string) => {
  const itemId = Number(id);
  const item = await Item.findByPk(itemId);
  return {
    status: "success",
    data: item?.toJSON() || null,
  };
};
