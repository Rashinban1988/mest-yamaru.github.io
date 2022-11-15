$(function(){

    // // Topページのみ遅れてヘッダー出現
    // if($('body').hasClass('home blog')) {
    //     // Topページだったらヘッダーアニメーション
    //     topTextAnimation('.hrn-animation',1000,3800);
    // } else { // 違ったらそのまま表示
    //     $('.hrn-animation').css('opacity',1);
    // }

    let mainCoverEl = document.getElementById("main-cover")

    $('#jaticker-1').jaticker({'autoStart': false});
    setInterval(function(){
        $('#main-cover').fadeOut( 10000 );
        $('#jaticker-1').jatickerStart({'inputSpeed': 100,}
        );
    });

    if (window.performance) {
        if (window.performance.navigation.type === 1) {
            mainCoverEl.style.display = "block";
        }
    }

    /*============================
    |    ハンバーガーメニュー    |
    =============================*/

    $(".btn-gnavi").on("click", function(){
        // ハンバーガーメニューの位置を設定
        var rightVal = 0;
        if($(this).hasClass("open")) {
            // 位置を移動させメニューを開いた状態にする
            rightVal = -300;
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).removeClass("open");
        } else {
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).addClass("open");
        }
        $("#global-navi").stop().animate({
            right: rightVal
        }, 200);
    });

    // // クリックでメニュー表示
    // $('.hb-menu-area').click(function() {
    //     $('.hb-menu-area span').toggleClass('op-line');
    //     $('.sp-op-msk').toggleClass('op-msk');
    //     $('.sp-op-menu').toggleClass('op-menu');
    // });

    // // メニューまたは背景タップで戻る
    // $('.hb-cls').click(function() {
    //     $('.hb-menu-area span').removeClass('op-line');
    //     $('.sp-op-msk').removeClass('op-msk');
    //     $('.sp-op-menu').removeClass('op-menu');
    // });

});