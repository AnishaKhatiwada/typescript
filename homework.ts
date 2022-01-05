//number type
let len:number = -4;
const pi:number = 3.14;


//boolean type
let x:boolean = true;
if(x){
    console.log('value of x is true')
}
//array type
let a: number[] = [1,2,3,4];
let b:string[] = ['A','B','C','D'];
a.push(5);
b.pop();
console.log(a + " " + b );
//string type
let c:string = 'Anisha';
console.log('length of varable c is : ' + c.length);
//undefined type
let d:any;
console.log(typeof(d));
d= 1;
console.log(typeof(d));
d = true;
console.log(typeof(d));

//object type 
let employee: {
    id : number,
    name : string,
    address : string,
    salary: number,
}
employee = {
    id: 1,
    name : 'Anisha',
    address : 'Biratnagar',
    salary: 30000.00
}
console.log(employee);