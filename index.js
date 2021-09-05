// Prototype object animates the sprite from css classes
function CardSpriteAnimation(obj) {
    this.element = obj.element;
    this.totalFrames = obj.totalFrames;
    this.frameNum = 1;
    this.classNamePrefixStr = obj.classNamePrefix;
    this.speed = obj.speed;
    this.animationInterval;
}

CardSpriteAnimation.prototype.animate = function () {
    this.element.className = this.classNamePrefixStr + this.frameNum;
    this.frameNum++;

    if (this.frameNum >= this.totalFrames) {
        this.element.className = this.classNamePrefixStr + this.totalFrames;
        clearInterval(this.animationInterval);
    }
}

CardSpriteAnimation.prototype.play = function () {
    this.animationInterval = setInterval(this.animate.bind(this), this.speed);
}

CardSpriteAnimation.prototype.pause = function () {
    clearInterval(this.animationInterval);
}

CardSpriteAnimation.prototype.frame = function (num) {
    this.pause();
    this.frameNum = num;
    this.element.className = this.classNamePrefixStr + num;
}

/////////////////////////////////////////////////////////////////////////////////////
// ANIMATION - TIMELINEMAX
/////////////////////////////////////////////////////////////////////////////////////

// SETUP ELEMENTS TO ANIMATE
// Background Elements
var tl = gsap.timeline({repeat: 0, repeatDelay: 0});

cardSpriteSheet = new CardSpriteAnimation({
    element: document.getElementById("card"),
    totalFrames: 45,
    classNamePrefix: "frame",
    speed: 22,
}),


// SETUP ANIMATION ITEMS
    initAnimation = function () {
        tl.to("#zeroAPR_line1", 0.65, {
            top: "77px",
            opacity: 1,
            ease: Circ.easeOut,
            force3D: true,
            transformOrigin: "0px 0px"
        }, 0.5);
        tl.to("#zeroAPR_line2", 0.65, {
            top: "134px",
            opacity: 1,
            ease: Circ.easeOut,
            force3D: true,
            transformOrigin: "0px 0px"
        }, 0.6);
        tl.to("#zeroAPR_line3", 0.65, {
            top: "168px",
            opacity: 1,
            ease: Circ.easeOut,
            force3D: true,
            transformOrigin: "0px 0px"
        }, 0.7);
        tl.to("#zeroAPR_line4", 0.65, {
            top: "201px",
            opacity: 1,
            ease: Circ.easeOut,
            force3D: true,
            transformOrigin: "0px 0px"
        }, 0.8);

        // Resolve Frame Animation
        tl.staggerTo("#zeroAPR_line1", 0.35, {
            top: "57px",
            opacity: 0,
            ease: Circ.easeIn,
            force3D: true,
            transformOrigin: "0px 0px"
        }, 0.1, "2.5");
        tl.staggerTo("#zeroAPR_line2", 0.35, {
            top: "115px",
            opacity: 0,
            ease: Circ.easeIn,
            force3D: true,
            transformOrigin: "0px 0px"
        }, 0.1, "2.6");
        tl.staggerTo("#zeroAPR_line3", 0.35, {
            top: "148px",
            opacity: 0,
            ease: Circ.easeIn,
            force3D: true,
            transformOrigin: "0px 0px"
        }, 0.1, "2.7");
        tl.staggerTo("#zeroAPR_line4", 0.35, {
            top: "181px",
            opacity: 0,
            ease: Circ.easeIn,
            force3D: true,
            transformOrigin: "0px 0px"
        }, 0.1, "2.8");
        tl.call(function () {
            cardSpriteSheet.play();
        }, null, "3");
        tl.to("#swoop", 1, {top: "0px", ease: Circ.easeOut}, "3"),
            tl.to("#bg_overlay", 2, {opacity: 0, ease: Circ.easeOut}, "3"),
            tl.to("#logo_blue", 0.75, {opacity: 0, ease: Circ.easeOut}, "3")
        tl.to("#businessEliteRewards_line1", 0.5, {
            top: "24px",
            opacity: 1,
            ease: Circ.easeOut,
            force3D: true,
            transformOrigin: "0px 0px"
        }, "3.25");
        tl.to("#businessEliteRewards_line2", 0.5, {
            top: "38px",
            opacity: 1,
            ease: Circ.easeOut,
            force3D: true,
            transformOrigin: "0px 0px"
        }, "3.35");
        tl.to("#designedForSmall_line1", 0.5, {
            top: "165px",
            opacity: 1,
            ease: Circ.easeOut,
            force3D: true,
            transformOrigin: "0px 0px"
        }, "3.6");
        tl.to("#designedForSmall_line2", 0.5, {
            top: "183px",
            opacity: 1,
            ease: Circ.easeOut,
            force3D: true,
            transformOrigin: "0px 0px"
        }, "3.7");
        tl.to("#designedForSmall_line3", 0.5, {
            top: "201px",
            opacity: 1,
            ease: Circ.easeOut,
            force3D: true,
            transformOrigin: "0px 0px"
        }, "3.8");
        tl.to("#earnRewardPoints_line1", 0.5, {
            top: "231px",
            opacity: 1,
            ease: Circ.easeOut,
            force3D: true,
            transformOrigin: "0px 0px"
        }, "4"),
            tl.to("#cta", 2, {opacity: 1, ease: Circ.easeOut, force3D: true, transformOrigin: "0px 0px"}, "4"),
            tl.to("#ctaSheen", 0.75, {
                left: "110px",
                ease: Quad.easeOut,
                force3D: true,
                transformOrigin: "0px 0px"
            }, "4"),

            tl.play();
    }



   







   




