// Create an array of five test case names
let testCases = [
  "Login Test",
  "Search Test",
  "Checkout Test",
  "Profile Update Test",
  "Logout Test"
];

// Loop through the array and print "Executing {testName}" for each
for (let testName of testCases) {
  console.log(`Executing ${testName}`);
}

// Create an object that stores username, password, and email
let userObj = {
  username: "qa_tester",
  password: "test123",
  email: "qa@test.com"
};

// Print each property of the object
console.log(userObj.username);
console.log(userObj.password);
console.log(userObj.email);

// Create an array of three user objects, each with username, password, and expectedResult
let users = [
  { username: "qa1", password: "pass1", expectedResult: "Success" },
  { username: "qa2", password: "pass2", expectedResult: "Success" },
  { username: "qa3", password: "pass3", expectedResult: "Fail" }
];

// Loop through the array and print "Logging in with {username}, expecting: {expectedResult}" for each
for (let user of users) {
  console.log(`Logging in with ${user.username}, expecting: ${user.expectedResult}`);
}
