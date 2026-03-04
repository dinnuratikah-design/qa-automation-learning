function runTest(testName){
    console.log("Starting test: " + testName);
    console.log("Test complete: " + testName);
}

function compareValues(expected, actual) {
    if (expected === actual) {
        console.log("Test passed");
    } else {
        console.log("Test failed");
    }
}

runTest("Login");
compareValues(5, 5);
runTest("Checkout");
compareValues(10, 5);