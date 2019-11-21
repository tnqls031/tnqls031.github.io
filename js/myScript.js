$(document).ready(function() {
    opacity();
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
    opacity();
})
$(window).resize(function(event) {
    var width = window.innerWidth;
    var height = window.innerHeight;
})
function opacity() {
    var scrollPosition = window.scrollY;
    var height = window.innerHeight - 100;
    var opacity = 1 - (scrollPosition/height) * 1.0;

    $("#lead-content").css("opacity", opacity);
    $("#lead-overlay").css("opacity", opacity);
    $("#lead-down").css("opacity", opacity-0.2);
}