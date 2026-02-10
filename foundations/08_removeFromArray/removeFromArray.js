const removeFromArray = function(array, ...elements) {
    newArray = array.slice();
    for (let el of elements) {
        while (newArray.indexOf(el) >= 0) {
            newArray.splice(newArray.indexOf(el), 1);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
