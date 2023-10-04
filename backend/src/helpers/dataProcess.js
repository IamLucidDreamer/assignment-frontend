function findChildById(node, id) {
  if (node.id == id) {
    return node;
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

function findDataByName(data, nameToFind, parent = null) {
  for (const item of data) {
    if (item.name === nameToFind) {
      return parent ? { ...item, parent } : item;
    }

    if (item.children && item.children.length > 0) {
      const result = findDataByName(item.children, nameToFind, item);
      if (result) {
        return result;
      }
    }
  }

  return null;
}

module.exports = { findChildById, findDataByName };
