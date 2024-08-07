function introduce(user, user1, user2, user3, user4) {
  let output = 0;
  user1 = {
    name: "asghar",
    lastName: "asghari",
    age: 21,
    city: "bushehr",
  };
  user2 = {
    name: "akbar",
    lastName: "akbari",
    age: 54,
    city: "tehran",
  };
  user3 = {
    name: "kyumers",
    lastName: "kyumersi",
    age: 130,
    city: "alborz",
  };
  user4 = {
    name: "kolsum",
    lastName: "akbari",
    age: 68,
    city: "sari",
  };

  if (user == "asghar") {
    output =
      output = `${user1.name} ${user1.lastName} is ${user1.age} from ${user1.city}.`;
  } else if (user == "akbar") {
    output = `${user2.name} ${user2.lastName} is ${user2.age} from ${user2.city}.`;
  } else if (user == "kyumers") {
    output = `${user3.name} ${user3.lastName} is ${user3.age} from ${user3.city}.`;
  } else if (user == "kolsum") {
    output = `${user4.name} ${user4.lastName} is ${user4.age} from ${user4.city}.`;
  } else {
    output = "this user doesn't exist.";
  }
  return output;
}
console.log(introduce("asghar"));
console.log(introduce("akbar"));
console.log(introduce("kyumers"));
console.log(introduce("kolsum"));
console.log(introduce("gholam"));
