/*---------- 01.モザイク_メインカラー ----------*/
var bokashiColor = "black";
$(function () {
    var array = [150]; //文字数の設定(配列にしているので異なる文字数の乱数にすることも可能)
    var randTxt = array[Math.floor(Math.random() * array.length)];
    for (var i = 0; i < randTxt; i++) { //出力したい文字数
    for (var r = 0; r < 1; r++) {
        var min = 1;
        var max = 5; //文字画像のパターン数
        var random = Math.floor(Math.random() * (max + 1 - min)) + min;
        $('.mosaic').append("<img src='./images/mosaic/" + bokashiColor + "/" + random + ".png'>"); //画像パスはPC,SPで変更する
    }
    }
    $('.mosaic').append("<img src='./images/mosaic/" + bokashiColor + "/0.png'><br>"); //画像パスはPC,SPで変更する
});


/*---------- 02.モザイク_white ----------*/
var bokashiColorWhite = "white";
$(function () {
    var array = [150]; //文字数の設定(配列にしているので異なる文字数の乱数にすることも可能)
    var randTxt = array[Math.floor(Math.random() * array.length)];
    for (var i = 0; i < randTxt; i++) { //出力したい文字数
    for (var r = 0; r < 1; r++) {
        var min = 1;
        var max = 5; //文字画像のパターン数
        var random = Math.floor(Math.random() * (max + 1 - min)) + min;
        $('.mosaic_white').append("<img src='./images/mosaic/" + bokashiColorWhite + "/" + random + ".png'>"); //画像パスはPC,SPで変更する
    }
    }
    $('.mosaic_white').append("<img src='./images/mosaic/" + bokashiColorWhite + "/0.png'><br>"); //画像パスはPC,SPで変更する
});