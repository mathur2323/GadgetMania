window.onscroll = ()=>{
    let nav = document.querySelector("nav");
    
    let yaxis = window.pageYOffset;
    
    if(yaxis>0)
    {
        nav.style.position = "fixed";
    }
    else{
        nav.style.position = "static";
    }
}