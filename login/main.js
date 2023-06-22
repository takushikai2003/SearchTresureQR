const email = document.getElementById("email");
const pw = document.getElementById("password");

document.getElementById("login")
.addEventListener("click",()=>{
    email.style.border = "solid 1px black";
    pw.style.border = "solid 1px black";

    let include_empty = false;

    if(email.value == ""){
        include_empty = true;
        email.style.border = "solid 3px red";
    }
    if(pw.value == ""){
        include_empty = true;
        pw.style.border = "solid 3px red";
    }

    if(include_empty){
        alert("空欄があります");
        return;
    }

    // firebase ログイン
});
