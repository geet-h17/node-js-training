var myArr = [1,2,3]
var yourArr = [5,6,7]

var finalArr = [...myArr,9,8,7,...yourArr]
// [1,2,3,9,8,7,5,6,7]

console.log(myArr.concat(finalArr))



var myObj = {
    age : 10
};

var yourObj = myObj;

myObj.age++;

console.log(yourObj.age)