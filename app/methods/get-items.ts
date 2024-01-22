import { Item } from "~/models/item";

const PER_PAGE = 2;
export const GetItems = async (page = 1) => {
  const total = await Item.count();
  const records = await Item.findAll({
    offset: (page - 1) * PER_PAGE,
    limit: PER_PAGE,
  });
  return {
    data: records.map((record) => record.toJSON()),
    totalPages: Math.ceil(total / PER_PAGE),
  };
};
