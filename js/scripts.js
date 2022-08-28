$(function() {
    $(".carousel").carousel({
        interval: 2000
    });
    $("#carouselButton").click(function() {
        if ($(this).children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $(this).children("i").removeClass("fa-pause").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $(this).children("i").removeClass("fa-play").addClass("fa-pause");
        }
    });
});