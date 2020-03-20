
const now = new Date();

const findClassRoom = classroomTiming => {
    const classRomms = [];    
    for (const timing of classroomTiming) {
        const startTimeInNumber = getTimeInNumer(timing.start);
        const endTimeInNumber = getTimeInNumer(timing.end);
        const timingInNumber = {start: startTimeInNumber, end: endTimeInNumber};  
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
    return classRomms;
};

const checkTime = (timing1, timing2) => {    
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
    const classRoomAvailable = { indexClassRom: 0, available: true };
    for (let i = 0; i < classRomms.length; i++) {        
        classRoomAvailable.indexClassRom = i;
        classRoomAvailable.available = true;
        for (let j = 0; j < classRomms[i].length; j++) {               
            if(checkTime(timing, classRomms[i][j])){
                classRoomAvailable.available = false;
                break;
            }
        }
        if(classRoomAvailable.available){
            break;
        }
    }
    return classRoomAvailable;
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

module.exports = findClassRoom;