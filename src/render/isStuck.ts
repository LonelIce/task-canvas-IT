import { Rectangle } from "../components/Rectangle";
import { borderWidth } from "../constants";
import { relocateToggle } from "./relocate";

export const isStuck = (rect: Rectangle, select: Rectangle, intervalGluing: number, intervals: Array<{ [key: string]: number } | undefined> = [], index: number): void => {
    const stickToLeft: boolean = intervals[index].left < intervalGluing && intervals[index].left > -borderWidth && intervals[index].bot < 0 && intervals[index].top < 0;
    const stickToRight: boolean = intervals[index].right < intervalGluing && intervals[index].top < 0 && intervals[index].bot < 0 && intervals[index].right > -borderWidth;
    const stickToTop: boolean = intervals[index].top < intervalGluing && intervals[index].left < 0 && intervals[index].top > -borderWidth && intervals[index].right < 0;
    const stickToBot: boolean = intervals[index].bot < intervalGluing && intervals[index].left < 0 && intervals[index].bot > -borderWidth && intervals[index].right < 0;

    if (stickToLeft) {
        select.x = rect.x + rect.width + borderWidth;
    } else if (stickToRight) {
        select.x = rect.x - select.width - borderWidth;
    } else if (stickToTop) {
        select.y = rect.y + rect.height + borderWidth;
    } else if (stickToBot) {
        select.y = rect.y - select.height - borderWidth;
    }
    if (stickToLeft || stickToRight || stickToTop || stickToBot)
        relocateToggle(true);
};