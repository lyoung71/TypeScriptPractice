import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(5, 10);
let myCircle = new Circle(5, 10, 20);
let myRectange = new Rectangle(0, 0, 3, 7);

let shapeArray: Shape[] = [];

shapeArray.push(myShape);
shapeArray.push(myCircle);
shapeArray.push(myRectange);

for (let shape of shapeArray) {
    console.log(shape.getInfo());
}
