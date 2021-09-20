import {Rectangle} from "../Сlasses/Rectangle";
import {baseColor, intervalGluing, Mouse, selectedColor} from "../constants";
import {isStuck} from "./isStuck";
import {isIntersections} from "./isIntersections";
import {ClearCanvas} from "./ClearCanvas";
import {calculateAxisOffset} from "../Auxiliary/calculateAxisOffset";

export const Rendering = (rectangles: Rectangle[], selected: Rectangle | null, initX: number, initY: number, initMouseX: number, initMouseY: number): void => {
    ClearCanvas();
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