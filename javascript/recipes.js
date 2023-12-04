document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".navigationbar");
    const grid = document.querySelector(".hamburger .grid-list");

    menu.addEventListener("click", function () {
        grid.classList.toggle("show-dropdown");
    });

    const travel1 = document.querySelectorAll('.slideshow-container6'); /*Chat GPT used here for all below functions*/

    travel1.forEach(pet => {
        const mediaElements = pet.querySelectorAll('img, video');
        let currentMediaIndex = 0;

        function changeMedia() {
            mediaElements[currentMediaIndex].classList.remove('active');
            currentMediaIndex = (currentMediaIndex + 1) % mediaElements.length;
            mediaElements[currentMediaIndex].classList.add('active');
        }

        mediaElements.forEach(media => {

                media.addEventListener('click', changeMedia);
            
        });
    });

    const travel2 = document.querySelectorAll('.slideshow-container7');

    travel2.forEach(pet => {
        const mediaElements = pet.querySelectorAll('img, video');
        let currentMediaIndex = 0;

        function changeMedia() {
            mediaElements[currentMediaIndex].classList.remove('active');
            currentMediaIndex = (currentMediaIndex + 1) % mediaElements.length;
            mediaElements[currentMediaIndex].classList.add('active');
        }

        mediaElements.forEach(media => {

                media.addEventListener('click', changeMedia);
            
        });
    });

    const travel3 = document.querySelectorAll('.slideshow-container8');

    travel3.forEach(pet => {
        const mediaElements = pet.querySelectorAll('img, video');
        let currentMediaIndex = 0;

        function changeMedia() {
            mediaElements[currentMediaIndex].classList.remove('active');
            currentMediaIndex = (currentMediaIndex + 1) % mediaElements.length;
            mediaElements[currentMediaIndex].classList.add('active');
        }

        mediaElements.forEach(media => {

                media.addEventListener('click', changeMedia);
            
        });
    });

    const travel4 = document.querySelectorAll('.slideshow-container9');

    travel4.forEach(pet => {
        const mediaElements = pet.querySelectorAll('img, video');
        let currentMediaIndex = 0;

        function changeMedia() {
            mediaElements[currentMediaIndex].classList.remove('active');
            currentMediaIndex = (currentMediaIndex + 1) % mediaElements.length;
            mediaElements[currentMediaIndex].classList.add('active');
        }

        mediaElements.forEach(media => {

                media.addEventListener('click', changeMedia);
            
        });
    });

    const travel5 = document.querySelectorAll('.slideshow-container10');

    travel5.forEach(pet => {
        const mediaElements = pet.querySelectorAll('img, video');
        let currentMediaIndex = 0;

        function changeMedia() {
            mediaElements[currentMediaIndex].classList.remove('active');
            currentMediaIndex = (currentMediaIndex + 1) % mediaElements.length;
            mediaElements[currentMediaIndex].classList.add('active');
        }

        mediaElements.forEach(media => {

                media.addEventListener('click', changeMedia);
            
        });
    });

    
});

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const darkModeToggleElement = document.getElementById("darkModeToggle");

    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);

    function setDarkMode(isDarkMode) {
        body.classList.toggle("dark-mode", isDarkMode);

        const elementsToToggle = ["p", "a", "h1", "h2", "h3", "li"];

        elementsToToggle.forEach(elementType => {
            const elements = document.querySelectorAll(elementType);
            elements.forEach(element => {
                element.classList.toggle("dark-mode", isDarkMode);
            });
        });
    }

    function toggleDarkMode() {
        const isDarkMode = body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
        setDarkMode(isDarkMode);
    }

    if (darkModeToggleElement) {
        darkModeToggleElement.addEventListener("click", toggleDarkMode);
    }
});

function copyFunction () {
    alert('Text copied successfully!');
}