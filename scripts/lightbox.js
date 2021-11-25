// when window > 800px:
// $(window).resize(function(){
//     if ($(window).width()> 800){
        $("#wok_a").click(function(){
            $(".exit").removeClass("hidden");
            $("#wok-a-popup").removeClass("hidden");
            $(".dim").show();
            $("body").css("overflow", "hidden");
        });

        $("#wok_b").click(function(){
            $(".exit").removeClass("hidden");
            $("#wok-b-popup").removeClass("hidden");
            $(".dim").show();
            $("body").css("overflow", "hidden");
        });

        $("#wok_c").click(function(){
            $(".exit").removeClass("hidden");
            $("#wok-c-popup").removeClass("hidden");
            $(".dim").show();
            $("body").css("overflow", "hidden");
        });

        $("#cooking-diagram").click(function(){
            $(".exit").removeClass("hidden");
            $("#cooking-popup").removeClass("hidden");
            $(".dim").show();
            $("body").css("overflow", "hidden");
        });

        $(".exit").click(function(){
            $(".large").addClass("hidden");
            $(".dim").hide();
            $(".exit").addClass("hidden");
            $("body").css("overflow", "scroll");
        });
//     } else{
//         return;
//     }
// });
