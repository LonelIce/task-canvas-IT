import {Rectangle} from "../Сlasses/Rectangle";
import {canvas, Mouse} from "../constants";
import {MarginCalculate} from "./MarginCalculate";

export const isCursorInRect = (rect: Rectangle): boolean => {
    return Mouse.x > rect.x + MarginCalculate(canvas) && Mouse.x < rect.width + rect.x + MarginCalculate(canvas) && Mouse.y > rect.y + MarginCalculate(canvas) && Mouse.y < rect.y + rect.height + MarginCalculate(canvas);
};