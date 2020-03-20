const isPoritiveInteger = n => {
    const nIsNumber = typeof n === 'number';    
    if(!nIsNumber){ return false; }
    if(!Number.isInteger(n)){ return false; }
    if( n <= 0 ){ return false; }
    return true;
}

const getArrayOfNumbers = array => {
    if(!Array.isArray(array)){ return false; }
    if(array.length == 0) { return false; }
    const arrayOfNumber = array.filter(isNumber);
    if(arrayOfNumber.length > 0){
        return arrayOfNumber;
    } else {
        return false;
    }
};

const isNumber = n => typeof n === 'number';
const orderNumbersFilter = (a, b) => a - b;

module.exports = {
    isPoritiveInteger,
    getArrayOfNumbers,
    orderNumbersFilter
};