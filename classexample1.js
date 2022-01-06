var workhrs = 3;
var Employee = /** @class */ (function () {
    //constructor
    function Employee(id, name, registration, fav_songs) {
        this.fav_songs = fav_songs;
        this.id = id;
        this.name = name;
        this.registration = registration;
    }
    Employee.prototype.parttime = function () {
        console.log("Less working hours.");
    };
    Employee.prototype.fulltime = function () {
        console.log("More working hours than parttime employee");
    };
    return Employee;
}());
var employee1 = new Employee(1, "XYZ", false, []);
if (workhrs < 5)
    console.log(employee1.parttime);
else
    console.log(employee1.fulltime);
