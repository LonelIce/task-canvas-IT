import { Rectangle } from "../components/Rectangle";
import { canvas, Mouse } from "../constants";
import { calculateMargin } from "./calculateMargin";

export const isCursorInRect = (rect: Rectangle): boolean => {
    return Mouse.x > rect.x + calculateMargin(canvas) && Mouse.x < rect.width + rect.x + calculateMargin(canvas) && Mouse.y > rect.y + calculateMargin(canvas) && Mouse.y < rect.y + rect.height + calculateMargin(canvas);
};