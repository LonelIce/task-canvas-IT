import {Rectangle} from "../components/Rectangle";
import {calculateIntervals} from "./calculateIntervals";
import {errorColor} from "../constants";
import {relocateToggle} from "./relocate";

export const isIntersections = (rectangles: Rectangle[], select: Rectangle): void => {
    let intervals: Array<{ [key: string]: number } | undefined> = calculateIntervals(select, rectangles);
    rectangles.forEach((rect, index: number): void => {
        if (select !== rect) {
            if (intervals[index].left < 0 && intervals[index].bot < 0 && intervals[index].top < 0 && intervals[index].right < 0) {
                rect.changeColor(errorColor);
                select.changeColor(errorColor);
                relocateToggle(false);
            }
        }
    });
};