var hamburger_menu = document.querySelector(".hamburger-menu");
var container = document.querySelector(".container");
var playButton = document.getElementById("playpause");
var playIcon = document.getElementById("btnIcon");
var header = document.getElementById("headerProject");

var i = 0, a = 0, isBackspacing = false, isParagraph = false;
var abort = true;

var texts = [
    "Hello there! First of all, welcome to my website!|My name is Mohammad Hasan",
    "I am a CS Specialist at University of Toronto|I am actively looking for a PEY/Co-Op internship!",
    "On the menu bar, you'll find a Projects page|This page consists a list of projects that I've worked on, and I'll be constantly updating that page :)",
    "And a Courses page|Here, you'll find a list of courses I've done, whether in uni or in my free time",
    "If you go to my About page, do click on my email icon|kind of cheesy but hey, that's life <3",
    "Oh, before I let you go|This runs in a loop, so I'd recommend clicking the button to pause it :)"
];

var speedForward = 100, speedWait = 800, speedBetweenLines = 900, speedBackspace = 15;

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})

header.addEventListener("click", () => {
    if (container.classList.contains("active")) {
      container.classList.remove("active");
    }
})

playButton.onclick = function() {
    abort = !abort;
        if (abort == false) {
            playIcon.classList.remove("fa-play");
            playIcon.classList.add("fa-pause");
            typeWriter("output", texts);
        }
        else {
            playIcon.classList.remove("fa-pause");
            playIcon.classList.add("fa-play");
        }
};


function typeWriter(id, arr) {

    var element = document.getElementById(id),
        aString = arr[a],
        eHeader = document.getElementById("ultron1"),
        eParagraph = document.getElementById("ultron2");

    if (!isBackspacing) {

        if (i < aString.length) {

            if (aString.charAt(i) == "|") {
                isParagraph = true;
                eHeader.classList.remove("cursor");
                eParagraph.classList.add("cursor");
                i++;
                setTimeout(function() {
                    if (abort == false) {
                     typeWriter(id, arr);
                    }
                }, speedBetweenLines);

            } else {
                if (!isParagraph) {
                    eHeader.innerHTML = eHeader.innerHTML + aString.charAt(i);
                }
                else {
                    eParagraph.innerHTML = eParagraph.innerHTML + aString.charAt(i);
                }
                i++;
                setTimeout(function() {
                    if (abort == false) {
                     typeWriter(id, arr);
                    }
                }, speedForward);
            }
        }
        else if (i == aString.length) {
            isBackspacing = true;
            setTimeout(function() {
                if (abort == false) {
                     typeWriter(id, arr);
                    }
            }, speedWait);
        }
    }

    else {
        if (eHeader.innerHTML.length > 0 || eParagraph.innerHTML.length > 0) {

            if (eParagraph.innerHTML.length > 0) {
                eParagraph.innerHTML = eParagraph.innerHTML.substr(0, eParagraph.innerHTML.length - 1);
            } else if (eHeader.innerHTML.length > 0) {
                  eParagraph.classList.remove("cursor");
                  eHeader.classList.add("cursor");

                eHeader.innerHTML = eHeader.innerHTML.substr(0, eHeader.innerHTML.length - 1);
            }
             setTimeout(function() {
                 if (abort == false) {
                     typeWriter(id, arr);
                    }
             }, speedBackspace);
        }

        else {
            isBackspacing = false;
            i = 0;
            isParagraph = false;
            a = (a + 1) % arr.length;
            setTimeout(function() {
                if (abort == false) {
                     typeWriter(id, arr);
                    }
            }, 50);
        }
    }
};
