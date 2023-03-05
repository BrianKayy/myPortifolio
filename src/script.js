$(document).ready(function () {
    $(".fa-bars").click(function () { 
        $(".container").toggle();
        
    });
});


//  about js
                                                    
let scrollContainer =  document.querySelector('.gallery');
let back = document.getElementById('backBtn');
let next = document.getElementById('next');

scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

back.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= 900;
});


next.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= 900;
});

