$(function(){

    const mainCoverEl = document.getElementById("main-cover");
    const headerEl = document.getElementById("head");

    $('#jaticker-1').jaticker({'autoStart': false, 'onFinished': function(){
        $('#main-cover').fadeOut( 2000 );
        $('#head').fadeIn("slow");
    }});
    setInterval(function(){
        $('#jaticker-1').jatickerStart({
            'inputSpeed': 100
        });
    });

    if (window.performance) {
        if (window.performance.navigation.type === 1) {
            mainCoverEl.style.display = "block";
            headerEl.style.display = "none";
            headerEl.style.backgroundColor = 'transparent';
        }
    }

    window.addEventListener("load", () => {
        // main-textをすべて取得
        const mainText = document.querySelectorAll((".main-text"));
        // scrollイベントをセット
        window.addEventListener("scroll", showMainText);
        // ロードのタイミングで一度発火
        showMainText();

        function showMainText() {
          // 発火位置
          const triggerBottom = (window.innerHeight / 20) * 4;

        mainText.forEach((mainText) => {
            // mainTextの頭部分のTopからの座標を取得
            const mainTextTop = mainText.getBoundingClientRect().top;

            // mainTextの頭部分が発火位置を超えたら
            if (mainTextTop < triggerBottom) {
                headerEl.style.backgroundColor = 'white';
            } else {
                headerEl.style.backgroundColor = 'transparent';
            }
        });
        }
    });

    /*============================
    |    ハンバーガーメニュー    |
    =============================*/

    // $(".btn-gnavi").on("click", function(){
    //     // ハンバーガーメニューの位置を設定
    //     var rightVal = 0;
    //     if($(this).hasClass("open")) {
    //         // 位置を移動させメニューを開いた状態にする
    //         rightVal = -300;
    //         // メニューを開いたら次回クリック時は閉じた状態になるよう設定
    //         $(this).removeClass("open");
    //     } else {
    //         // メニューを開いたら次回クリック時は閉じた状態になるよう設定
    //         $(this).addClass("open");
    //     }
    //     $("#global-navi").stop().animate({
    //         right: rightVal
    //     }, 200);
    // });

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