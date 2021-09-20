import {baseColor, canvas, Mouse, selectedColor} from "./constants";
import "./main.css";
import {calculateMargin} from "./utils/calculateMargin";
import {Rectangle} from "./components/Rectangle";
import {rendering} from "./render/rendering";
import {rectangles} from "./components/rectangles";
import {isCursorInRect} from "./utils/isCursorInRect";
import {getRelocate} from "./render/relocate";
import {setStartPosition} from "./utils/setStartPosition";

canvas.width = window.innerWidth - 2 * calculateMargin(canvas);
canvas.height = window.innerHeight - 2 * calculateMargin(canvas);

let selected: Rectangle | null = null;
setStartPosition(rectangles);

setInterval(() => {
    rendering(rectangles, selected, initX, initY, initMouseX, initMouseY);
}, 30);

window.addEventListener('mousemove', (e) => {
    Mouse.x = e.clientX;
    Mouse.y = e.clientY;
});

let initX: number, initY: number, initMouseX: number, initMouseY: number;
window.addEventListener('mousedown', (): void => {
    rectangles.forEach((rect: Rectangle): void => {
        if (isCursorInRect(rect)) {
            selected = rect;
            initY = rect.y;
            initX = rect.x;
            initMouseX = Mouse.x;
            initMouseY = Mouse.y;
            selected.changeColor(selectedColor);
        }
    })
});

window.addEventListener('mouseup', (): void => {
    rectangles.forEach((rect: Rectangle): void => {
        if (rect === selected) {
            if (!getRelocate()) {
                rect.x = initX;
                rect.y = initY;
            }
        }
    });
    selected.changeColor(baseColor);
    selected = null;
});