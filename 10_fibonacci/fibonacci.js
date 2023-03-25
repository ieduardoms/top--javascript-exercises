const fibonacci = function (numberTh) {
    if (typeof numberTh === "string") numberTh = parseInt(numberTh)
    if (numberTh < 0) return "OOPS"
    a = 0
    b = 1
    i = 0
    do {
        i++
        fNumber = a + b
        a = b
        b = fNumber
    } while (i < numberTh - 1)
    return fNumber
    //1, 1, 2, 3, 5, 8,
};

// Do not edit below this line
module.exports = fibonacci;
