alert(88888888);

alert("アンパンマンじゃんけんスタート！");

/*
 * アンパンマンぽんのキャラクター
 * 0: アンパンマン（グー）
 * 1: カレーパンマン（チョキ）
 * 2: しょくぱんまん（パー）
 * として処理する
 */
function rsp(playerSelect) {
    let result;
    let playerSelectHand;
    let comSelectHand;
    let resultString;
    let random = Math.random();
    let comSelect = Math.floor(random * 3);
    console.log(comSelect);
    console.log(playerSelect);

    /*
     * 勝負は（プレイヤーが）
     * 0: まいった～
     * 1: やった～
     * 2: おあいこ
     */

    if (playerSelect == comSelect) {
        // 一緒だったらおあいこ
        result = 2;
    } else {
        // 違うので条件によって勝敗を振り分ける
        if (playerSelect == 0) {
            // プレイヤーはアンパンマン
            if (comSelect == 1) {
                // コンピューターはしょくぱんまん
                result = 1;
            } else {
                // コンピューターはカレーパンマン
                result = 0;
            }
        } else if (playerSelect == 1) {
            // プレイヤーはカレーパンマン
            if (comSelect == 0) {
                // コンピューターはアンパンマン
                result = 0;
            } else {
                // コンピューターはしょくぱんまん
                result = 1;
            }
        } else {
            // プレイヤーはしょくぱんまん
            if (comSelect == 0) {
                // コンピューターはアンパンマン
                result = 1;
            } else {
                // コンピューターはカレーパンマン
                result = 0;
            }
        }
    }
    console.log(result);

    if (playerSelect == 0) {
        playerSelectHand = "アンパンマン";
    } else if (playerSelect == 1) {
        playerSelectHand = "カレーパンマン";
    } else {
        playerSelectHand = "しょくぱんまん";
    }

    if (comSelect == 0) {
        comSelectHand = "アンパンマン";
    } else if (comSelect == 1) {
        comSelectHand = "カレーパンマン";
    } else {
        comSelectHand = "しょくぱんまん";
    }

    if (result == 0) {
        resultString = "まいった～（負け）";
    } else if (result == 1) {
        resultString = "やった～（勝ち）";
    } else {
        resultString = "おあいこだね～";
    }

    document.getElementById("player").innerHTML = "バタコさん（あなた）は "+ playerSelectHand;
    document.getElementById("computer").innerHTML =
        "ジャムおじさん（じゃんけんマスター）は " + comSelectHand;
    document.getElementById("resultMsg").innerHTML = "ぐるっと回ってどーん！ " + resultString;
}
$(".b").on("click", function () {

    alert("おみくじガラガラぽん！");
          // 追加したもの↓
          $(".c").css("color", "red");
      
      var random = Math.floor(Math.random() * 5);
        console.log(random, "ランダムな数字");
      
        if (random === 0) {
          console.log("大吉");
          $(".c").text("大吉");
          $(".c").css("color","orenge");
        } else if (random === 1) {
          console.log("大大吉");
          $(".c").text("大大吉");
          $(".c").css("color","green");
        } else if (random === 2) {
          console.log("大吉of大吉");
          $(".c").text("大吉of大吉");
          $(".c").css("color","blue");
        } else if (random === 3) {
          console.log("大＆吉");
          $(".c").text("大＆吉");
          $(".c").css("color","yellow");
        } else if (random === 4) {
          console.log("THE 大吉");
          $(".c").text("THE 大吉");
          $(".c").css("color","purple");
        }
    
    $(".c").fadeOut(1000);
    $(".c").fadeIn(1000);
    


      });