
function checkDriverAge(age) {

  if (age < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off");
  } else if (age > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (age === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}


var checkDriverAge2 = function () {
  var age = prompt("What is your age?");
  if (Number(age) < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}

checkDriverAge(21);