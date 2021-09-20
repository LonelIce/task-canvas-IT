import { Rectangle } from "../components/Rectangle";
import { borderWidth } from "../constants";

export const calculateIntervals = (select: Rectangle | null, rectangles: Rectangle[]): Array<{ [key: string]: number } | undefined> => {
    const intervals: Array<{ [key: string]: number } | undefined> = [];

    rectangles.forEach((rect: Rectangle, index: number): void => {
        if (select === rect) return
        intervals[index] = {
            left: select.x - (rect.x + rect.width) - 2 * borderWidth,
            right: rect.x - (select.x + select.width) - 2 * borderWidth,
            top: select.y - (rect.y + rect.height) - 2 * borderWidth,
            bot: rect.y - (select.y + select.height) - 2 * borderWidth
        };
    });

    return intervals;
};