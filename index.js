// Node module that prints N dates between X months
var nMonths = 6; // difference in months between the dates
var numDates = 40; // how many dates to print
var startDate = new Date(); // current date
var endDate = new Date();
endDate.setMonth(endDate.getMonth()+nMonths); 

for (var i = 0; i < numDates; i++) {
    var res = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    console.log(formatDate(res));
}

function formatDate(inputDate) {
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