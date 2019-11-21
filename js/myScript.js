$(document).ready(function() {
    $('#homeA').hover(
        function() {
            $('#homeIcon').attr("src", "images/home2_h.png");
        },
        function() {
            $('#homeIcon').attr("src", "images/home2.png");
        }
    );
});
$(window).scroll(function(event) {
    var scrollPosition = window.scrollY;
    var height = window.innerHeight - 100;
    var opacity = 1 - (scrollPosition/height) * 1.4;

    $("#lead-overlay").css("opacity", opacity);
})
$(window).resize(function(event) {
    var width = window.innerWidth;
    var height = window.innerHeight;
})
