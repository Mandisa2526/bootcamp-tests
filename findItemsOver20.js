function findItemsOver20(list) {
    items = [];
    for(var i = 0; i < list.length; i++) {
      if (list[i].qty > 20) {
        items.push(list[i]);
      }
    }
    return items;
  }