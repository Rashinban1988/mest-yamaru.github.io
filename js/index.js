$(function(){

    let mainCoverEl = document.getElementById("main-cover")

    $('#jaticker-1').jaticker({'autoStart': false});
    setInterval(function(){
        $('#main-cover').fadeOut( 13000 );
        $('#jaticker-1').jatickerStart({'inputSpeed': 45,}
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
    // クリックでメニュー表示
    $('.hb-menu-area').click(function() {
        $('.hb-menu-area span').toggleClass('op-line');
        $('.sp-op-msk').toggleClass('op-msk');
        $('.sp-op-menu').toggleClass('op-menu');
    });

    // メニューまたは背景タップで戻る
    $('.hb-cls').click(function() {
        $('.hb-menu-area span').removeClass('op-line');
        $('.sp-op-msk').removeClass('op-msk');
        $('.sp-op-menu').removeClass('op-menu');
    });

});