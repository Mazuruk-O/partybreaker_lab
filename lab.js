'use strict';

// 1
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

function showNummber(start,end) {

  for (; start <= end; start++) {
    alert(start);
  }
  return;
}


