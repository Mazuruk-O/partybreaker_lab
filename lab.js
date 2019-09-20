'use strict';

// 1
var name = "Oleg";
const constName = "constName";

const birthYear = 1998;

function showMessage(fname = "No name") {
  alert(fname + ' ' + "hello!");
}

showMessage("DonNU");
showMessage("Test");

showMessage(name);
showMessage(constName);




