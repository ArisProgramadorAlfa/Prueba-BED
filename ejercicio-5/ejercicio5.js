
const checkChar = s => ( s === '(' || s === ')' || s === '[' || s === ']' );
const couples = {"(": ')', "[": ']'};

const stringCheckingComplete = str => {
    const arrayFiltered = str.split('').filter(checkChar);
    if(arrayFiltered.length < 2) { return false; }
    const arrayOfCouples = [];
    for (const s of arrayFiltered) {
        if(s === '(' || s === '['){           
            arrayOfCouples.push(s)
        } else if(s === ')' || s === ']'){
            if(arrayOfCouples.length === 0){
                return false;
            }            
            const previousElement = arrayOfCouples[arrayOfCouples.length - 1];
            if(couples[previousElement] === s){                
                arrayOfCouples.pop();
            } else {
                arrayOfCouples.push(s);
            }
        }  
    }
    return arrayOfCouples.length === 0;
};

const stringCheckingSimple = str => {
    const arrayFiltered = str.split('').filter(checkChar);
    if(arrayFiltered.length < 2) { return false; }        
    if(arrayFiltered.length % 2 == 1){ return false; }
    const middleOfArray = arrayFiltered.length / 2;
    for (let i = 0; i < middleOfArray; i++) {
        const element = arrayFiltered[i];
        const elementCouple = arrayFiltered[arrayFiltered.length - 1 - i];
        if(couples[element] !== elementCouple){
            return false;
        }
    }
    return true;
};

module.exports = {
    stringCheckingSimple, stringCheckingComplete
};