function getCurrencyCourse(){
    return fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
    .then(data=>data.json());
}

function fillTableOfCourses(table, courses){
    for(let course of courses){
        let row = table.insertRow(-1);
        row.insertCell(-1).innerHTML=course.Cur_Name;
        row.insertCell(-1).innerHTML=(course.Cur_OfficialRate/course.Cur_Scale).toFixed(4);
    }
}