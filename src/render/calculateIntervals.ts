import {Rectangle} from "../classes/Rectangle";

export const calculateIntervals = (select: Rectangle | null, rectangles: Rectangle[]): Array<{ [key: string]: number } | undefined> => {
    let intervalLeft: number, intervalRight: number, intervalTop: number, intervalBot: number,
        intervals: Array<{ [key: string]: number } | undefined> = [];
    rectangles.forEach((rect: Rectangle, index: number): void => {
        if (select !== rect) {
            intervalLeft = select.x - (rect.x + rect.width);
            intervalRight = rect.x - (select.x + select.width);
            intervalTop = select.y - (rect.y + rect.height);
            intervalBot = rect.y - (select.y + select.height);
            intervals[index] = {left: intervalLeft, right: intervalRight, top: intervalTop, bot: intervalBot};
        }
    });
    return intervals;
};