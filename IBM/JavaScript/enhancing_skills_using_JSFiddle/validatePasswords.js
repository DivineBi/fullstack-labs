const passwords = ["Goodpassword1", "short", "Goodpassword2", "waaaaaaaay_tooooooo_long_password", "2025"];
// regular expression used to define the pattern for valid passwords
function validatePasswords(passwords){
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    for (let i = 0; i < passwords.length; i++){
        if (regex.test(passwords[i])){
            console.log(`${passwords[i]} is valid.`);
        } else {
            console.log(`${passwords[i]} is invalid.`);
        }
    }
}

validatePasswords(passwords);