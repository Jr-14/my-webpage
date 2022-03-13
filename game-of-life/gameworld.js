class GameWorld {

    /** Creates a new game world and places a gameboard within it
     * 
     */
    constructor() {
        let createCanvasElement = () => {
            let element = document.createElement("canvas");
            element.id = "board";
            return element;
        };

        this.context = createCanvasElement();
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
