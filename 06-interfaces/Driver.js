"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var TennisCoach_1 = require("./TennisCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach;
var myTennisCoach = new TennisCoach_1.TennisCoach;
var theCoaches = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myTennisCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoach = theCoaches_1[_i];
    console.log(tempCoach.getDailyWorkout());
}
