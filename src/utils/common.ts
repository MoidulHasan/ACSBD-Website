import type { FilterItem } from "~/contracts/common";
import type { ProductMinimalI } from "~/contracts/api-contracts/ProductsInterfaces";

interface ItemInterface {
  id: number | string;
  name: string;
  slug: string;
  childrens: ItemInterface[];

  [key: string]: any;
}

export function generateFilterItems(items: ItemInterface[]): FilterItem[] {
  return items.map(({ id, name, slug, childrens }) => ({
    id,
    name,
    slug,
    value: [],
    children: generateFilterItems(childrens),
  }));
}

export function collectAllValues(items: FilterItem[]): (number | string)[] {
  return items.reduce<(number | string)[]>((acc, { value, children }) => {
    // Collect the values from the current item
    const currentValues = value;

    // Recursively collect values from the children
    const childValues = collectAllValues(children);

    // Concatenate the current values and child values to the accumulator
    return acc.concat(currentValues, childValues);
  }, []);
}

export function findPriceRange(products: ProductMinimalI[]): [number, number] {
  if (!products.length) {
    return [0, 0]; // Return a default value if the array is empty
  }

  let lowerPrice = Infinity;
  let higherPrice = -Infinity;

  products.forEach((product) => {
    const finalPrice = parseFloat(product.price.final_price);

    if (finalPrice < lowerPrice) {
      lowerPrice = finalPrice;
    }

    if (finalPrice > higherPrice) {
      higherPrice = finalPrice;
    }
  });

  return [lowerPrice, higherPrice];
}
