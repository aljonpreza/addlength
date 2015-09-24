/**
 * Created by aljonp on 9/24/15.
 */
var meep = ["apple", "pear"];

function addLength(array) {
  return _.map(array, function(num) {
    return num + " " + num.length;
  })
}

console.log(addLength(meep));

