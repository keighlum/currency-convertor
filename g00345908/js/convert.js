function euroToPounds(){

  var amount = parseInt(document.getElementById("value1").value);

  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
  cansole.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}
//euro to dollar conversion

function euroToDollar(){

  var amount = parseInt(document.getElementById("value1").value);

  var Dollar = amount * 1.06;
  var message = amount + ' euros converts to ' + Dollar + ' US Dollar.';
  cansole.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}

//euro to yen conversion

function euroToYen(){

  var amount = parseInt(document.getElementById("value1").value);

  var Yen = amount * 121.12;
  var message = amount + ' euros converts to ' + Yen + ' Yen.';
  cansole.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}
