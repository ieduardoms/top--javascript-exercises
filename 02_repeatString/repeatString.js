const repeatString = function (string, num) {
    vsText = "";
    string = string.trim();
    if (string == "") {
        return "";
    }
    if (num >= 0) {
        for (i = 0; i < num; i++) {
            vsText += "hey";
        }
    } else {
        vsText = "ERROR";
    }
    return vsText;
}
// Do not edit below this line
module.exports = repeatString;
