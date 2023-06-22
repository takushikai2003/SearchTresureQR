function indicate_information(name, name_kana, email, phone, score, completed_spots){
    document.getElementById("information")
    .innerHTML = 
    `
    <b>名前</b>：${name}
    <br>
    <b>読みがな</b>：${name_kana}
    <br>
    <b>メール</b>：${email}
    <br>
    <b>電話</b>：${phone}
    <br>
    <b>スコア</b>：${score}
    <br>
    <b>発見したQR数</b>：${completed_spots.length}
    `
}



indicate_information("甲斐","カイ","t@c.com","000",0,[])