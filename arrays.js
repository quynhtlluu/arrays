var dogBreeds = ["Beagle", "Boxer", "Bulldog", "Chihuahua", "Pomeranian"];
var dogAges = [3, 4, 5, 8, 12];
var recentlyAdopted = [true, false, true, false, false];

//This shift method removes the first element of an existing array. Expected output would be [ 'Boxer', 'Bulldog', 'Chihuahua', 'Pomeranian' ]
dogBreeds.shift();
console.log(dogBreeds);

//This push method adds an additional element at the end of an existing array. I first had to declare a separate additional element first before it could be added onto the array. Expected output would be [ 3, 4, 5, 8, 12, 9 ]
var dogAge = 9;
dogAges.push(dogAge);
console.log(dogAges);

//This unshift method adds an additional element to the beginnning of an existing array. I first had to declare a separate additional element first before it could be added onto the array. [ false, true, false, true, false, false ]
var recentlyAdoptedDog = false;
recentlyAdopted.unshift(recentlyAdoptedDog);
console.log(recentlyAdopted);
