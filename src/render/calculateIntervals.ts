import {Rectangle} from "../components/Rectangle";

export const calculateIntervals = (select: Rectangle | null, rectangles: Rectangle[]): Array<{ [key: string]: number } | undefined> => {
    const intervals: Array<{ [key: string]: number } | undefined> = [];

    rectangles.forEach((rect: Rectangle, index: number): void => {
        if (select === rect) return
        intervals[index] = {
            left: select.x - (rect.x + rect.width),
            right: rect.x - (select.x + select.width),
            top: select.y - (rect.y + rect.height),
            bot: rect.y - (select.y + select.height)
        };
    });

    return intervals;
};