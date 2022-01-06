interface Solve {
    e: number;
    f: number;
}
let solve: Solve = {
    e: 8,
    f: 9
}
//class Calculator is implementing Solve interface here
class Calculator implements Solve {
    e: number;
    f: number;

    constructor(public a: number = 2, public b: number = -4, public c: number = 2.7, public d: number = 0.00) { }
    add(): void {
        console.log(this.a + this.b + this.c);
    }
    subtract(): void {
        console.log(this.a - this.d);
    }
    mul(): any {
        return this.a * this.b * this.c * this.d;
    }
    div(): void {
        console.log(this.e / this.f);
    }
}
let calc1 = new Calculator();
calc1.subtract();
calc1.add();
calc1.mul();
calc1.div();