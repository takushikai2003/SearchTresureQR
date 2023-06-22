document.querySelector("#user_icon")
.addEventListener("click",()=>{
    document.querySelector("#sidebar").hidden = false;
});

document.querySelector("#sidebar_close")
.addEventListener("click",()=>{
    document.querySelector("#sidebar").hidden = true;
});