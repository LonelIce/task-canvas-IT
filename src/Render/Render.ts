import {Rectangle} from "../Сlasses/Rectangle";
import {baseColor, intervalGluing, Mouse, selectedColor} from "../constants";
import {isStuck} from "./isStuck";
import {isIntersections} from "./isIntersections";
import {ClearCanvas} from "./ClearCanvas";

export const Rendering = (rectangles: Rectangle[], selected: Rectangle | null): void => {
    ClearCanvas();
    if (selected) {
        selected.x = Mouse.x - selected.width / 2;
        selected.y = Mouse.y - selected.height / 2;
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