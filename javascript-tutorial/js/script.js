var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
var lengths= myArray.length;
console.log("Length of array is :" + lengths);
for (var i = 0; i < myArray.length; i++) {
    console.log("  " + i);
  counter++;
}
console.log(counter);