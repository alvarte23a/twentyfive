document.addEventListener("DOMContentLoaded", function () {
    adjustParagraphsSize();
    window.addEventListener("resize", adjustParagraphsSize);
});

function adjustParagraphsSize() {
    const paragraphs = document.querySelectorAll(".responsive-text"); // Hämta alla paragrafer med klassen

    paragraphs.forEach(paragraph => {
        if (window.innerWidth < 400) {
            paragraph.style.fontSize = "12px";
        } else if (window.innerWidth > 900) {
            paragraph.style.fontSize = "22px";
        } else {
            paragraph.style.fontSize = "18px";
        }
    });
}
