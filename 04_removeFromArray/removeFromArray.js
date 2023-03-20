const removeFromArray = function(inputArray, ...deleteElements) {
    for (let element of deleteElements){
        let pos = inputArray.indexOf(element);
        if (pos >= 0){
            inputArray.splice(pos, 1);
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
