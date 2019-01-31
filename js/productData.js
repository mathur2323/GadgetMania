$(document).ready(function(){
    $("#details").load("../pages/productData.html #description");
    $(".probtn").click(function(){
        var probtn = $(this).html().toLowerCase();
        $("#details").load("../pages/productData.html #"+probtn);
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        
    })
})