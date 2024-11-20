const fs = require("fs").promises;
//John Smith is 50 years old and his hobbies are swimming and dancing

// THEN-CATCH SOLUTION BELOW THIS LINE
let firstName, lastName, age1, hobbies1;
fs.readFile("./firstname.txt", "utf-8")
  .then(firstname => {
    firstName = firstname
    return fs.readFile("./lastname.txt", "utf-8");
  })
  .then(lastname => {
    lastName = lastname
    return fs.readFile("./age.txt", "utf-8");
  })
  .then(age => {
    age1 = age
    return fs.readFile("./hobbies.txt", "utf-8");
  })
  .then(hobby => {
    hobbies1 = JSON.parse(hobby)
    console.log(`${firstName} ${lastName} is ${age1} years old and his hobbies are ${hobbies1[0]} and ${hobbies1[1]}`)
  })
  .catch(error => {
    console.log("Error reading file:", error)
  })





// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function outputSentence () {
  try {
    const firstname = await fs.readFile("./firstname.txt", "utf-8");
    const lastname = await fs.readFile("./lastname.txt", "utf-8");
    const age = await fs.readFile("./age.txt", "utf-8");
    const hobbiesStr = await fs.readFile("./hobbies.txt", "utf-8");
    const hobbies = JSON.parse(hobbiesStr);

    console.log(`${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`)
  } catch(error) {
    console.error("Error reading file:", error);
  }
}

outputSentence()