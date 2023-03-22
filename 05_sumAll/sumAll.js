const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const tmpNumber = min;
        min = max;
        max = tmpNumber;
    }
    let sum = 0;
    do {
        sum += min;
        min++;
    } while (min <= max);
    return sum;
};

//console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
