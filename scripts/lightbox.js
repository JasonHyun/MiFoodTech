// when user clicks on #wok_a element:
//     remove .hidden class from .exit class
//     remove hidden class from .wok-a-popup
//     show .dim class;
//
// when user clicks on #wok_b element:
//     remove .hidden class from .exit class
//     remove hidden class from .wok-b-popup
//     show .dim class;
//
// when user clicks on #wok_c element:
//     remove .hidden class from .exit class
//     remove hidden class from .wok-c-popup
//     show .dim class;
//
// when user clicks on #cooking element:
//     remove .hidden class from .exit class
//     remove hidden class from .cooking-popup
//     show .dim class;
//
// when user clicks on .exit button:
//     add .hidden class to .lightbox;

$("#wok_a").click(function(){
    $(".exit").removeClass("hidden");
    $("#wok-a-popup").removeClass("hidden");
    $(".dim").show();
});

$("#wok_b").click(function(){
    $(".exit").removeClass("hidden");
    $("#wok-b-popup").removeClass("hidden");
    $(".dim").show();
});

$("#wok_c").click(function(){
    $(".exit").removeClass("hidden");
    $("#wok-c-popup").removeClass("hidden");
    $(".dim").show();
});

$("#cooking-diagram").click(function(){
    $(".exit").removeClass("hidden");
    $("#cooking-popup").removeClass("hidden");
    $(".dim").show();
});

$(".exit").click(function(){
    $(".large").addClass("hidden");
    $(".dim").hide();
    $(".exit").addClass("hidden");
});
