const repeatString = function(str, num) {
    if (num < 0) return 'ERROR';
    let nstr = ''
    for (let i = 0; i < num; i++) {
        nstr += str;
    }
    return nstr;
};

// Do not edit below this line
module.exports = repeatString;
