var params = process.argv.slice(2);
var array = params;
var sum = [];
var elementOne = (parseFloat(array[1])+ parseFloat(array[2]) + parseFloat(array[3]));
var elementTwo = (parseFloat(array[0])+ parseFloat(array[2]) + parseFloat(array[3]));
var elementThree = (parseFloat(array[0]) + parseFloat(array[1]) + parseFloat(array[3]));
var elementFour = (parseFloat(array[0]) + parseFloat(array[1]) + parseFloat(array[2]));

console.log( [elementOne, elementTwo, elementThree, elementFour]);



for( var i = 0; i < array.length; i++){
    sum = [i]
}
//loop thru array, and grab all the array elements, so that we can add them