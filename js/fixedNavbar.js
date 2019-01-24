window.onscroll = ()=>{
    let nav = document.querySelector("nav");
    let yaxis = window.pageYOffset;
    if(yaxis>100)
    {
        nav.style.backgroundColor = "#000";
        nav.style.transition = "1s";
    }
    else{
        nav.style.backgroundColor = "transparent";
        nav.style.transition = "1s";
    }
}