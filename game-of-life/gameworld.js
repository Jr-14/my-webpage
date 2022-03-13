import { Cell } from "./cell.mjs";

class GameWorld {

    /** Creates a new game world and places a gameboard within it
     * 
     */
    constructor(height, width) {
        let createCanvasElement = (w, h) => {
            let element = document.createElement("canvas");
            element.id = "board";
            element.width = w;
            element.height = h;
            element.style.border = "1px solid #000000";
            return element;
        };

        this.canvas = createCanvasElement(height, width);
        this.numberOfRows = this.canvas.height / 10;
        this.numberOfColumns = this.canvas.width / 10;
        this.gameObjects = [];

        this.createGrid();
        this.drawAllCells();
    }


    /** Get a Canvas 2D Context
     * 
     * @returns a Canvas2DContext
     */
    get2DContext() {
        return this.canvas.getContext("2d");
    }


    /** Create a Grid of Cells
     * 
     */
    createGrid() {
        for (let y = 0; y < this.numberOfRows; y++) {
            for (let x = 0; x < this.numberOfColumns; x++) {
                this.gameObjects.push(new Cell(this.get2DContext(), x, y));
            }
        }
    }


    /** Draw all Cells into the gameboard
     * 
     */
    drawAllCells() {
        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].draw();
        }
    }

    /** Place the canvas after an element
     * 
     * @param {element} node 
     */
    placeBoard(node) {
        node.parentNode.insertBefore(this.canvas, node.nextSibling);
    }
}

export { GameWorld };
