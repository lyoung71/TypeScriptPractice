import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myRectange = new Rectangle(0, 0, 3, 7);
console.log(myRectange.getInfo());
