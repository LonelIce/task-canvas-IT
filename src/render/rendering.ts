import {Rectangle} from "../components/Rectangle";
import {baseColor, intervalGluing, Mouse, selectedColor} from "../constants";
import {isStuck} from "./isStuck";
import {isIntersections} from "./isIntersections";
import {clearCanvas} from "./clearCanvas";
import {calculateAxisOffset} from "../utils/calculateAxisOffset";

export const rendering = (rectangles: Rectangle[], selected: Rectangle | null, initX: number, initY: number, initMouseX: number, initMouseY: number): void => {
    clearCanvas();
    if (selected) {
        selected.x = initX + calculateAxisOffset(initMouseX, Mouse.x);
        selected.y = initY + calculateAxisOffset(initMouseY, Mouse.y);
        isStuck(rectangles, selected, intervalGluing);
        isIntersections(rectangles, selected);
        rectangles.forEach((rect: Rectangle): void => {
            if (rect !== selected) {
                rect.stroke();
                rect.draw(rect.color);
                rect.changeColor(baseColor);
            }
        });
        selected.stroke();
        selected.draw(selected.color);
        selected.changeColor(selectedColor);
    } else {
        rectangles.forEach((rect: Rectangle): void => {
            rect.stroke();
            rect.draw(rect.color);
        });
    }
};