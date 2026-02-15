const findTheOldest = function(arr) {
    const date = new Date();
    const year = date.getFullYear();

    return arr.sort((a,b) => {
        let aAge = "yearOfDeath" in a? a.yearOfDeath - a.yearOfBirth: year - a.yearOfBirth;
        let bAge = "yearOfDeath" in b? b.yearOfDeath - b.yearOfBirth: year - b.yearOfBirth;
        return aAge - bAge;
    })[arr.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
