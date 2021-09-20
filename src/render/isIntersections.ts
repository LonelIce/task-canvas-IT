import { Rectangle } from "../components/Rectangle";
import { borderWidth, errorColor } from "../constants";
import { relocateToggle } from "./relocate";

export const isIntersections = (rect: Rectangle, select: Rectangle, intervals: Array<{ [key: string]: number } | undefined> = [], index: number): void => {
    const intersections: boolean = intervals[index].left + borderWidth < 0 && intervals[index].bot + borderWidth < 0 && intervals[index].top + borderWidth < 0 && intervals[index].right + borderWidth < 0;
    if (intersections) {
        rect.changeColor(errorColor);
        select.changeColor(errorColor);
        relocateToggle(false);
    }
};