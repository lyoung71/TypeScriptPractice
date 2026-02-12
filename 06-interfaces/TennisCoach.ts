import { Coach } from "./Coach";

export class TennisCoach implements Coach {
    getDailyWorkout(): string {
        return "Hit 100 serves.";
    }
}
