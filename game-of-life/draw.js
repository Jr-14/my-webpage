import { GameWorld } from "./gameworld.js";


main();


function main() {
    let title = document.getElementById("title");
    let gameWorld = new GameWorld(720, 480);
    gameWorld.placeBoard(title);
    let gameWorld2DContext = gameWorld.get2DContext();

    // Log events
    gameWorld2DContext.addEventListener("mousemove", (e) => {
        logCanvasCoordinates(e);
    });
}


/** Log the canvas coordinates into the console
 *
 */
function logCanvasCoordinates(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    let p = document.getElementById("board-coordinates");
    let log = "Coordinates (x: " + x + ", y: " + y + ")";
    // console.log(log);
    p.innerHTML = log;
}
