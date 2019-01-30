$(document).ready(function(){
    $("input").keyup(function(){
        var label = $(this).attr("placeholder");
        
        if(label==="First Name" || label==="Last Name")
        {
            var value = $(this).val();
            var id = $(this).next().attr("id");
            
            if(value===""){
                $(this).next().load("err.html #"+id+"1");
            }
            else if(value.length<6 || value.length>20)
            {
                $(this).next().load("err.html #"+id+"2");
            }
            else{
                $(this).next().html("");
            }
        }
        if(label==="Email"){
            var value = $(this).val();
            var id = $(this).next().attr("id");
            var exp = /[A-Za-z0-9._]{4,}/
            var exp2 = /@+/
            var exp3 = /[A-Za-z0-9]{3,10}/
            var exp4 = /.+/
            var exp5 = /[a-z]{2,6}/
            if(value==="")
            {
                $(this).next().load("err.html #"+id+"1");
            }
            else if(value !== exp)
            {
                $(this).next().load("err.html #"+id+"2");
            }
            else if(value !== exp2)
            {
                $(this).next().load("err.html #"+id+"3");
            }
            else if(value !== exp3)
            {
                $(this).next().load("err.html #"+id+"4");
            }
            else if(value !== exp4)
            {
                $(this).next().load("err.html #"+id+"5");
            }
            else if(value !== exp5)
            {
                $(this).next().load("err.html #"+id+"6");
            }
            else{
                $(this).next().html("");
            }
        }
    })
})