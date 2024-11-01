/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/
function checkPassword(requiredPassword, inputPassword) {
    if (inputPassword.length < 5) {
        console.log("Your password is too short!");
    }
    else if (requiredPassword === inputPassword && requiredPassword === "forgot") {
        console.log("Access Granted. This password you set should not be used because it glitches the system")
    } else if (requiredPassword === inputPassword && inputPassword === "reset") {
        console.log("Access Granted. This password you set should not be used because it glitches the system")
        // I am not sure how to log aside, so I jus add them
    } else if (inputPassword === "forgot") {
        console.log("Here is a hint")
    }
    else if (inputPassword === "reset") {
        console.log("Let's reset your account")
    } else if (requiredPassword.length < 5 && requiredPassword === inputPassword) {
        console.log("Access Granted! This password you set should not be used because it glitches the system");

    } else if (requiredPassword === inputPassword) {
        console.log("Access Granted!");
    } else if (inputPassword.length < 5) {
        // in the situation of requiredPassword > 5 I am not sure how to do a code
        console.log("Your password is too short!");
    } else {
        console.log("Access Denied!");
    }
}
checkPassword("forgot", "forgot")
checkPassword("reset", "reset")
checkPassword("hkihi", "hkihi")
checkPassword("hhhui", "hki")
checkPassword("hkihi", "hlihi")
checkPassword("jj", "jj")
