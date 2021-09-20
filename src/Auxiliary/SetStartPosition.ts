import {Rectangle} from "../Сlasses/Rectangle";
import {borderHeight} from "../constants";

export const SetStartPosition = (rectangles: Rectangle[]): Rectangle[] => {
    for (let i = 1; i < rectangles.length; i++)
        rectangles[i].y = rectangles[i - 1].y + rectangles[i - 1].height + 5 * borderHeight;
    return rectangles;
}