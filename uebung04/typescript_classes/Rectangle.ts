class Rectangle extends Shape
{
    length: number;
    width: number;

    get area()
    {
        return this.length * this.width;
    }

    draw()
    {
        console.log("Rectangle at " + this.x + ", " + this.y + " with area " + this.area);
    }
}