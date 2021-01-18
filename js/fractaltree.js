(() => {
    // создаю канвас
    const myCanvas = document.createElement("canvas");
    myCanvas.width = 1366;
    myCanvas.height = 768;
    document.body.appendChild(myCanvas);
    const ctx = myCanvas.getContext("2d");
    // рисую
    function fractalTree(startX, startY, len, angle) {
        // весь код тут
        ctx.strokeStyle = "#013220";
        ctx.fillStyle = "#00ff00";
        ctx.lineWidth = 7; // регулятор толщины веток и дерева
        ctx.shadowBlur = 30; //тени
        ctx.shadowColor = "rgba(0,0,0,1)";
        ctx.beginPath();
        ctx.save();
        ctx.translate(startX, startY);
        ctx.rotate(angle * Math.PI/180);
        ctx.moveTo(0, 0);
        // bezier Curve method
        if(angle > 0) {
            ctx.bezierCurveTo(10, -len/2, 10, -len/2, 0, -len);
        } else {
            ctx.bezierCurveTo(-10, -len/2, -10, -len/2, 0, -len);
        }        ctx.stroke();

        if (len < 10) {
            ctx.beginPath();
            ctx.arc(0, -len, 10, 0, Math.PI/2);
            ctx.fill();
            ctx.restore();
            return;
        }
        
        fractalTree (0, -len, len * 0.8, angle + 16, -20);
        fractalTree (0, -len, len * 0.8, angle - 16, 20);

        ctx.restore();
    }

    fractalTree (650, 600, 120, 0);

})();
