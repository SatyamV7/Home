importScripts('http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js')
var images = ["img28.jpg", "img29.jpg", "img30.jpg", "img31.jpg"];
$(function () {
    var i = 0;
    $("#home").css("background-image", "url(images/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $("#home").fadeOut("slow", function () {
            $(this).css("background-image", "url(images/" + images[i] + ")");
            $(this).fadeIn("slow");
        });
    }, 5000);
});