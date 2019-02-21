// Node module that prints N dates between X months
var nMonths = 6;
var numDates = 40;
var startDate = new Date();

console.log(getCurrentdate(startDate));

for (var i = 0; i < numDates; i++) {
    var mToAdd = getRandomInt(0, nMonths);
    var dToAdd = getRandomInt(0, 20)
}

function getCurrentdate(inputDate) {
    var dd = inputDate.getDate();
    var mm = inputDate.getMonth() + 1; //January is 0!
    var yyyy = inputDate.getFullYear();
    if (dd < 10) {
    dd = '0' + dd;
    } 
    if (mm < 10) {
    mm = '0' + mm;
    } 
    var res = yyyy + '-' + mm + '-' + dd;
    return res;
}

function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
}