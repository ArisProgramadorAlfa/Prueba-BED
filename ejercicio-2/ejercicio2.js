

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
    const nIsNumber = typeof n === 'number';
    const mIsNumber = typeof m === 'number';
    if(!nIsNumber || !mIsNumber){ return false; }
    if(!Number.isInteger(n) || !Number.isInteger(m)){ return false; }
    if( n <= 0 || m <= 0 ){ return false; }
    if(n > m){ return false; }
    return true;
}



module.exports = sumaEnSerie;