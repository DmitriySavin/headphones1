var carouselContent=document.getElementById("carousel-content"),numberButtons=document.querySelectorAll(".numbers span"),textSections=document.querySelectorAll(".text-section");numberButtons.forEach((function(t){t.addEventListener("click",(function(){numberButtons.forEach((function(t){return t.classList.remove("active")})),t.classList.add("active");var e=t.getAttribute("data-index");carouselContent.style.transform="translateX(-".concat(100*e,"%)"),textSections.forEach((function(t){return t.classList.remove("active")})),document.getElementById("text-".concat(e)).classList.add("active")}))}));var numbers=document.querySelectorAll(".numbers span"),textSection=document.querySelectorAll(".text-section"),videoContainers=document.querySelectorAll(".video-container");numbers.forEach((function(t,e){t.addEventListener("click",(function(){numbers.forEach((function(t){return t.classList.remove("active")})),textSections.forEach((function(t){return t.classList.remove("active")})),videoContainers.forEach((function(t){return t.classList.remove("active")})),t.classList.add("active"),textSections[e].classList.add("active"),videoContainers[e].classList.add("active")}))}));
//# sourceMappingURL=index.4515ca8e.js.map
