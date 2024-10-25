let x = 100;
let y = 100;
function setup() {
    createCanvas(1500, 700);
    background(100, 200, 200)
}//////////////////////////////////


function draw() {
    if (mouseIsPressed === true) {
        fill(0);
        circle(mouseX,mouseY,100)
    }
    else {
        fill(255);
        circle(mouseX,mouseY,100)
    }
    circle(x++,y,200)
    if(x > 900) x = 0;
    fill(255, 0, 0)

}/////////////////////////////////