import { setSidebar } from "./sidebar.js";

const sid = 0;
const bonus_question = true;

if(bonus_question){
    document.querySelector("#bonus_area").hidden = false;
}

document.querySelector("#bonus_do")
.addEventListener("click",()=>{
    location.href = "../question/index.html?sid=" + sid;
});

document.querySelector("#bonus_notdo")
.addEventListener("click",()=>{
    location.href = "../home/index.html";
});


function indicateScore(now_score, get_score){
    document.getElementById("myscore_area")
    .innerHTML = `自分の点数：${now_score}+${get_score}点`;
    document.getElementById("got_score")
    .innerHTML = `+${get_score}点`;
}

indicateScore(10,20);
setSidebar(0,0,70);