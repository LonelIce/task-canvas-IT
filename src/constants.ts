export const canvas = <HTMLCanvasElement>document.getElementById('canvas');
export const ctx = canvas.getContext('2d');
export const Mouse = {
    x: 0,
    y: 0
}
export const borderWidth: number = 5;
export const intervalGluing: number = 20;
export const baseColor: string = '#FFFFFF';
export const errorColor: string = '#FF0000';
export const selectedColor: string = '#FFFFCC';