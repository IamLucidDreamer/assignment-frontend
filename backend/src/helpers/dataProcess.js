function findChildById(node, id) {
  if (node.id == id) {
    return node.children;
  }

  if (node.children) {
    for (const child of node.children) {
      const result = findChildById(child, id);
      if (result) {
        return result;
      }
    }
  }

  return null;
}

function findDataByName(
  data,
  nameToFind,
  parent = null,
  includeChildren = true
) {
  const regex = new RegExp(nameToFind, "i");

  const matchingItems = [];

  for (const item of data) {
    if (item.name.match(regex)) {
      const matchedItem = includeChildren ? item : { ...item, children: [] };
      matchingItems.push(parent ? { ...matchedItem, parent } : matchedItem);
    }

    if (item.children && item.children.length > 0) {
      const results = findDataByName(
        item.children,
        nameToFind,
        item,
        includeChildren
      );
      matchingItems.push(...results);
    }
  }

  return matchingItems.length > 0 ? matchingItems : [];
}

module.exports = { findChildById, findDataByName };
