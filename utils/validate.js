function isValidString(value) {
    return typeof value === 'string' && value.trim().length > 0;
}

function isValidNumber(value) {
    return typeof value === 'number' && !isNaN(value) && value >= 0;
}
  
module.exports = {
    isValidString,
    isValidNumber
};