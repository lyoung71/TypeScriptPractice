"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(5, 10);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectange = new Rectangle_1.Rectangle(0, 0, 3, 7);
var shapeArray = [];
shapeArray.push(myShape);
shapeArray.push(myCircle);
shapeArray.push(myRectange);
for (var _i = 0, shapeArray_1 = shapeArray; _i < shapeArray_1.length; _i++) {
    var shape = shapeArray_1[_i];
    console.log(shape.getInfo());
}
