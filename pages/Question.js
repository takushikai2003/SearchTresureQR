import getDataAsString from "../common esm/getDataAsString.js";
import { correct_audio, mistake_audio } from "../common esm/Audios.js";

const insertHTML = await getDataAsString("./pages/Question.html");

const path_to_lesson_data = location.href + "/data";
console.log(path_to_lesson_data);
const deco_nums = ["①","②","③","④"];

const $get = function (querySelector){
    return document.querySelector(querySelector);
}

class Question{
    constructor(insertTarget, {img_src, choices, correct_num, explanation="", picture_text=""}){
        insertTarget.innerHTML = insertHTML;

        const _img_src = path_to_lesson_data + img_src;

        $get("#question_picture").src = _img_src;
        $get("#question_correctanswer_area").hidden = true;
        $get("#question_picture_text").innerHTML = picture_text;


        $get("#question_user_icon")
        .addEventListener("click",()=>{
            $get("#question_sidebar").hidden = false;
        });

        $get("#question_sidebar_close")
        .addEventListener("click",()=>{
            $get("#question_sidebar").hidden = true;
        });

       
        const gonext = $get("#question_gonext");

        gonext.innerHTML = "決定";
        gonext.disabled = true;

        let selected_opt_num;
        let correct_opt_text;

        for(let i=0; i<choices.length; i++){
            const option = document.createElement("button");
            option.setAttribute("class", "btn question_option");
            option.innerHTML = choices[i];
            
            if(correct_num == i + 1){
                correct_opt_text =  choices[i];
            }

            option.addEventListener("click",()=>{
                option.focus();//safariは強制でfocusを当ててあげる
                selected_opt_num = i + 1;
                gonext.disabled = false;
            });

            $get("#question_area").appendChild(option);
        }


        gonext.addEventListener("click",()=>{
            if(selected_opt_num == correct_num){
                correct_audio.play();
                $get("#question_correctanswer_picture").src = "./images/correct.png";
            }
            else{
                mistake_audio.play();
                $get("#question_correctanswer_picture").src = "./images/mistake.png";
            }


            $get("#question_area").hidden = true;
            $get("#question_selected_answer").innerHTML = "選択: " + deco_nums[selected_opt_num -1];
            $get("#question_correct_answer").innerHTML = "正解: " + deco_nums[correct_num -1];
            $get("#question_correctanswer_area").hidden = false;
            $get("#question_explanation").innerHTML = explanation;
            $get("#question_explanation_area").hidden = false;
            gonext.hidden = true;

            // gonext.addEventListener("click",()=>{
            //     console.log("to home");
            // },{once: true});

            // gonext.innerHTML = "homeへ";
        },{once: true});
    }
}


export default Question;