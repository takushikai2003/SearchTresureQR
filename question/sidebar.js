document.querySelector("#user_icon")
.addEventListener("click",()=>{
    document.querySelector("#sidebar").hidden = false;
});

document.querySelector("#sidebar_close")
.addEventListener("click",()=>{
    document.querySelector("#sidebar").hidden = true;
});

// スコア、見つけた数、残りの数
export function setSidebar(score, discovered, undiscovered){
    document.getElementById("sidebar_score")
    .innerHTML = `スコア<br>${score}`;
    document.getElementById("sidebar_discovered")
    .innerHTML = `発見した宝箱の数<br>${discovered}`;
    document.getElementById("sidebar_undiscovered")
    .innerHTML = `残りの宝箱の数<br>${undiscovered}`;
}