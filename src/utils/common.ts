import type { FilterItem } from "~/contracts/common";

interface ItemInterface {
  id: number | string;
  name: string;
  childrens: ItemInterface[];

  [key: string]: any;
}

export default function generateFilterItems(
  items: ItemInterface[],
): FilterItem[] {
  return items.map(({ id, name, childrens }) => ({
    id,
    name,
    value: [],
    children: generateFilterItems(childrens),
  }));
}
