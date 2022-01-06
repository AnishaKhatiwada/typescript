var Rectangle = /** @class */ (function () {
    function Rectangle() {
        this.l = 3;
        this.b = 4;
    }
    Rectangle.prototype.area = function () {
        return this.l * this.b;
    };
    Rectangle.prototype.perimeter = function () {
        console.log(2 * (this.l + this.b));
    };
    return Rectangle;
}());
var rect = new Rectangle();
rect.area();
rect.perimeter();
