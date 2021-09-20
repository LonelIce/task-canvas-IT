export const calculateMargin = (object: HTMLElement): number => {
    return parseInt(window.getComputedStyle(object).margin);
}