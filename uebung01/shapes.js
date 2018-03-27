
/* Teil 2 - Shape (Objekt hierarchien) */
console.log("**** Shape Aufgabe (Objekt hierarchien) ****");
var shape = {
    x: 0.0,
    y: 0.0,
    draw: function()
    {
        console.log("Shape at " + this.x + ", " + this.y);
    }
};

var circle = Object.create(shape);
circle.radius = 2.0;
Object.defineProperty(circle, "area",
    {
        get: function() {
            return this.radius * this.radius * 3.1415
        }
    });
circle.draw = function(){
    console.log("Circle at " + this.x + ", " + this.y + " with area " + this.area);
};

var rectangle = Object.create(shape);
rectangle.length = 3;
rectangle.width = 2;
Object.defineProperty(rectangle, "area",
    {
        get: function() {
            return this.length * this.width;
        }
    });
rectangle.draw = function(){
    console.log("Rectangle at " + this.x + ", " + this.y + " with area " + this.area);
};

// Draw shape
shape.draw();

// Draw circle
circle.x = 2.0;
circle.draw();

// Draw rectangle
rectangle.x = 4;
rectangle.y = 6;
rectangle.draw();

// Output JSONs
console.log("JSON of shape" + JSON.stringify(shape));
console.log("JSON of circle" + JSON.stringify(circle));
console.log("JSON of rectangle" + JSON.stringify(rectangle));