(() => {
    // создаю канвас
    const myCanvas = document.createElement("canvas");
    myCanvas.width = 1366;
    myCanvas.height = 768;
    document.body.appendChild(myCanvas);
    const ctx = myCanvas.getContext("2d");
    // рисую
    function drawLine(p0, p1, color="black") {
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.stroke();
    }
   /* for(var i=0; i<100; i++){ 
        let y = 400 - (400 / (i/2));
        drawLine({x:0, y}, {x: 400, y});
    }
*/
    function drawTriangle(p0, p1, p2) {
        drawLine(p0, p1)
        drawLine(p1, p2)
        drawLine(p2, p0)
    }
    /*for(let i=0; i<1000; i++){ 
        let y = i * 10;
        drawTriangle({x: 10, y}, {x: 150, y:10}, {x: 300, y}) 
    }*/
    function drawFract(p0, p1, p2, limit){
        if(limit > -1){
            const pA = {
               x: p0.x + (p1.x - p0.x)/2.2,
               y: p0.y - (p0.y - p1.y)/2.2
            };
            const pB = {
               x: p1.x + (p2.x - p1.x)/2.2,
               y: p1.y - (p1.y - p2.y)/2.2
            };
            const pC = {
               x: p0.x + (p2.x - p0.x)/2.2,
               y: p0.y
            };
            drawFract(p0, pA, pC, limit-1);
            drawFract(pA, p1, pB, limit-1);
            drawFract(pC, pB, p2, limit-1);
        } 
        else {
            drawTriangle(p0,p1,p2);    
        }
    }
    drawFract({x: 0, y:400},{x:200, y:0},  {x:400, y:400}, 6)
})();
