function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
// function createEmployeeRecords(array){
//     let employeeRecs = [];
//     for(let i = 0; i < array.length; i++){
//         employeeRecs.push(createEmployeeRecord(array[i]))
//     }
// }
function createEmployeeRecords(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
    newArray.push(createEmployeeRecord(array[i]))
}
return newArray;
}