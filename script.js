const menuEl=document.querySelector(".menu");
const navEl=document.querySelectorAll("nav a");
const head=document.querySelector("header");
menuEl.addEventListener("click",()=>{
[...navEl].forEach(nava=>{nava.classList.toggle("showmenu")});
head.classList.toggle("show");
});



const containerEl=document.querySelector(".projects .container");
const photo=["recipefinder","portfolio"];
const detail=["recipetoggle","portfoliotoggle"];
const btnsEl=document.querySelectorAll(".btn");
let index=0;
const displaycontent=document.querySelectorAll(".project-layer");
const displayarray=[...displaycontent];
btnsEl.forEach((button)=>{
    button.addEventListener('click',()=>{
       if( button.classList.contains('btn-left')){
        index--;
        if(index<0){
            index=photo.length-1;
        }
        for(let i=0;i<displayarray.length;i++){
            displayarray[i].style.cssText="display:none";
        }


containerEl.style.background=`url("./images/${photo[index]}.jpg") center/cover local no-repeat`;
displayarray[index].style.cssText="display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center";

       }
       else{
        index++;
        if(index===photo.length){
            index=0;}
            for(let i=0;i<displayarray.length;i++){
                displayarray[i].style.cssText="display:none";
            }
           
            containerEl.style.background=`url("./images/${photo[index]}.jpg") center/cover local no-repeat`;
            
            displayarray[index].style.cssText="display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center";

       }
       
    })
})
