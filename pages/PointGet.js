import getDataAsString from "../common esm/getDataAsString.js";
import selectPage from "../js/selectPage.js";

const insertHTML = await getDataAsString("./pages/PointGet.html");

const $get = function (querySelector){
    return document.querySelector(querySelector);
}

class PointGet{
    constructor(insertTarget, {bonus_question, qid}){
        insertTarget.innerHTML = insertHTML;

        if(bonus_question){
            $get("#pointget_bonus_area").hidden = false;
        }

        $get("#pointget_bonus_do")
        .addEventListener("click",()=>{
            selectPage("question", qid);
        });

        $get("#pointget_bonus_notdo")
        .addEventListener("click",()=>{
            console.log("go home");
        });
    }
}


export default PointGet;