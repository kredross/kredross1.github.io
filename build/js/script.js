$(document).ready(function() {
//     if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
// window.onmousewheel = document.onmousewheel = wheel;

// function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) delta = event.wheelDelta / 1000;
//     else if (event.detail) delta = -event.detail / 3;

//     handle(delta);
//     if (event.preventDefault) event.preventDefault();
//     event.returnValue = false;
// }

// function handle(delta) {
//     var time = 300;
//     var distance = 350;

//     $('html, body').stop().animate ({
//         scrollTop: $(window).scrollTop() - (distance * delta)
//     }, time );
// }

    var controller = new ScrollMagic.Controller();
    var $two=$('#two');
    var twoA=TweenMax.to($two, 1, {
        y:"50%",
        z:0.01
    });
    new ScrollMagic.Scene
        ({
            triggerElement: "#five-5",
            duration: "40%",
            offset:"20%"
        })
    // .addIndicators()
    .setTween(twoA)
    .addTo(controller);

    var $three=$('#three');
    var threeA=TweenMax.to($three, 1, {
        y:"25%",
        z:0.01
    });
    new ScrollMagic.Scene
        ({
            triggerElement: "#five-5",
            duration: "40%",
            offset:"20%"
        })
    // .addIndicators()
    .setTween(threeA)
    .addTo(controller);

    var $four=$('#four');
    var fourA=TweenMax.to($four, 1, {
        y:"5%",
        z:0.01
    });
    new ScrollMagic.Scene
        ({
            triggerElement: "#five-5",
            duration: "40%",
            offset:"20%"
        })
    // .addIndicators()
    .setTween(fourA)
    .addTo(controller);

    // var $five1=$('#five-1');
    // var five1A=TweenMax.to($five1, 1, {
    //     y:"5%"
    //     // opacity:1,
    //     // z:0.01,
    // });
    // new ScrollMagic.Scene
    //     ({
    //         triggerElement: "#five-5",
    //         duration: "55%",
    //         offset:"100%"
    //     })
    // .addIndicators()
    // .setTween(five1A)
    // .addTo(controller);

    var $five2=$('#five-2');
    var five2A=TweenMax.to($five2, .1, {
        scaleX:1.3,
        scaleY:1.3,
        z:0.01
    });
    new ScrollMagic.Scene
        ({
            triggerElement: "#five-5",
            duration: "75%",
            offset:"100%"
        })
    // .addIndicators()
    .setTween(five2A)
    .addTo(controller);

    var $five3=$('#five-3');
    var five3A=TweenMax.to($five3, .1, {
        scaleY:1.2,
        scaleX:1.2,
        z:0.01
    });
    new ScrollMagic.Scene
        ({
            triggerElement: "#five-5",
            duration: "75%",
            offset:"100%"
        })
    // .addIndicators()
    .setTween(five3A)
    .addTo(controller);

    var $five4=$('#five-4');
    var five4A=TweenMax.to($five4, .1, {
        scaleX:1.1,
        scaleY:1.1,
        z:0.01
    });
    new ScrollMagic.Scene
        ({
            triggerElement: "#five-5",
            duration: "75%",
            offset:"100%"
        })
    // .addIndicators()
    .setTween(five4A)
    .addTo(controller);

//     // var $five5=$('#five-5');
//     // var five5A=TweenMax.to($five5, .1, {
//     //     y:75
//     //     // opacity:1,
//     //     // z:0.01,
//     // });
//     // new ScrollMagic.Scene
//     //     ({
//     //         triggerElement: "#five-2",
//     //         duration: "50%",
//     //         offset:360
//     //     })
//     // .addIndicators()
//     // .setTween(five5A)
//     // .addTo(controller);

    var $six=$('#six');
    var sixA=TweenMax.to($six, .3, {
        y:"-50%"
        // opacity:1,
        // z:0.01,
    });
    new ScrollMagic.Scene
        ({
            triggerElement: "#five-5",
            duration: "125%",
            offset:"262.75%"
        })
 // .addIndicators()
    .setTween(sixA)
    .addTo(controller);

 })