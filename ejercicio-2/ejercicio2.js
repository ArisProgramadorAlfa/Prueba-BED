const utils = require('./../utils/utils');

const sumaEnSerie = (n, m) =>{
    const varsIsOk = checkVars(n, m);
    if(!varsIsOk){ return false }
    let suma = 0;
    for (let i = 0; (n + i) <= m; i++) {
        suma += n + i;                        
    }
    return suma;
}

const checkVars = (n, m) => {
    if(!utils.isPositiveInteger(n) || !utils.isPositiveInteger(m)) { return false; } 
    if(n > m){ return false; }
    return true;
}

module.exports = sumaEnSerie;