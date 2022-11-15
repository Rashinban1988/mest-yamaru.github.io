let mainCoverEl = document.getElementById("main-cover")

$('#jaticker-1').jaticker({'autoStart': false});
setInterval(function(){
    $('#main-cover').fadeOut( 13000 );
    $('#jaticker-1').jatickerStart({'inputSpeed': 45,}
    );
});

// $('#jaticker-1').jaticker({
//     'inputSpeed': 45,
//     'onFinished': function beHide() {
//         $('#main-cover').fadeOut( 2000 );
//     }
// });

if (window.performance) {
    if (window.performance.navigation.type === 1) {
        mainCoverEl.style.display = "block";
    }
}