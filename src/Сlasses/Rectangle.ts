import {baseColor, borderHeight, ctx} from "../constants";

export class Rectangle {
    width: number;
    height: number;
    x: number;
    y: number
    color: string;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.x = 5;
        this.y = 5;
        this.color = baseColor;
    }
    stroke():void {
        ctx.lineWidth=borderHeight;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
    draw(color:string):void {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    changeColor(color:string):void{
        this.color=color;
    }
}