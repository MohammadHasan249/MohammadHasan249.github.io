var hamburger_menu = document.querySelector(".hamburger-menu");
var container = document.querySelector(".container");
var playButton = document.getElementById("playpause");
var playIcon = document.getElementById("btnIcon");

var i = 0, a = 0, isBackspacing = false, isParagraph = false;
var abort = true;

var texts = [
    "Who am I?|My name is Mohammad Hasan",
    "Where do I study?|I am a CS Specialist at University of Toronto",
    "What's your favorite hobby?|Football(also known as soccer by some plebs)",
    "Who are you?|Extinction...",
    "I have been programmed with only one goal...|Destruction"
];

var speedForward = 100, speedWait = 1000, speedBetweenLines = 1000, speedBackspace = 25;

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
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





