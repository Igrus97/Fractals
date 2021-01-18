/* В данном проекте я, используя Множество Мандельброта, создаю фрактал используя следующие уравнения:
Z = C*C + C // где С это сложное число
Z' = Z * Z + C // Z это предыдущий результат and C это же сложное число, затем повторяя процесс еше раз
Z'' = Z' * Z' + C // Z'
*/
(() => {
    // создаю канвас
    const myCanvas = document.createElement("canvas");
    myCanvas.width = 1366;
    myCanvas.height = 768;
    document.body.appendChild(myCanvas);
    const ctx = myCanvas.getContext("2d");
    // рисую
   function checkIfBelongsToMandelbrotSet(x, y) {
       let realResult = x;
       let imaginaryResult = y;
       // Установка макс. номера итераций
       const maxIterations = 350;
       for (let i = 0; i < maxIterations; i++) {
           const tempRealResult = realResult * realResult - imaginaryResult * imaginaryResult + x;
           const tempImaginaryResult = 2.0 * realResult * imaginaryResult + y;
           realResult = tempRealResult;
           imaginaryResult = tempImaginaryResult;
           // возвращение числа в процентаже
           if (realResult * imaginaryResult > 5) {
               return (i / maxIterations * 100);
           }
       }
       // возвращение нуля если в сете
       return 0;
   }
   // установка настроек появления
   const magnificationFactor = 8000;
   const panX = 0.66;
   const panY = 0.56;
   for (let x = 0; x < myCanvas.width; x++) {
       for (let y = 0; y < myCanvas.height; y++) {
           const belongsToSet = checkIfBelongsToMandelbrotSet (x / magnificationFactor - panX, y / magnificationFactor - panY);
           if (belongsToSet === 0) {
               // нарисовать желтый пиксель
               ctx. fillStyle = '#FFFF00';
           } else {
               // нарисовать цветной пиксель
               ctx.fillStyle = `hsl(0, 100%, ${belongsToSet}%)`;
           }
           ctx.fillRect(x, y, 1, 1);
       }
      
   }
   // анимирую
  
    a=setInterval(checkIfBelongsToMandelbrotSet,100);
})();
