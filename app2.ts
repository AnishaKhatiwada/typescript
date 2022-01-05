//Example1
//find circumference of circle
const pi:number = 3.14;
function circumference(r:number): number {
return 2*pi*r;
}
let c:number = circumference(4);
console.log(c);

//Example2
//find smallest among two numbers
function check(a:number, b:number): void{
    if(a<b) return console.log('a is smallest');
    else return console.log('b is smallest');
    }
    
    let result:void = check(5,6);

    //Example3
//add two numbers
//named function
function add(a:number, b:number):number {
    return a+b;
}

let sum: number = add(1,2);
console.log(sum);

//Example4
//find area of rectangle
//named function
function area(length:number, breadth: number): number{
    return length*breadth;
}
let rectarea:number = area(2,4);
console.log(rectarea);

//Example5
//using anonymous function
let hello = function (x: string, y: number): any {
    
    console.log(x.toUpperCase());
    return x + y;
  }
  let hel:string = hello('Nepal', 1);
  console.log(hel);

