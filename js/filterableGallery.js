$(document).ready(function(){
    $(".filters button").click(function(){
        let btn = $(this).attr("id");
        // laptop
        if(btn == "all"){
            $(".item").hide(500).show(500);
        }
        else{
            $(".item").hide(500);
            $(".item").filter("."+btn).show(500);
        }
    })
})