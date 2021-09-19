import {baseColor, canvas, Mouse, selectedColor} from "./constants";
import "./main.css";
import {MarginCalculate} from "./Auxiliary/MarginCalculate";
import {Rectangle} from "./Сlasses/Rectangle";
import {Rendering} from "./Render/Render";
import {rectangles} from "./Rectangles";
import {isCursorInRect} from "./Auxiliary/isCursorInRect";
import {GetRelocate} from "./Render/Relocate";
import {SetStartPosition} from "./Auxiliary/SetStartPosition";

canvas.width = window.innerWidth - 2 * MarginCalculate(canvas);
canvas.height = window.innerHeight - 2 * MarginCalculate(canvas);

let selected: Rectangle | null = null;
SetStartPosition(rectangles);

setInterval(() => {
    Rendering(rectangles, selected);
}, 30);

window.addEventListener('mousemove', (e) => {
    Mouse.x = e.clientX;
    Mouse.y = e.clientY;
});

let initX: number, initY: number;
window.addEventListener('mousedown', (): void => {
    rectangles.forEach((rect: Rectangle): void => {
        if (isCursorInRect(rect)) {
            selected = rect;
            initY = rect.y;
            initX = rect.x;
            selected.changeColor(selectedColor);
        }
    })
});

window.addEventListener('mouseup', (): void => {
    rectangles.forEach((rect: Rectangle): void => {
        if (rect === selected) {
            if (!GetRelocate()) {
                rect.x = initX;
                rect.y = initY;
            }
        }
    });
    selected.changeColor(baseColor);
    selected = null;
});