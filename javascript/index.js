document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".navigationbar");
    const grid = document.querySelector(".hamburger .grid-list");

    menu.addEventListener("click", function () {
        grid.classList.toggle("show-dropdown");
    });

    const pets1 = document.querySelectorAll('.slideshow-container1'); /*Chat GPT used here for all below functions*/

    pets1.forEach(pet => {
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

    const pets2 = document.querySelectorAll('.slideshow-container2');

    pets2.forEach(pet => {
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

    const pets3 = document.querySelectorAll('.slideshow-container3');

    pets3.forEach(pet => {
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

    const pets4 = document.querySelectorAll('.slideshow-container4');

    pets4.forEach(pet => {
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

    const pets5 = document.querySelectorAll('.slideshow-container5');

    pets5.forEach(pet => {
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


document.addEventListener('DOMContentLoaded', function () {
  const petFacts = [
    "94% of pet owners say their animal pal makes them smile more than once a day.",
    "The American Veterinary Dental Society states that 80% of dogs and 70% of cats show signs of oral disease by age 3.",
    "Dalmatians are born without spots! They are born with plain white coats with their first spots appearing after they are 1 week old.",
    "Dogs sweat through their foot pads to help keep them cool. They also keep cool by panting.",
    "Greyhounds are the world’s fastest dogs with the ability to reach up to 45 mph.",
    "Every dog has a unique nose print with no two alike.",
    "The Basenji, an African wolf dog, does not bark in a normal way but may yodel or scream when excited!",
    "Snoopy, from Charles M. Schultz’s 'Peanuts' comic strip, is a beagle.",
    "A dog’s sense of smell is 1000 times greater than a human!",
    "Nine percent of dog owners will have a birthday party for their pet.",
    "Dogs have 28 baby teeth and 42 permanent teeth.",
    "Cats have 32 muscles in each ear.",
    "Cats have 4 rows of whiskers.",
    "Cats have no collarbone, which is one reason they are so flexible.",
    "Cats spend approximately 30% of their waking hours grooming themselves.",
    "American Shorthair” is the designation reserved for pedigreed cats, while similar-looking cats of mixed or unknown origin are called “domestic shorthairs.",
    "Feline’s jaws cannot move sideways.",
    "Cats have over one hundred vocal sounds, while dogs have about ten!",
    "Cat whiskers are so sensitive they can detect the slightest change in air current.",
    "Cats have 26 baby teeth and 30 permanent teeth."
  ];

  const petFactElement = document.getElementById('petFact');
  const randomIndex = Math.floor(Math.random() * petFacts.length);
  petFactElement.textContent = petFacts[randomIndex];
});