//class declaration
var Cuboid = /** @class */ (function () {
    function Cuboid(l, b, w) {
        this.l = l;
        this.b = b;
        this.w = w;
    }
    Cuboid.prototype.volume = function () {
        return this.l * this.b * this.w;
    };
    return Cuboid;
}());
var cuboid1 = new Cuboid(1, 2, 3);
console.log(cuboid1.volume());
