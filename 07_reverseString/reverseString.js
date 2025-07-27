const reverseString = function(string) {
    let reverse = "";
    string.split();
    for(let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
