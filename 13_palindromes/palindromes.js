const palindromes = function (string) {
    let letters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let newString = string
        .toLowerCase()
        .split('')
        .filter(char => letters.includes(char))
        .join('');

    let reversedString = newString
        .split('')
        .reverse()
        .join('');

    if (newString === reversedString) {
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = palindromes;
