import {canvas, ctx} from "../constants";
import {MarginCalculate} from "../Auxiliary/MarginCalculate";

export const ClearCanvas = (): void => {
    ctx.clearRect(0, 0, window.innerWidth - 2 * MarginCalculate(canvas), window.innerHeight - 2 * MarginCalculate(canvas));
}