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