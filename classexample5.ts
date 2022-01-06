interface Dog{
    dogbehaviour(): string;
};

class Animal implements Dog {
    
    sound: string;
    move: string[];
    hen(): void {
        console.log(this.move = ["run", "fly"]);
        console.log(this.sound = "cluck");
    }
    snake(): void {
        console.log(this.move = ["crawl"]);
        console.log(this.sound = "hiss");
    }
    dogbehaviour(): string {
        return("Dogs are very loyal.");
    }
}
let eg = new Animal();
eg.hen();
eg.snake();
eg.dogbehaviour();