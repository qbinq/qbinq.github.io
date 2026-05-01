
document.addEventListener("DOMContentLoaded",()=>{

    const slides = document.querySelectorAll(".slides");
    slides.forEach((slide)=>{
        const slider = document.createElement("div");
        slider.className = "slider";
        slide.parentNode.insertBefore(slider,slide);

        slider.appendChild(slide);

        const buttonLeft = document.createElement("button");
        const buttonRight = document.createElement("button");
        buttonLeft.classList.add("slider-left-button");
        buttonRight.classList.add("slider-right-button");
        buttonLeft.innerHTML = "\u276E";
        buttonRight.innerText = "\u276F";
        buttonLeft.addEventListener("click",()=>{slideLeft(slide);});
        buttonRight.addEventListener("click",()=>{slideRight(slide);});

        slider.append(buttonLeft,buttonRight);

        initialize(slide);
 
    })

    function initialize(slide){
        const images = slide.getElementsByTagName("img");
        images[0].classList.add("displaySlide");
    }

    function slideLeft(slide){
        const images = slide.getElementsByTagName("img");
        currentIndex = [...images].findIndex(el=>el.classList.contains("displaySlide"));
        images[currentIndex].classList.remove("displaySlide");
        if(currentIndex==0){
            currentIndex = [...images].length - 1;
        }else{
            currentIndex -=1;
        }
        images[currentIndex].classList.add("displaySlide");
    }

    function slideRight(slide){
        const images = slide.getElementsByTagName("img");
        currentIndex = [...images].findIndex(el=>el.classList.contains("displaySlide"));
        images[currentIndex].classList.remove("displaySlide");
        if(currentIndex==[...images].length-1){
            currentIndex = 0
        }else{
            currentIndex +=1;
        }
        images[currentIndex].classList.add("displaySlide");
    }

})