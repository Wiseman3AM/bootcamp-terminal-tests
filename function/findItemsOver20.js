function findItemsOver20(itemList, threshold){
    const itemsOver20 = []
for (var i = 0; i < itemList.length; i++) {
  if (itemList[i].qty > 20){
    itemsOver20.push(itemList[i])
  } 
 }
return itemsOver20
}


export default findItemsOver20;