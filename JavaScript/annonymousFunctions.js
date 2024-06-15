// function expression = function without a name (Anonymous Function) avoid poluting the global scope with name write it then forget about it

const greeting1 = function () {
    console.log("Hello");
}
greeting();
        
// arrow function = compact alternative to a traditional function =>

const greeting = function (username) {
    console.log(`Hello ${username}`);
}

greeting("Sonal");

let grades = [100, 10, 80, 20, 60, 30, 40, 50, 20];

grades = grades.sort((x, y) => {
    x - y;
});

grades.forEach((element) => {
    console.log(element);
});