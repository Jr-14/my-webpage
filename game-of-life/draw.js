main();


function main() {
    let canvas = document.getElementById("board");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);

    // Log events
    canvas.addEventListener("mousemove", (e) => {
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
