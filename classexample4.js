var solve = {
    e: 8,
    f: 9
};
//class Calculator is implementing Solve interface here
var Calculator = /** @class */ (function () {
    function Calculator(a, b, c, d) {
        if (a === void 0) { a = 2; }
        if (b === void 0) { b = -4; }
        if (c === void 0) { c = 2.7; }
        if (d === void 0) { d = 0.00; }
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    Calculator.prototype.add = function () {
        console.log(this.a + this.b + this.c);
    };
    Calculator.prototype.subtract = function () {
        console.log(this.a - this.d);
    };
    Calculator.prototype.mul = function () {
        return this.a * this.b * this.c * this.d;
    };
    Calculator.prototype.div = function () {
        console.log(this.e / this.f);
    };
    return Calculator;
}());
var calc1 = new Calculator();
calc1.subtract();
calc1.add();
calc1.mul();
calc1.div();
