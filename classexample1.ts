let workhrs: number = 3;
class Employee {
    id: number;
    name: string;
    public registration: boolean;
    fav_songs: string[];

    //constructor
    public constructor(id: number, name: string, registration: boolean, fav_songs: string[]) {
        this.id = id;
        this.name = name;
        this.registration = registration;
        this.fav_songs = fav_songs;
    }
    public parttime(): void {
        console.log("Less working hours.");
    }
    public fulltime(): void {
        console.log("More working hours than parttime employee");
    }
}
let employee1 = new Employee(1, "XYZ", false, []);
if (workhrs < 5)
    console.log(employee1.parttime);
else console.log(employee1.fulltime);

