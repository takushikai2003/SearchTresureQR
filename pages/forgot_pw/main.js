const email = document.getElementById("email");

document.getElementById("mail_submit")
.addEventListener("click",()=>{
    email.style.border = "solid 1px black";
    
    if(email.value == ""){
        email.style.border = "solid 3px red";
        alert("空欄です");
        return;
    }

    // firebase リセットメール送信
});