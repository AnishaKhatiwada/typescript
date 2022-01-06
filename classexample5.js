;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.hen = function () {
        console.log(this.move = ["run", "fly"]);
        console.log(this.sound = "cluck");
    };
    Animal.prototype.snake = function () {
        console.log(this.move = ["crawl"]);
        console.log(this.sound = "hiss");
    };
    Animal.prototype.dogbehaviour = function () {
        return ("Dogs are very loyal.");
    };
    return Animal;
}());
var eg = new Animal();
eg.hen();
eg.snake();
eg.dogbehaviour();
