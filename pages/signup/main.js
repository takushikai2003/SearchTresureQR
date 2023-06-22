const input_elements = document.getElementsByTagName("input");
const pw1 = document.getElementById("password");
const pw2 = document.getElementById("password2");

document.getElementById("register")
.addEventListener("click",()=>{
    let include_empty = false;
    for(let i=0; i<input_elements.length; i++){
        input_elements[i].style.border = "solid 1px black";
    
        if(input_elements[i].value == ""){
            input_elements[i].style.border = "solid 5px red";
            include_empty = true;
        }
    }

    if(include_empty){
        alert("空欄があります");
        return;
    }

    if(pw1.value != pw2.value){
        pw1.style.border = "solid 5px red";
        pw2.style.border = "solid 5px red";
        alert("パスワードが一致しません");
        return;
    }


    // firebase登録
});
