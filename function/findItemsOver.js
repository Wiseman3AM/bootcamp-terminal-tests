function findItemsOver(itemList, threshold){
    const itemsOver = []
for (var i = 0; i < itemList.length; i++) {
  if (itemList[i].qty > 20){
    itemsOver.push(itemList[i]);
  } 
 }
 console.log('findItemsOver passed!');
return itemsOver
}

export default findItemsOver;