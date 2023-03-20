const reverseString = function(InputStr) {
    let ReversedStr = "";
    for (i = InputStr.length; i>0; i--){
        ReversedStr += InputStr.charAt(i-1);
    }
    return ReversedStr;
};

// Do not edit below this line
module.exports = reverseString;
