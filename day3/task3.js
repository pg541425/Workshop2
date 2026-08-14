//Calculating Percentage
var Maths=80;
var English=75;
var Science=90;
function calculatePercentage(Maths,English,Science){
    total=((Maths+English+Science)/3);
    return total;
}
console.log(calculatePercentage(Maths,English,Science)+" %");