const convertToCelsius = function(tempInF) {
  return Number.parseFloat(( (tempInF - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function(tempInC) {
  return Number.parseFloat((tempInC * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
