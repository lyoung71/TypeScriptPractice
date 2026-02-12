import { CricketCoach } from "./CricketCoach";
import { TennisCoach } from "./TennisCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach;
let myTennisCoach = new TennisCoach;

let theCoaches: Coach[] = [];

theCoaches.push(myCricketCoach);
theCoaches.push(myTennisCoach);

for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
