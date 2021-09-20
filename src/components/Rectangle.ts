import { baseColor, ctx } from "../constants";

export class Rectangle {
    width: number;
    height: number;
    x: number;
    y: number
    color: string;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.x = 20;
        this.y = 20;
        this.color = baseColor;
    }

    stroke(borderWidth: number): void {
        ctx.lineWidth = borderWidth;
        ctx.strokeRect(this.x - borderWidth / 2, this.y - borderWidth / 2, this.width + borderWidth, this.height + borderWidth);
    }

    draw(color: string): void {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    changeColor(color: string): void {
        this.color = color;
    }
}