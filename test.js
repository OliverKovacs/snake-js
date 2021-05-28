const Snake = require("./index.js");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const snake = new Snake(6, 6);

(loop = input => {
    snake.direction = JSON.parse(input);
    snake.next();
    console.log(snake.stringify())
    rl.question("next: ", loop);
})(0);
