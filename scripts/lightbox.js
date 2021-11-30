$("#wok_a").click(function(){
    if ($(window).width()>800){
        $(".exit").removeClass("hidden");
        $("#wok-a-popup").removeClass("hidden");
        $("#wok-a-div").removeClass("hidden");
        $(".dim").show();
        $("body").css("overflow", "hidden");
    }
});

$("#wok_b").click(function(){
    if ($(window).width()>800){
        $(".exit").removeClass("hidden");
        $("#wok-b-popup").removeClass("hidden");
        $("#wok-b-div").removeClass("hidden");
        $(".dim").show();
        $("body").css("overflow", "hidden");
    }
});

$("#wok_c").click(function(){
    if ($(window).width()>800){
        $(".exit").removeClass("hidden");
        $("#wok-c-popup").removeClass("hidden");
        $("#wok-c-div").removeClass("hidden");
        $(".dim").show();
        $("body").css("overflow", "hidden");
    }
});

$("#cooking-diagram").click(function(){
    if ($(window).width()>800){
        $(".exit").removeClass("hidden");
        $("#cooking-popup").removeClass("hidden");
        $("#cooking-div").removeClass("hidden");
        $(".dim").show();
        $("body").css("overflow", "hidden");
    }
});

$(".exit").click(function(){
    $(".large").addClass("hidden");
    $(".vertical").addClass("hidden");
    $(".dim").hide();
    $(".exit").addClass("hidden");
    $("body").css("overflow", "scroll");
});
