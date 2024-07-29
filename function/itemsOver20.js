function itemsOver20(itemList, threshold = 20) {
    const itemsOver20 = [];
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].qty > threshold) {
            itemsOver20.push(itemList[i]);
        }
    }
    return itemsOver20;
}

export default itemsOver20;
