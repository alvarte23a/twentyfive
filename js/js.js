document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    adjustTextSize();
    window.addEventListener("resize", adjustTextSize);
});

function adjustTextSize() {
    const paragraphs = document.querySelectorAll(".responsive-text");
    const heading = document.querySelector(".rubrik"); 
    let paragraphSize, headingSize;

    if (window.innerWidth < 400) {
        paragraphSize = "12px";
        headingSize = "40px";
    } else if (window.innerWidth > 900) {
        paragraphSize = "22px";
        headingSize = "55px";  }  
        else if (window.innerWidth > 400 && window.innerWidth < 510) {
            paragraphSize = "15px"; 
            headingSize = "45px";
        }
     else {
        paragraphSize = "18px";
        headingSize = "50px";
    }

    paragraphs.forEach(paragraph => {
        paragraph.style.fontSize = paragraphSize;
    });

    if (heading) {
        heading.style.fontSize = headingSize;
    }
}
function updateHeadingSize() {
    const heading = document.querySelector(".rubriken");
    if (window.innerWidth > 700) {
        heading.style.fontSize = "40px";
    } else {
        heading.style.fontSize = "24px";
    }
}

document.addEventListener("DOMContentLoaded", updateHeadingSize);
window.addEventListener("resize", updateHeadingSize);
