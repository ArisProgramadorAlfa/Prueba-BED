const utils = require('./../utils/utils');

const getHigherNumber = (array, k) => {
    const arrayOfNumbers = utils.getArrayOfNumbers(array);
    if(!arrayOfNumbers) { return false; }
    if( !utils.isPoritiveInteger(k) ) { return false }
    if(k > arrayOfNumbers.length) { return false }
    const arrayOrdered = arrayOfNumbers.sort(utils.orderNumbersFilter);
    console.log(arrayOrdered);    
    const heigherNumber = arrayOrdered[arrayOrdered.length - k];    
    return heigherNumber;
}

module.exports = getHigherNumber;