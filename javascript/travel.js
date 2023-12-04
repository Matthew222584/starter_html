document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".navigationbar");
    const grid = document.querySelector(".hamburger .grid-list");

    menu.addEventListener("click", function () {
        grid.classList.toggle("show-dropdown");
    });

    const travel1 = document.querySelectorAll('.slideshow-container11'); /*Chat GPT used here for all below functions*/

    travel1.forEach(pet => {
        const mediaElements = pet.querySelectorAll('img, video');
        const figElements = pet.querySelectorAll('figcaption');
        let currentMediaIndex = 0;

        function changeMedia() {
            mediaElements[currentMediaIndex].classList.remove('active');
            figElements[currentMediaIndex].classList.remove('active');
            currentMediaIndex = (currentMediaIndex + 1) % mediaElements.length;
            mediaElements[currentMediaIndex].classList.add('active');
            figElements[currentMediaIndex].classList.add('active');
        }

        mediaElements.forEach(media => {

                media.addEventListener('click', changeMedia);
            
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
    });

    const travel2 = document.querySelectorAll('.slideshow-container12');

    travel2.forEach(pet => {
        const mediaElements = pet.querySelectorAll('img, video');
        const figElements = pet.querySelectorAll('figcaption');
        let currentMediaIndex = 0;

        function changeMedia() {
            mediaElements[currentMediaIndex].classList.remove('active');
            figElements[currentMediaIndex].classList.remove('active');
            currentMediaIndex = (currentMediaIndex + 1) % mediaElements.length;
            mediaElements[currentMediaIndex].classList.add('active');
            figElements[currentMediaIndex].classList.add('active');
        }
        mediaElements.forEach(media => {

                media.addEventListener('click', changeMedia);
            
        });
    });

    const travel3 = document.querySelectorAll('.slideshow-container13');

    travel3.forEach(pet => {
        const mediaElements = pet.querySelectorAll('img, video');
        const figElements = pet.querySelectorAll('figcaption');
        let currentMediaIndex = 0;

        function changeMedia() {
            mediaElements[currentMediaIndex].classList.remove('active');
            figElements[currentMediaIndex].classList.remove('active');
            currentMediaIndex = (currentMediaIndex + 1) % mediaElements.length;
            mediaElements[currentMediaIndex].classList.add('active');
            figElements[currentMediaIndex].classList.add('active');
        }

        mediaElements.forEach(media => {

                media.addEventListener('click', changeMedia);
            
        });
    });

    const travel4 = document.querySelectorAll('.slideshow-container14');

    travel4.forEach(pet => {
        const mediaElements = pet.querySelectorAll('img, video');
        const figElements = pet.querySelectorAll('figcaption');
        let currentMediaIndex = 0;

        function changeMedia() {
            mediaElements[currentMediaIndex].classList.remove('active');
            figElements[currentMediaIndex].classList.remove('active');
            currentMediaIndex = (currentMediaIndex + 1) % mediaElements.length;
            mediaElements[currentMediaIndex].classList.add('active');
            figElements[currentMediaIndex].classList.add('active');
        }

        mediaElements.forEach(media => {

                media.addEventListener('click', changeMedia);
            
        });
    });

    const travel5 = document.querySelectorAll('.slideshow-container15');

    travel5.forEach(pet => {
        const mediaElements = pet.querySelectorAll('img, video');
        const figElements = pet.querySelectorAll('figcaption');
        let currentMediaIndex = 0;

        function changeMedia() {
            mediaElements[currentMediaIndex].classList.remove('active');
            figElements[currentMediaIndex].classList.remove('active');
            currentMediaIndex = (currentMediaIndex + 1) % mediaElements.length;
            mediaElements[currentMediaIndex].classList.add('active');
            figElements[currentMediaIndex].classList.add('active');
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

        const elementsToToggle = ["p", "a", "h1", "h2", "h3", "li", "figcaption"];

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

