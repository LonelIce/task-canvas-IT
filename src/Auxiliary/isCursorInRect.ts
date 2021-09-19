import {Rectangle} from "../Сlasses/Rectangle";
import {Mouse} from "../constants";

export const isCursorInRect = (rect: Rectangle): boolean => {
    return Mouse.x > rect.x + 15 && Mouse.x < rect.width + rect.x + 15 && Mouse.y > rect.y + 15 && Mouse.y < rect.y + rect.height + 15;
};