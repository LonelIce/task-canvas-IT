import { Rectangle } from "../components/Rectangle";
import { baseColor, borderWidth, intervalGluing, Mouse, selectedColor } from "../constants";
import { isStuck } from "./isStuck";
import { isIntersections } from "./isIntersections";
import { clearCanvas } from "./clearCanvas";
import { calculateAxisOffset } from "../utils/calculateAxisOffset";
import { calculateIntervals } from "./calculateIntervals";

export const rendering = (rectangles: Rectangle[], selected: Rectangle | null, initX: number = 0, initY: number = 0, initMouseX: number = 0, initMouseY: number = 0): void => {
    clearCanvas();
    if (selected) {
        selected.x = initX + calculateAxisOffset(initMouseX, Mouse.x);
        selected.y = initY + calculateAxisOffset(initMouseY, Mouse.y);
        const intervals = calculateIntervals(selected, rectangles);

        rectangles.forEach((rect: Rectangle, index: number): void => {
            if (rect === selected) return

            isStuck(rect, selected, intervalGluing, intervals, index);
            isIntersections(rect, selected, intervals, index);
            rect.draw(rect.color);
            rect.stroke(borderWidth);
            rect.changeColor(baseColor);
        });
        selected.draw(selected.color);
        selected.stroke(borderWidth);
        selected.changeColor(selectedColor);
    } else {
        rectangles.forEach((rect: Rectangle): void => {
            rect.draw(rect.color);
            rect.stroke(borderWidth);
        });
    }
};