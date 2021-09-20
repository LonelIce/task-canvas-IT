import {Rectangle} from "../classes/Rectangle";
import {calculateIntervals} from "./calculateIntervals";
import {borderWidth} from "../constants";
import {relocateToggle} from "./relocate";

export const isStuck = (rectangles: Rectangle[], select: Rectangle, intervalGluing: number): void => {
    let intervals = calculateIntervals(select, rectangles);
    rectangles.forEach((rect: Rectangle, index: number): void => {
        if (select !== rect) {
            if (intervals[index].left < intervalGluing && intervals[index].left > 0 && intervals[index].bot < 0 && intervals[index].top < 0) {
                select.x = rect.x + rect.width + borderWidth / 2;
                relocateToggle(true);
            } else if (intervals[index].right < intervalGluing && intervals[index].top < 0 && intervals[index].bot < 0 && intervals[index].right > 0) {
                select.x = rect.x - select.width - borderWidth / 2;
                relocateToggle(true);
            } else if (intervals[index].top < intervalGluing && intervals[index].left < 0 && intervals[index].top > 0 && intervals[index].right < 0) {
                select.y = rect.y + rect.height + borderWidth / 2;
            } else if (intervals[index].bot < intervalGluing && intervals[index].left < 0 && intervals[index].bot > 0 && intervals[index].right < 0) {
                select.y = rect.y - select.height - borderWidth / 2;
                relocateToggle(true);
            }
        }
    });
};