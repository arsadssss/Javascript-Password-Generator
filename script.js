var generate = document.querySelector("#btn");
var pass = document.querySelector("#txt");
var txtbox = document.querySelector("#inputBox");
const length = 8;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbols = "!@#$%^&*()_+=-\[]{}|'/><.,";
const any = uppercase + lowercase + number + symbols;

generate.addEventListener("click",function(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];
    // var num = Math.floor(Math.random()*1000000) +1;
    while (length > password.length) {
        password += any[Math.floor(Math.random()*any.length)];
    }
    txtbox.value = password;
})

document.querySelector("#copy").addEventListener("click", function(){
    txtbox.select();
    document.execCommand("copy");
})