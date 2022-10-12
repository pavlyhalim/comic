var container = document.getElementById("container");
    var content = document.getElementById("content");
    var section1 = document.getElementById("section1");
    var section2 = document.getElementById("section2");
    var section3 = document.getElementById("section3");
    var section4 = document.getElementById("section4");
    var section5 = document.getElementById("section5");
    var section6 = document.getElementById("section6");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");
    var button5 = document.getElementById("button5");
    var button6 = document.getElementById("button6");
    var section1Height = section1.offsetHeight;
    var section2Height = section2.offsetHeight;
    var section3Height = section3.offsetHeight+section2.offsetHeight;
    var section4Height = section4.offsetHeight+section3.offsetHeight+section2.offsetHeight;
    var section5Height = section5.offsetHeight+section4.offsetHeight+section3.offsetHeight+section2.offsetHeight;
    var section6Height = section6.offsetHeight+section5.offsetHeight+section4.offsetHeight+section3.offsetHeight+section2.offsetHeight;
    var scrollAmount = 0;
    var scrollSpeed = 10;
    var scrollInterval = 10;
    var scrollIntervalup = 2;
    var scrollIntervalID;
    var scrollDirection = "down";
    var scrollTargetHeight = section2Height;



    function scrollDown() {
        scrollDirection = "down";
        scrollIntervalID = setInterval(scroll, scrollInterval);
    }

    function scroll() {
        if (scrollDirection == "down") {
            scrollAmount += scrollSpeed;
            if (scrollAmount >= scrollTargetHeight) {
                scrollAmount = scrollTargetHeight;
                clearInterval(scrollIntervalID);
            }
        }
        content.style.top = "-" + scrollAmount + "px";
    }
//make on click function to scroll up to first section if the current target is section 3
    function scrollUp() {
        scrollDirection = "up";
        scrollIntervalID = setInterval(scrollu, scrollIntervalup);
    }
    //change target to section 1 then scroll to it
    function scrollu() {
        if (scrollDirection == "up") {
            scrollAmount -= scrollSpeed;
            if (scrollAmount <= 0) {
                scrollAmount = 0;
                clearInterval(scrollIntervalID);
            }
        }
        content.style.top = "-" + scrollAmount + "px";
    }
    
    
    



 //make Fade-in Transition for the section  on Scroll
    function fadeIn() {
        var opacity = 0;
        var intervalID = setInterval(function() {
            opacity += 0.01;
            if (opacity >= 1) {
                clearInterval(intervalID);
            }
            section1.style.opacity = opacity;
        }, 10);
    }
    function fadeIn2() {
        var opacity = 0;
        var intervalID = setInterval(function() {
            opacity += 0.01;
            if (opacity >= 1) {
                clearInterval(intervalID);
            }
            section2.style.opacity = opacity;
        }, 10);
    }
    function fadeIn3() {
        var opacity = 0;
        var intervalID = setInterval(function() {
            opacity += 0.01;
            if (opacity >= 1) {
                clearInterval(intervalID);
            }
            section3.style.opacity = opacity;
        }, 10);
    }
    function fadeIn4() {
        var opacity = 0;
        var intervalID = setInterval(function() {
            opacity += 0.01;
            if (opacity >= 1) {
                clearInterval(intervalID);
            }
            section4.style.opacity = opacity;
        }, 10);
    }
    function fadeIn5() {
        var opacity = 0;
        var intervalID = setInterval(function() {
            opacity += 0.01;
            if (opacity >= 1) {
                clearInterval(intervalID);
            }
            section5.style.opacity = opacity;
        }, 10);
    }
    function fadeIn6() {
        var opacity = 0;
        var intervalID = setInterval(function() {
            opacity += 0.01;
            if (opacity >= 1) {
                clearInterval(intervalID);
            }
            section6.style.opacity = opacity;
        }, 10);
    }
    fadeIn();
        //on click scroll to each section
        button1.onclick = function() {
        scrollTargetHeight = section1Height;
        
        scrollDown();
        setTimeout(function(){fadeIn2()}, 1500);
    
       
    };
    button2.onclick = function() {
        scrollTargetHeight = section3Height;
        scrollDown();
        setTimeout(function() {
            fadeIn3()
        }, 1500);

    };
    button3.onclick = function() {
        scrollTargetHeight = section4Height;
        scrollDown();
        setTimeout(function() {
            fadeIn4();
        }, 1500);
    };
    button4.onclick = function() {
        scrollTargetHeight = section5Height;
        scrollDown();
        setTimeout(function() {
            fadeIn5();
        }, 1500);
        
    };
    button6.onclick = function() {
        scrollTargetHeight = section6Height;
        scrollDown();
        setTimeout(function() {
            fadeIn6();
        }, 1500);
        
 
    };
    button5.onclick = function() {
        scrollTargetHeight = section6Height;
        scrollDown();
        setTimeout(function() {
            fadeIn6();
        }, 1500);
        
 
    };

    // section6.onclick = function() {
    //     scrollTargetHeight = section1Height;
       
    //     setTimeout(function() {
    //     scrollUp();
    //     }, 5000);
        
    
    // };





  
