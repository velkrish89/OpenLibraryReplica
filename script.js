const searchInput = document.getElementById("search-txt");
searchInput.onclick = () => {
    const searchOptions = document.getElementById("button-collapser");
    searchOptions.style.display="inline-block";
}


window.onclick = (e) => {
    if(e.target.id === "url") {
        document.querySelector(".search-field > img").style.visibility = "hidden";
    } else {
        document.querySelector(".search-field > img").style.visibility = "visible";
    }
}



const viewNext = document.getElementById("onboarding-next");
const viewPrev = document.getElementById("onboarding-prev");

viewNext.onclick = () => {
    scrollElement("right");
}

viewPrev.onclick = () => {
    scrollElement("left");
}

function scrollElement(direction) {
    let onboardContainer = document.getElementById("onboarding-content");
    const elementWidth = onboardContainer.offsetWidth;
    if(direction === "right"){
        onboardContainer.scrollBy(elementWidth, 0);
    } 

    if(direction === "left"){
        onboardContainer.scrollBy(-elementWidth, 0);
    } 
}




let onboardingData = [
    
    {
        linkHref : "https://help.archive.org/help/borrowing-from-the-lending-library/",
        imageSrc : "/media/texts1.svg",
        imageAlt : "Texts Icon",
        tileBody : "How do I borrow a book?"
    },
    {
        linkHref : "https://help.archive.org/help/borrowing-from-the-lending-library/",
        imageSrc : "/media/texts1.svg",
        imageAlt : "Texts Icon",
        tileBody : "How do I borrow a book?"
    },
    {
        linkHref : "https://help.archive.org/help/borrowing-from-the-lending-library/",
        imageSrc : "/media/texts1.svg",
        imageAlt : "Texts Icon",
        tileBody : "How do I borrow a book?"
    },
    {
        linkHref : "https://google.com/",
        imageSrc : "/media/texts1.svg",
        imageAlt : "Texts Icon",
        tileBody : "How do I borrow a book?"
    },
    {
        linkHref : "https://help.archive.org/help/borrowing-from-the-lending-library/",
        imageSrc : "/media/texts1.svg",
        imageAlt : "Texts Icon",
        tileBody : "How do I borrow a book?"
    },
    {
        linkHref : "https://help.archive.org/help/borrowing-from-the-lending-library/",
        imageSrc : "/media/texts1.svg",
        imageAlt : "Texts Icon",
        tileBody : "How do I borrow a book?"
    },
    
];
// const viewNext = document.getElementById("onboarding-next");
// const onboardElements = document.getElementsByClassName("onboarding-data");

// viewNext.onclick = () => {
//     const elementsSize = onboardElements.length;
//     console.log(elementsSize);
//     const visibleElements = document.getElementsByClassName("visible");
//     let index;
   
//     for(let i=0; i<elementsSize; i++){
//         if(onboardElements[i].href == visibleElements[3].href){
//             index = i;
//             break;
//         }
//     }
//     console.log("index - ",index);

//     if((elementsSize - (index+1)) >= 4){
//         setVisible(index+1, index+5);
//         viewPrev.style.visibility="visible";
//     } else {
//         setVisible(elementsSize-4, elementsSize)
//         viewNext.style.visibility="hidden";
//     }
// }

// function setVisible(start, end) {
//     for(let i = start; i < end; i++){
//         if(onboardElements[1].getAttribute("class").includes("hidden")){
//             onboardElements[i].classList.remove("hidden");
//         }

//         if(onboardElements[1].getAttribute("class").includes("visible")){
//             onboardElements[i].classList.remove("visible");
//         }
//         onboardElements[i].classList.add("visible");  
//     }
// }

// function setHidden(start, end) {
//     for(let i = start; i < end; i++){
//         if(onboardElements[1].getAttribute("class").includes("hidden")){
//             onboardElements[i].classList.remove("hidden");
//         }

//         if(onboardElements[1].getAttribute("class").includes("visible")){
//             onboardElements[i].classList.remove("visible");
//         }
//         onboardElements[i].classList.add("hidden");
//     }
// }


// function initOnboard(start, totalElements) {

//     const onboardElements = document.getElementsByClassName("onboarding-data");
//     console.log("Onboard elements ", onboardElements.length);

//     for( let i=0; i< 4; i++) {
//         const anchorElement = onboardElements[i];
//         const data = onboardingData[start];
//         anchorElement.setAttribute("href", data.linkHref);

//         const imgEl = anchorElement.querySelector(".onboarding-tile > .onboarding-tile-icon > img");
//         imgEl.setAttribute("src", data.imageSrc);
//         imgEl.setAttribute("alt", data.imageAlt);

//         const tileBody = anchorElement.querySelector(".onboarding-tile > .onboarding-tile-body");
//         tileBody.textContent = data.tileBody;
//         start++;

//         console.log("Data 1 - anchor ", anchorElement);
//         console.log("Data 1 - image ", imgEl);
//         console.log("Data 1 - tileBody ", tileBody);
        
//     }
//    }

// initOnboard(0, 4);

// const viewNext = document.getElementById("onboarding-next");
// viewNext.onclick = () => {
//     const onboardElements1 = document.getElementsByClassName("onboarding-data");
//     const founthElIndex = onboardingData.findIndex((obj) => obj.linkHref == onboardElements1[3].href);
//     const viewPrev= document.getElementById("onboarding-prev");
//     const dataSize = onboardingData.length;
//     if((dataSize - founthElIndex+1) >= 4) {
//         initOnboard(founthElIndex+1, founthElIndex+5);
//         viewPrev.style.visibility="visible";
//     } else {
//         initOnboard(dataSize-4, dataSize);
//         viewNext.style.visibility="hidden";
//     }
// }