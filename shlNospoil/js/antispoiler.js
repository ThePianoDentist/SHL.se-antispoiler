
$("#rmss-header-games").html("Spoiler blocked");
$(".rmss_c-play__single-info-description").html("spoiler blocked");

function checkAdSpotify(){

    var should_click = false;
    var mutedBtn = $(".volume-bar").find("button");
    var muted = mutedBtn && (mutedBtn.attr("class").indexOf("off") !== -1);
    var anchors = $(".now-playing-bar").find("a").slice(0, 2);
    anchors.each(function(){
        var target = $(this).attr("target");
        if (typeof target !== typeof undefined && target !== false && !muted){
            should_click = true;
        }
        else if ((typeof target === typeof undefined || target === true) && muted){
        should_click = true;
        }
    });

    if (should_click){
        console.log("Clicking mute Btn");
        mutedBtn.click();
    }
    setTimeout(function(){checkAdSpotify();}, 500);
}
