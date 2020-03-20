const utils = require('./../utils/utils');

const clearArray = array => {
    const arrayOfNumbers = utils.getArrayOfNumbers(array);
    if(!arrayOfNumbers){ return false; }    
    let objOfArray = {};
    for (const iterator of arrayOfNumbers) {
        if(objOfArray[iterator] === undefined){
            objOfArray[iterator] = 0;
        }
        objOfArray[iterator] += 1;
    }
    const keysOfObj = Object.keys(objOfArray);
    const arrayFiltered = keysOfObj.map(n => parseInt(n));    
    return arrayFiltered;
};

module.exports = clearArray;