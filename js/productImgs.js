$(document).ready(function(){
    $(".tiles img").click(function(){
       var src = $(this).attr("src");
       $("#mainDisplay").attr("src",src);
    });
});