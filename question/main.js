// import getDataAsString from "../common esm/getDataAsString.js";
import { correct_audio, mistake_audio } from "./Audios.js";
import { setSidebar } from "./sidebar.js";
// const url = new URL(window.location.href);
// const params = url.searchParams;
// const question_id = params.get("qid") || 0;
// const spot_id = params.get("sid") || 0;

setSidebar(0,0,80);

const deco_nums = ["①","②","③","④"];

const img_src = "" //data[sid].img_src;
const question_sentence = "問題文" //data[sid].question_sentence;
const choices = ["選択肢１","選択肢２","選択肢３","選択肢４"] //data[sid].choices;
const correct_num = 1 //data[sid].correct_num;
const explanation = "説明文..." //data[sid].explanation;

document.querySelector("#picture").src = img_src;
document.querySelector("#correctanswer_area").style.display = "none";
document.querySelector("#picture_text").innerHTML = question_sentence;

const gonext = document.querySelector("#gonext");

gonext.innerHTML = "決定";
gonext.disabled = true;

let selected_opt_num;
// let correct_opt_text;

for(let i=0; i<choices.length; i++){
    const option = document.createElement("button");
    option.setAttribute("class", "option");
    option.innerHTML = deco_nums[i] + choices[i];
    
    // if(correct_num == i + 1){
    //     correct_opt_text =  choices[i];
    // }

    option.addEventListener("click",()=>{
        option.focus();//safariは強制でfocusを当ててあげる
        selected_opt_num = i + 1;
        gonext.disabled = false;
    });

    document.querySelector("#question_area").appendChild(option);
    const br = document.createElement("br");
    document.querySelector("#question_area").appendChild(br);

}


gonext.addEventListener("click",()=>{
    if(selected_opt_num == correct_num){
        correct_audio.play();
        document.querySelector("#correctanswer_picture").src = "../images/correct.png";
    }
    else{
        mistake_audio.play();
        document.querySelector("#correctanswer_picture").src = "../images/mistake.png";
    }


    document.querySelector("#question_area").hidden = true;
    document.querySelector("#selected_answer").innerHTML = "選択: " + deco_nums[selected_opt_num -1];
    document.querySelector("#correct_answer").innerHTML = "正解: " + deco_nums[correct_num -1];
    document.querySelector("#correctanswer_area").style.display = "grid";
    document.querySelector("#explanation").innerHTML = explanation;
    document.querySelector("#explanation_area").hidden = false;
    // gonext.hidden = true;

    gonext.addEventListener("click",()=>{
        location.href = "../home/index.html";
    },{once: true});

    gonext.innerHTML = "homeへ";
},{once: true});