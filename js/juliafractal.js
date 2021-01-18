(() => {
    // создаю канвас
    const myCanvas = document.createElement("canvas");
    myCanvas.width = 1366;
    myCanvas.height = 768;
    document.body.appendChild(myCanvas);
    const context = myCanvas.getContext('2d');
    var frame = 0; // to track current frame number
    var creal = -.8;
    var cimag = .156;
    const pallette=[]; //an array that stores the RGB combinations
    // рисую
    function julia(){
            for(y=0;y<200;y++)
                    {
                    for(x=0;x<200;x++)
                            {
                            let cx=-2+x/50;
                            let cy=-2+y/50;
                            let i = 0;    
                            do
                                    {
                                    xt=cx*cx-cy*cy+creal;
                                    cy=2*cx*cy+cimag;
                                    cx=xt;
                                    i++;
                                    }
                            while ((cx*cx+cy*cy<4)&&i<25);
                            context.beginPath();
                            context.rect(x*4, y*4, 4, 4);
                            context.fillStyle = pallette[i];
                            context.fill();
                            }
                    }
            frame++;
            creal=-.9+.20*Math.sin(frame/(3.14*25));
            cimag=.30+.15*Math.cos(frame/(3.14*45));
            
    }
     
    for(x=0;x<10;x++) // this loop populates the color pallette array
            {
            color=(31*x).toString(16); // convert the number to hex
            if(color.length==1) color='0'+color;  // add a zero in front if only one hex digit
            pallette[x]="#"+color+color+'bb'; // colors 0-8: the Red and Green components change, Blue=FF
            pallette[x+6]='#11dd'+color;      // colors 8-16: the Blue component changes, Red and Green=FF
            pallette[17+x]="#"+color+'333';  // colors 17-25: the Red component changes, Green and Blue=0
            }
     
    a=setInterval(julia,100);
     
})();
