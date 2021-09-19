export const MarginCalculate = (object:HTMLElement):number => {
    return parseInt(window.getComputedStyle(object).margin);
}