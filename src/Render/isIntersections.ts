import {Rectangle} from "../Сlasses/Rectangle";
import {calculateIntervals} from "./CalculateIntervals";
import {errorColor} from "../constants";
import {RelocateToggle} from "./Relocate";

export const isIntersections = (rectangles: Rectangle[], select: Rectangle): void => {
    let intervals: Array<{ [key: string]: number } | undefined> = calculateIntervals(select, rectangles);
    rectangles.forEach((rect, index: number): void => {
        if (select !== rect) {
            if (intervals[index].left < 0 && intervals[index].bot < 0 && intervals[index].top < 0 && intervals[index].right < 0) {
                rect.changeColor(errorColor);
                select.changeColor(errorColor);
                RelocateToggle(false);
            }
        }
    });
};