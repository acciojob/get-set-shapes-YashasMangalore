class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side); // Square is a rectangle with equal sides, so pass side as both width and height
    }

    getPerimeter() {
        return 4 * this.width; // Perimeter of a square is 4 * side
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
