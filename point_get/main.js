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


