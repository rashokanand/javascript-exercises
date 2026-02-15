const palindromes = function (string) {
    const regex = /\W/g;
    // const regex2 = /\p{P}/u;
    let str = string.replace(regex,"").toLowerCase();
    return str.split("").reverse().join("") === str;
};

// Do not edit below this line
module.exports = palindromes;3
