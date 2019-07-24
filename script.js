
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

//checkDriverAge(21);


// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 451902766392815745

// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var database = [{username:"carlo", password: "123"}];
var newsfeed = [{username:"lorina", timeline:"hello world"},
                {username:"sophia", timeline:"watching stranger thins"},
                {username:"olivia", timeline:"loves karate"}];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password");

function signIn(user, pass) {
  if (user === database[0].username &&
      pass === database[0].password) {
      console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

signIn(userNamePrompt, passwordPrompt);


