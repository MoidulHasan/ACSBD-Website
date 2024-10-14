export function flattenCategoryData(categories: any) {
  return categories.reduce((acc: any, item: any) => {
    const { childrens, ...rest } = item
    acc.push(rest)
    if (childrens && childrens.length > 0) {
      acc = acc.concat(flattenCategoryData(childrens))
    }
    return acc
  }, [])
};
