import {canvas, ctx} from "../constants";
import {calculateMargin} from "../auxiliary/calculateMargin";

export const clearCanvas = (): void => {
    ctx.clearRect(0, 0, window.innerWidth - 2 * calculateMargin(canvas), window.innerHeight - 2 * calculateMargin(canvas));
}