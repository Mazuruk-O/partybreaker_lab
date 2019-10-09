'use strict';

/** 1 Идентификаторы **/
var name = "Oleg";
const constName = "constName";

const birthYear = 1998;

function showMessage(fname = "No name") {
    console.log(fname + ' ' + "hello!");
    return;
}

showMessage("DonNU");
showMessage("Test");

showMessage(name);
showMessage(constName);

/** 2 Циклы **/

function showNummber(start,end) {

    for (; start <= end; start++) {
        console.log(start);
    }
    return;
}

showNummber(10,30);

/** 3 Фунции **/

function average(a,b) {
    return (a+b)/2;
}

function square(a) {
    return a*a;
}

function cube(a) {
    return a*a*a;
}

for(var i = 0; i < 10; i++){
    console.log( average( square(i), cube(i) ) );
}

/** 4 Обьекты **/

const const_obj = {
    name: "Name"
};


var obj = {
    name: "Name2"
};

console.log(const_obj.name);
console.log(obj.name);

const_obj.name = "NewCOnstName";
obj.name = "newObjName";

console.log(const_obj.name);
console.log(obj.name);

var obj_test = {
    age: 50
}

//const_obj = obj_test;
obj = obj_test;

console.log(const_obj.name);
console.log(obj.name);

function createUser(nameUser,cityUser) {
    return {
        name: nameUser,
        city: cityUser
    }
}

let resultFunc_makeUser = createUser("JS", "Moldova");
console.log(resultFunc_makeUser);

/** 5 Масивы **/

var array = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'AAAA BBBBB', phone: '+3804324254433' },
    { name: 'DSFSDF AurelSDFiSDFus', phone: '+380234554433' }
];

var searchNumber = array.find(searchNumber => searchNumber.name === 'Marcus Aurelius');

console.log(searchNumber);

/** 6 Коллекции **/

function hashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = ~~(((hash << 5) - hash) + str.charCodeAt(i));
    }
    return hash;
}

console.log(hashCode('123124'))
