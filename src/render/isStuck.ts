import {Rectangle} from "../components/Rectangle";
import {calculateIntervals} from "./calculateIntervals";
import {borderWidth} from "../constants";
import {relocateToggle} from "./relocate";

export const isStuck = (rectangles: Rectangle[], select: Rectangle, intervalGluing: number): void => {
    let intervals = calculateIntervals(select, rectangles);
    rectangles.forEach((rect: Rectangle, index: number): void => {
        if (select !== rect) {
            const stickToLeft: boolean = intervals[index].left < intervalGluing && intervals[index].left > 0 && intervals[index].bot < 0 && intervals[index].top < 0;
            const stickToRight: boolean = intervals[index].right < intervalGluing && intervals[index].top < 0 && intervals[index].bot < 0 && intervals[index].right > 0;
            const stickToTop: boolean = intervals[index].top < intervalGluing && intervals[index].left < 0 && intervals[index].top > 0 && intervals[index].right < 0;
            const stickToBot: boolean = intervals[index].bot < intervalGluing && intervals[index].left < 0 && intervals[index].bot > 0 && intervals[index].right < 0;
            if (stickToLeft) {
                select.x = rect.x + rect.width + borderWidth / 2;
                relocateToggle(true);
            } else if (stickToRight) {
                select.x = rect.x - select.width - borderWidth / 2;
                relocateToggle(true);
            } else if (stickToTop) {
                select.y = rect.y + rect.height + borderWidth / 2;
            } else if (stickToBot) {
                select.y = rect.y - select.height - borderWidth / 2;
                relocateToggle(true);
            }
        }
    });
};