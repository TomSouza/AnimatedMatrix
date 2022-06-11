const body = document.body;
const w = 50;
const h = 50;
const matriz = [25,25];

columnOffset = 0;
for (let row = 1; row <= matriz[0]; row++) {
    rowOffset = 0;
    for (let column = 1; column <= matriz[1]; column++) {
        
        image = document.createElement('img');
        image.src = "Images/Cube.png";
        image.classList.add("cube");

        image.style.height = h + "px";
        image.style.width = w + "px";

        image.style.left = ((column * w) /2) + columnOffset + window.innerWidth /2 + "px";
        image.style.top = (row * (h/4)) + rowOffset + "px";

        rowOffset += (h/4);
        
        image.id = row +"_"+ column;
        
        body.append(image);
    }
    columnOffset -= (w/2);
}