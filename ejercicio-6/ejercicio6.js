
const now = new Date();

const findClassRoom = classroomTiming => {
    try{
        const classRomms = [];    
        for (const timing of classroomTiming) {        
            const timingInNumber = getTimmingInNumber(timing)
            if(classRomms.length === 0){
                classRomms.push([timingInNumber]);              
            } else {
                const classRoomAvailable = searchAvailableTiming(classRomms, timingInNumber);           
                if(classRoomAvailable.available){
                    classRomms[classRoomAvailable.indexClassRom].push(timingInNumber);                
                } else {
                    classRomms.push([timingInNumber])
                }
            } 
        }    
        return classRomms.length;
    }catch (e){
        return false;
    }
    
};

const checkTiming = (timing1, timing2) => {    
    if( (timing1.start >= timing2.start && timing1.start < timing2.end) ||
        (timing1.end > timing2.start && timing1.end <= timing2.end) 
        || (timing2.start >= timing1.start && timing2.start < timing1.end) ||
        (timing2.end > timing1.start && timing2.end <= timing1.end)  
        ){
        return true;
    } else {
        return false;
    }
}

const searchAvailableTiming = (classRomms, timing) => {
    let available = false;
    for (let i = 0; i < classRomms.length; i++) {        
        available = true;
        for (let j = 0; j < classRomms[i].length; j++) {               
            if(checkTiming(timing, classRomms[i][j])){
                available = false;
                break;
            }
        }
        if(available){
            return { available, indexClassRom: i };
        }
    }
    return { available };
};

const convertTime2Number = strTime => {
    const [ hours, minutes ] = strTime.split(':').map( s => parseInt(s));
    return { hours, minutes };
};

const getTimeInNumer = time => {    
    const { hours, minutes } = convertTime2Number(time);                              
    const startTimeInNumber = new Date(now.getFullYear(), now.getMonth()+1, now.getDate(), hours, minutes);
    return startTimeInNumber.getTime();
}

const getTimmingInNumber = (timing) => {
    const startTimeInNumber = getTimeInNumer(timing.start);
    const endTimeInNumber = getTimeInNumer(timing.end);
    return { start: startTimeInNumber, end: endTimeInNumber }; 
};

module.exports = findClassRoom;