export function updateDataProcessor(rootData, idToFind, newChild) {
  const updatedData = [...rootData];

  const recursiveAddChild = (data) => {
    for (const item of data) {
      if (item.id === idToFind) {
        if (!item.children) {
          item.children = [];
        }
        item.children = newChild;
        return;
      }

      if (item.children && item.children.length > 0) {
        recursiveAddChild(item.children);
      }
    }
  };

  recursiveAddChild(updatedData);

  return updatedData;
}

export function updateOpenStatus(arr, targetId) {
  const updatedData = [...arr];
  return updatedData.map((item) => {
    if (item.id === targetId) {
      return { ...item, open: !item.open };
    }
    if (Array.isArray(item.children) && item.children.length > 0) {
      item.children = updateOpenStatus(item.children, targetId);
    }
    return item;
  });
}
