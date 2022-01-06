class Rectangle {
    public l: number = 3;
    public b: number = 4;
    public area(): any {
        return this.l * this.b;
    }
    public perimeter(): void {
        console.log(2 * (this.l + this.b));
    }
}
let rect = new Rectangle();
rect.area();
rect.perimeter();