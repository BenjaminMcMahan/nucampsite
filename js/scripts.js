$(function() {
    // Carousel Controls
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

    // Reserve Button
    $("#reserveButton").click(function () {
        $("#reserveModal").modal('show');
    });
    // Login Button
    $("#loginButton").click(function () {
        $("#loginModal").modal('show');
    });
});