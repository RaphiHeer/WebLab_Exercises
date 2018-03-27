class Circle extends Shape
{
    radius: number;

    get area()
    {
        return this.radius * this.radius * Math.PI;
    }

    draw()
    {
        console.log("Circle at " + this.x + ", " + this.y + " with area " + this.area);
    }
}