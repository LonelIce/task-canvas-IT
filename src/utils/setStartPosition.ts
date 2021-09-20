import { Rectangle } from "../components/Rectangle";
import { borderWidth } from "../constants";

export const setStartPosition = (rectangles: Rectangle[]): Rectangle[] => {
    for (let i = 1; i < rectangles.length; i++)
        rectangles[i].y = rectangles[i - 1].y + rectangles[i - 1].height + 5 * borderWidth;
    return rectangles;
}