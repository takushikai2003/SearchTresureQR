import selectPage from "./selectPage.js";

const url = new URL(window.location.href);
const params = url.searchParams;
const page = params.get("page");// home, question, login
const question_id = params.get("qid") || 0;

if(page == null){
    selectPage("question", question_id);
}
else{
    selectPage(page, question_id);
}
