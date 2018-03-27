import "Circle.ts";
import "Rectangle.ts";

abstract class Shape
{
    x: number;
    y: number;

    draw()
    {
        console.log("Shape at " + this.x + ", " + this.y);
    }

    abstract get area();
}

