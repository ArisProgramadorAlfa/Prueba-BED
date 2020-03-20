const utils = require('./../utils/utils');

const getSubArray = (array) => {
    const arrayOnNumbers = utils.getArrayOfNumbers(array);
    if(!arrayOnNumbers) { return false; }
    let subArrayTemp = [];
    let newSubArray = [];
    for (const iterator of arrayOnNumbers) {       
        subArrayTemp.push(iterator);        
        if(subArrayTemp.length > 1){            
            if(subArrayTemp[subArrayTemp.length - 1] <= subArrayTemp[subArrayTemp.length - 2]){
                subArrayTemp.pop();
                if(subArrayTemp.length > 1 && subArrayTemp.length > newSubArray.length){
                    newSubArray = subArrayTemp;
                }
                subArrayTemp = [iterator];
            } else {
                if(iterator === array[array.length - 1] && subArrayTemp.length > newSubArray.length){
                    newSubArray = subArrayTemp;
                }
            }            
        }
    }
    return newSubArray;    
}

module.exports = getSubArray;