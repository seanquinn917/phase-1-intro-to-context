// Your code here

//create a time card that has the required input
//to get that input, iterate through an array and populate the corresponding info
//return the new populated card





function createEmployeeRecord([string1, string2, string3, pay]){

  let employeeRecordObj = {
    firstName: string1,
    familyName: string2,
    title: string3,
    payPerHour: pay,
    timeInEvents: [],
    timeOutEvents: []
    
  }
    // console.log(employeeRecordObj)
  return employeeRecordObj
    }
   
  // let myArray = [
  //     [string1, string2, string3, num],
  //     [string1, string2, string3, num]
  //   ];

function createEmployeeRecords(myArray){
  //return array objects
  //calling .map on myArray with the function createEmployeeRecord should return objectrs for each
  let newArray = myArray.map(createEmployeeRecord)
  return newArray
}

function createTimeInEvent(employeeRecordObj, dateStamp){
  //console.log('inside of createTimeInEvents, this is the dateStamp that is needed: ', dateStamp)
  let dateStampsArray = dateStamp.split(" ");
  let parsedNum = parseInt(dateStampsArray[1], 10)
  let timeInEventObj = {
  type: "TimeIn",
  hour: parsedNum,
  date: `${dateStampsArray[0]}`
};
  employeeRecordObj.timeInEvents.push(timeInEventObj)
  return employeeRecordObj
}

function createTimeOutEvent(employeeRecordObj, dateStamp){
  let dateStampArray= dateStamp.split(" ");
  let parsedNumber = parseInt(dateStampArray[1], 10)
  let timeOutEventObj = {
    type: 'TimeOut',
    hour: parsedNumber,
    date: `${dateStampArray[0]}`
  }
  employeeRecordObj.timeOutEvents.push(timeOutEventObj)
  return employeeRecordObj
}

// function hoursWorkedOnDate(employeeRecordObj, dateStamp){
// let dateStampArray = dateStamp.split(' ')
// let parsedNum = parseInt(dateStampArray[0], 10)
// let employeeRecord = createEmployeeRecord()
// let hoursWorked = []
// if(dateStamp === dateStamp){
//   return parseInt(employeeRecord.timeOutEvents.hour.value -= employeeRecord.timeInEvents.hour.value).push(hoursWorked)
// }
// return hoursWorked
// }
 
// function hoursWorkedOnDate(employeeRecordObj, string){
//   console.log('this is the string argument inside of hoursWorkedOnDate:', string)
// let timeIn = createTimeInEvent(employeeRecordObj, string)
// let timeOut = createTimeOutEvent(employeeRecordObj, string)
// let newArray = string.split(" ")
// console.log(newArray)
// let parsedNum = parseInt(newArray[1], 10)
// console.log(parsedNum)

// }

function hoursWorkedOnDate(employeeRecordObj, string){
  console.log('this is the employee record object:', employeeRecordObj )
}
