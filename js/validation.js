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
            var exp = /^[A-Za-z0-9._]{4,}\@[A-Za-z0-9]{3,10}\.[a-z]{2,6}$/
            if(value==="")
            {
                $(this).next().load("err.html #"+id+"1");
            }
            else if(!exp.test(value))
            {
                $(this).next().load("err.html #"+id+"2");
            }
            else{
                $(this).next().html("");
            }
        }
        if(label==="Company"){
            var value = $(this).val();
            var id = $(this).next().attr("id");
            if(value==="")
            {
                $(this).next().load("err.html #"+id+"1");
            }
            else if(value!=10)
            {
                $(this).next().load("err.html #"+id+"2")
            }
            else if(isNaN(value))
            {
                $(this).next().load("err.html #"+id+"3")
            }
            else{
                $(this).next().html("")
            }
        }
    })
})