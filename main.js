const body = document.body;
const width = 50;
const height = 50;
const matriz = [15,15];

const timer = (seconds) =>  {
    let time = seconds * 1000
    return new Promise(res => setTimeout(res, time))
}

function appendCube(row, column) {
    image = document.createElement('img');
    image.src = "Images/Cube.png";
    image.classList.add("cube");

    image.style.height = height + "px";
    image.style.width = width + "px";

    image.style.left = ((column * width) /2) + columnOffset + window.innerWidth /2 + "px";
    image.style.top = (row * (height/4)) + rowOffset + "px";

    rowOffset += (height/4);

    image.id = row +"_"+ column;

    body.append(image);
}

columnOffset = 0;
for (let row = 1; row <= matriz[0]; row++) {
    rowOffset = 0;
    for (let column = 1; column <= matriz[1]; column++) {
        appendCube(row, column);
    }
    columnOffset -= (width/2);
}

async function secondWave(row) {
    for (let column = 1; column <= matriz[1]; column++) {
        document.getElementById(row +"_"+ column).classList.add("hoverClass");
        await timer(1);
        document.getElementById(row +"_"+ column).classList.remove("hoverClass");
    }
    wave();
}

async function wave() {
    for (let row = 1; row <= matriz[0]; row++) {
        await timer(0.1);
        secondWave(row);
    }
}

wave();