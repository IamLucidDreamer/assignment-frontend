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
      matchingItems.push(parent ? { ...parent } : matchedItem);
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

function removeDuplicates(data, nameToFind) {
  const result = findDataByName(data, nameToFind);
  const newResult = removeDuplicatesFromNestedArray(result);
  return newResult;
}

function removeDuplicatesFromNestedArray(arr) {
  const lookup = {};

  function removeDuplicates(obj) {
    if (!lookup[obj.id]) {
      lookup[obj.id] = true;
      if (Array.isArray(obj.children)) {
        obj.children = obj.children.map(removeDuplicates);
      }
      return obj;
    }
    return null;
  }

  return arr.filter((item) => {
    const updatedItem = removeDuplicates(item);
    return updatedItem !== null;
  });
}

module.exports = { findChildById, findDataByName, removeDuplicates };
