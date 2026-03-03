// Create an array of 5 different test names
let tests = [
  { name: "Login", passed: true },
  { name: "Search", passed: false },
  { name: "Checkout", passed: 0 },
  { name: "Profile", passed: true },
  { name: "Logout", passed: false }
];


for (let test of tests) {

    switch (test.passed) {
        case true:
            console.log(test.name + " test passed");
            break;
        case false:
            console.log(test.name + " test failed");
            break;
        default:
            console.log(test.name + " test skipped");
    }


}