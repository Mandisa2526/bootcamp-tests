function findItemsOver(list, min) {
  var items = [];
  for(var i = 0; i < list.length; i++) {
    if (list[i] > min) {
      items.push(list[i]);
    }
  }
  return items;
}