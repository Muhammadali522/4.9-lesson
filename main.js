const Front_897 = [
    {
        ism: "Muhammadali",
        login: 773633,
        password: 91860,
    },
    {
        ism: "Zubayer",
        login: 597168,
        password: 86455,
    },
    {
        ism: "Elshod",
        login: 759846,
        password: 45623,
    },
    {
        ism: "Sanjar",
        login: 84682,
        password: 47365,
    },
    {
        ism: "Samir",
        login: 849855,
        password: 13516,
    },
    {
        ism: "Suhrob",
        login: 547054,
        password: 56753,
    },
    {
        ism: "Begzod",
        login: 484868,
        password: 77775,
    },
    {
        ism: "Jalolidinov",
        login: 456123,
        password: 15642,
    },
];

let btn = document.querySelector(".btn3")
let form = document.querySelector("form");
let input__login = document.querySelector(".input__login");
let input__password = document.querySelector(".input__password");

console.log(Front_897 );
console.log(`Bu Object `);


function InputValidationFunction() {
    if (input__login.value === "" || input__password.value === "") {
        btn.disabled = true;
        btn.style.opacity = "0.3"
    } else {
        btn.disabled = false;
        btn.style.opacity = "1"
    }
}
InputValidationFunction()

input__login.addEventListener("input", InputValidationFunction);
input__password.addEventListener("input", InputValidationFunction);


form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let Login__value = input__login.value;
    let Password__value = input__password.value;
    const result = Front_897.find(item => item.login == Login__value && item.password == Password__value)
    if (result) {
        alert(`${result.ism} Hush keldsiz`)
    } else {
        alert("Login yoki parol notogri")
    }


    input__login.value = ""
    input__password.value = ""


});



// Zuhriddin Instructor assolomu aleykum yahshimisiz qanaqa chiqdi
// zormi ???
// spaseni login clone faqat passworda qozni qilomadim :( 
// Object yahshimi ?