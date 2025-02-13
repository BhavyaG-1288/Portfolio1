document.addEventListener("DOMContentLoaded",()=>{
    const modeToggle = document.getElementById("modeToggle");
    const body =document.body;


    modeToggle.addEventListener("click",()=>{
        body.classList.toggle("dark");
        modeToggle.textContent =body.classList.contains("dark")?"":"";
    });
});


