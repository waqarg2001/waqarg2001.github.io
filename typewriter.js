document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById('typewriter');
    const texts = ["Muhammad Waqar Gul.", "A Data Engineer.", "A Data Analyst.", "A Data Scientist."];
    let currentIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        currentText = texts[currentIndex].substring(0, charIndex);
        element.textContent = currentText;
        
        if (!isDeleting && charIndex < texts[currentIndex].length) {
            charIndex++;
            setTimeout(type, 150);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 100);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                currentIndex = (currentIndex + 1) % texts.length;
            }
            setTimeout(type, 500);
        }
    }

    type();
});
