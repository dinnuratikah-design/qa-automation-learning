let name = "Nuratikah";
let age = 30;
let isQAEngineer = true;
let automationTools = ["Selenium", "Cypress", "Playwright"];
let credentials = {
  username: "nuratikah@example.com",
  password: "abc123"
};
let expectedAge = 18;

// Simulated test steps
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is QA Engineer: " + isQAEngineer);
console.log("Automation Tools: " + automationTools.join(", "));
console.log("Username: " + credentials.username);
console.log("Password: " + credentials.password);
console.log(age >= expectedAge);
console.log(age >= expectedAge && isQAEngineer);



