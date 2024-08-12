//introducing the users.
let user1 = {
  name: "asghar",
  lastName: "asghari",
  age: 21,
  city: "bushehr",
};
let user2 = {
  name: "akbar",
  lastName: "akbari",
  age: 54,
  city: "tehran",
};
let user3 = {
  name: "kyumers",
  lastName: "kyumersi",
  age: 130,
  city: "alborz",
};
let user4 = {
  name: "kolsum",
  lastName: "akbari",
  age: 68,
  city: "sari",
};
//the function base code.
function introduce(user) {
  //made a variable to show the final results.
  let output = 0;
  //each user name that is sellected, his/her data will pops.(using '${}' so there will be a space between each data.)
  if (user == user1.name) {
    output =
      output = `${user1.name} ${user1.lastName} is ${user1.age} from ${user1.city}.`;
  } else if (user == user2.name) {
    output = `${user2.name} ${user2.lastName} is ${user2.age} from ${user2.city}.`;
  } else if (user == user3.name) {
    output = `${user3.name} ${user3.lastName} is ${user3.age} from ${user3.city}.`;
  } else if (user == user4.name) {
    output = `${user4.name} ${user4.lastName} is ${user4.age} from ${user4.city}.`;
  }
  //if the user doesn't exist, this text will show up.
  else {
    output = "this user doesn't exist.";
  }
  //at the end returning the main var.
  return output;
}
//testing each user.
console.log(introduce("asghar"));
console.log(introduce("akbar"));
console.log(introduce("kyumers"));
console.log(introduce("kolsum"));
console.log(introduce("gholam"));
