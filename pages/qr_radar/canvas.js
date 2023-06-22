const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const wh = document.getElementById("container").clientWidth;
canvas.width = wh;
canvas.height = wh;

const img = await loadImage("../../images/loupe.png");

export function setScoreToCanvas(score){
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const x = wh * 0.39;//x,yはルーペ円の中心点
    const y = wh * 0.38;

    // ctx.fillStyle = "red";
    ctx.font = wh * 0.35 + "px" + " Arial";
    const mesure = ctx.measureText(score)
    const text_w = mesure.width;
    const text_h =  mesure.actualBoundingBoxAscent + mesure.actualBoundingBoxDescent;
    ctx.fillText(score, x - (text_w/2), y + (text_h/2));
}


function loadImage(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = src;
    });
}