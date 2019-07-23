
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

array.shift();
console.log(array);

// 2. Sort the array in order.
console.log(array.sort());

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array);

// 4. Remove "Apples" from the array.
array.shift();
console.log(array);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
console.log(array.reverse());
// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
 var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1][0]);


