// Code your solution in this file!
const returnFirstTwoDrivers = function(myCallback){
    return myCallback.slice(0, 2)
}

const returnLastTwoDrivers = function(myCallback){
    return myCallback.slice(myCallback.length - 2, myCallback.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare) {return fare * int}
}

const fareDoubler = function(fare) {
    let doubledFare = createFareMultiplier(2)
    return doubledFare(fare)
}

const fareTripler = function(fare) {
    let triplerFare = createFareMultiplier(3)
    return triplerFare(fare)
}

function selectDifferentDrivers(arrayOfDrivers, selectingDrivers) {
    if (selectingDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers)
    }
    else if (selectingDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}