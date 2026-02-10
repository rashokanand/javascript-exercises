const sumAll = function(from, to) {

    if (from < 0 || to < 0 || !Number.isInteger(from + to)) return 'ERROR';

    let sum = (from > to)? to: from; //Initialize sum to the smaller number
    let larger = sum == from? to: from;

    for (let i = sum + 1; i <= larger; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
