var canvas = document.getElementById('c1');//canvas(c1)のノードオブジェクト
var ctx = canvas.getContext('2d');//2Dコンテキストをctxに格納
var hittext=document.getElementById("hitdis");
var num_hit=0;
const dx=0;const dy=0;const dw=450;const dh=450;
const audio_scream = new Audio('static/himei_kyaaaaaaaa.wav');
const audio_hit = new Audio('static/hitsound.wav');
const Http = new XMLHttpRequest();
const url='https://http://satanist.pythonanywhere.com/niitowainagure';

window.onload = ()=>{
    const img_nw = new Image();    //新規画像オブジェクト
    img_nw.src = "static/badguy.png";   //読み込みたい画像のパス
    const img_b0 = new Image();
    img_b0.src="static/blood0.png";
    img_nw.onload = ()=>{
        ctx.drawImage(img_nw, dx, dy, dw, dh);
    };
};

c1.addEventListener("click", e => {
    // マウスの座標をCanvas内の座標とあわせるため
    const rect = c1.getBoundingClientRect();
    const point = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  
    /**
     * 矩形のクリック判定
     */
    const square = {
        x: dx, y: dy,  // 座標
        w: dw, h: dh   // サイズ
    };
    
    const hit =
            (square.x <= point.x && point.x <= square.x + square.w)  // 横方向の判定
        && (square.y <= point.y && point.y <= square.y + square.h)  // 縦方向の判定
    
    const img_nw = new Image();    //新規画像オブジェクト
    img_nw.src = "static/badguy.png";   //読み込みたい画像のパス
    const img_b0 = new Image();
    img_b0.src="static/blood0.png";
    const img_b1 = new Image();
    img_b1.src="static/blood1.png";

    if (hit) { 
        audio_hit.play();
        setTimeout(function() {audio_scream.play();}, 400);
        ctx.drawImage(img_b0, dx, dy, dw, dh);
        setTimeout(function() {
            ctx.drawImage(img_b1, dx, dy, dw, dh);}, 150);
        setTimeout(function() {
            ctx.drawImage(img_nw, dx, dy, dw, dh);
            setTimeout(function() {
                location.href="/hit", 10});        
        }, 1500);
    }
});  