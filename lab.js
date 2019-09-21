'use strict';

/** 1 Идентификаторы **/
var name = "Oleg";
const constName = "constName";

const birthYear = 1998;

function showMessage(fname = "No name") {
  alert(fname + ' ' + "hello!");
  return;
}

showMessage("DonNU");
showMessage("Test");

showMessage(name);
showMessage(constName);

/** 2 Циклы **/

function showNummber(start,end) {

  for (; start <= end; start++) {
    alert(start);
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
	alert( average( square(i), cube(i) ) );
}

/** 4 Обьекты **/

const const_obj = {
	name: "Name"
};


var obj = {
	name: "Name2"
};

alert(const_obj.name);
alert(obj.name);

const_obj.name = "NewCOnstName";
obj.name = "newObjName";

alert(const_obj.name);
alert(obj.name);

var obj_test = {
	age: 50
}

const_obj = obj_test;
obj = obj_test;

alert(const_obj.name);
alert(obj.name);

function createUser(nameUser,cityUser) {
	return {
		name: nameUser,
		city: cityUser
	}
}

let resultFunc_makeUser = makeUser("JS", "Moldova");
alert(resultFunc_makeUser);

/** 5 Масивы **/

var array = [
	{ name: 'Marcus Aurelius', phone: '+380445554433' },
	{ name: 'AAAA BBBBB', phone: '+3804324254433' },
	{ name: 'DSFSDF AurelSDFiSDFus', phone: '+380234554433' }
];

var searchNumber = array.find(searchNumber => searchNumber.name === 'Marcus Aurelius');

alert(searchNumber);

/** 6 Коллекции **/

function hashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = ~~(((hash << 5) - hash) + str.charCodeAt(i));
    }
    return hash;
}

