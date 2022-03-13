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

        this.context = createCanvasElement(height, width);
        this.numberOfRows = this.context.height / 10;
        this.numberOfColumns = this.context.width / 10;
    }

    /** Place the canvas after an element
     * 
     * @param {element} node 
     */
    placeBoard(node) {
        node.parentNode.insertBefore(this.context, node.nextSibling);
    }
}

export { GameWorld };
