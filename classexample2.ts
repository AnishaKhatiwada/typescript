//class declaration
class Cuboid {
    public constructor(public l: number, public b: number, public w: number) { }

    public volume(): number {
        return this.l * this.b * this.w;
    }
}
let cuboid1 = new Cuboid(1, 2, 3);
console.log(cuboid1.volume());