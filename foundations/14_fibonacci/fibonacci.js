const fibonacci = function(n) {
    let num = +n; //convert to int on the fly
    let fibSet = [1, 1];
    for (let i = 1; i < num; i++) {
        fibSet[i + 1] = fibSet[i] + fibSet[i - 1]
    }
    return (num > 0)? fibSet[num - 1]: (num === 0)? 0: "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
