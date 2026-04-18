//HTML文書が完全に読み込まれた後に、以下のコードが実行されるようにするためのイベントリスナーを追加
document.addEventListener("DOMContentLoaded", function () {
    //HTML要素を取得するための変数を定義
    const display = document.getElementById("display");
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const equals = document.querySelector(".equals");
    const clear = document.querySelector(".clear");
//数字ボタンにクリックイベントリスナーを追加し、クリックされたときに、getAttributeにて指定された属性"data-number"の値をディスプレイに表示する
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function () {
            display.value += this.getAttribute("data-number");
        });
    }
//演算子ボタンにクリックイベントリスナーを追加し、クリックされたときに、getAttributeにて指定された属性"data-operator"の値をディスプレイに表示する
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", function () {
            display.value += " " + this.getAttribute("data-operator") + " ";
        });
    }
//イコールボタン(=)にクリックイベントリスナーを追加し、クリックされたときに、eval関数を使用してディスプレイの値を評価し、その結果をディスプレイに表示する
    equals.addEventListener("click", function () {
        display.value = eval(display.value);
    });
//クリアボタン（C)にクリックイベントリスナーを追加し、クリックされたときに、ディスプレイの値を空にする
    clear.addEventListener("click", function () {
        display.value = "";
    });
});
