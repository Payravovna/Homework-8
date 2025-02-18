//1
let age = +prompt("Скольво вам лет")

function makeAge(age) {
    if (age >= 18) {
        alert("Проходите")
    } else if (age < 18) {
        alert("Вход запрещен")
    }
    else{
        typeof age != "number" || age < 0
       alert("Дебил !")
    }
}
 makeAge(age);

//2
let a = +prompt("Введите первое число")
let b = +prompt("Введите второе число")
let operator = prompt("Введите оператор: + - / * ** %")

function do_canculator(a, b) {
    switch (operator) {
        case "+":
            console.log(a + b);
            break;
        case "-":
            console.log(a - b);
            break;
        case "/":
            console.log(a / b);
            break;
        case "*":
            console.log(a * b);
            break;
        case "**":
            console.log(a ** b);
            break;
        case "%":
            console.log(a % b);
            break;

        default:
            break;
    }
}
do_canculator(a, b)

//3
function maxName(...names) {
    let longest = ""
    names.forEach(name => {
        if (name.length > longest.length) {
            longest = name;
        }
    });

    return longest;
}
console.log( maxName("Alex", "George", "Michael"));

