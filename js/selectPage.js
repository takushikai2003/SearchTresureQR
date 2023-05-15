import Question from "../pages/Question.js";
import getDataAsString from "../common esm/getDataAsString.js";

async function selectPage(page, qustion_id){
    const data_path = "../data/question" + qustion_id + ".json";

    // history
    // const url = new URL(window.location.href);
    // const params = url.searchParams;
    // const page = params.get("page");
    // if(page != "lesson"){
    //     history.pushState(null, null, "./index.html?page=lesson");   
    // }

    const data = JSON.parse(await getDataAsString(data_path));
    
    switch(page){
        case "question":
            new Question(document.body, data);
            break;

        default:
            console.error(data[i].type, "undefined");
            break;
    }


    return;

}


export default selectPage;