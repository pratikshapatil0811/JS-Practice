// Scope
// var c = 300;
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    console.log("INNER: ", a); // 10
}

console.log(a); // 300
// console.log(b); // ReferenceError: b is not defined


// Nested functions
function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username);
    }

    // console.log(website); // ReferenceError
    two();
}

one(); // hitesh


// Nested if blocks
if (true) {
    const username = "hitesh";

    if (username === "hitesh") {
        const website = " youtube";
        console.log(username + website);
    }

    // console.log(website); // ReferenceError
}

// console.log(username); // ReferenceError


// Function declaration
console.log(addone(5)); // 6

function addone(num) {
    return num + 1;
}


// Function expression
const addTwo = function(num) {
    return num + 2;
};

console.log(addTwo(5)); // 7