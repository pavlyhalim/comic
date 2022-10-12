//scroll animation for the sections of the body of the webpage with scroll animation and a story telling
//change the background color of the sections with scroll animation

var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4");
var section5 = document.getElementById("section5");
var section6 = document.getElementById("section6");

// //change the background color of the sections with scroll animation 
// window.addEventListener("scroll", function() {
//     var value = window.scrollY;
//     section1.style.clipPath = "circle(" + value + "px at center)"; 
//     section1.style.backgroundColor = "rgb(200, 40, " + value + ")";
//     section2.style.clipPath = "circle(" + value + "px at center)";
//     //change gradient color of the background
//     var secTwoVal = value - window.innerHeight
//     section2.style.backgroundColor = "rgb(255, 100, " + secTwoVal + ")";
//     // section3.style.clipPath = "circle(" + value + "px at center)";
//     var secThreeVal = value - window.innerHeight*2
//     section3.style.backgroundColor = "rgb(50, 180, " + secThreeVal + ")";
//     // section4.style.clipPath = "circle(" + value + "px at center)";

//     var secFourVal = value - window.innerHeight*3
//     section4.style.backgroundColor = "rgb(200, 0, " + secFourVal + ")";

    //move the images with scroll animation
    section1.style.backgroundPosition = "center " + value * 0.5 + "px";
    section2.style.backgroundPosition = "center " + value * 0.5 + "px";
    section3.style.backgroundPosition = "center " + value * 0.5 + "px";
    section4.style.backgroundPosition = "center " + value * 0.5 + "px";
    
});

//window scroll 

window.scroll({
    top: 100,
    left: 0,
    behavior: 'smooth'
});

section1.onclick = function() {
    scrollTargetHeight = text2Height;
    text1FadeIn();
    setTimeout(function() {
        scrollDown();
    }, 1000);


}
section2.onclick = function() {
    scrollTargetHeight = text3Height;
    setTimeout(function() {
        scrollDown();
    }, 1000);




}
section3.onclick = function() {
    scrollTargetHeight = text1Height;
    setTimeout(function() {
    scrollUp();
    }, 1000);
 
}

section4.onclick = function() {
    scrollTargetHeight = text2Height;
    setTimeout(function() {
    scrollUp();
    }, 1000);

}

section5.onclick = function() {
    scrollTargetHeight = text2Height;
    setTimeout(function() {
    scrollUp();
    }, 1000);

}

section6.onclick = function() {
    scrollTargetHeight = text2Height;
    setTimeout(function() {
    scrollUp();
    }, 1000);

}


//move image with scroll animation and  parallax effect 
// var img = document.getElementById("img");
// window.addEventListener("scroll", function() {
//     var value = window.scrollY;
//     img.style.top = value * 0.5 + "px";
// });

//change the background color of the sections with scroll animation
// const [red, green, blue] = [69, 111, 225]
// window.addEventListener('scroll', () => {
//     const y = 1 + (window.scrollY || window.pageYOffset) / 150
//     const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// })


