/*====================================
AHCollections4U
PART 4A
====================================*/

gsap.registerPlugin(ScrollTrigger);

/*==========================
LENIS
==========================*/

const lenis = new Lenis({
    duration: 1.25,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1
});

function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time)=>{
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

/*==========================
CUSTOM CURSOR
==========================*/

const cursor=document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{

gsap.to(cursor,{
x:e.clientX,
y:e.clientY,
duration:.15,
ease:"power2.out"
});

});

document.querySelectorAll("a,.lux-card,.occasion-card,.hero-button").forEach(el=>{

el.addEventListener("mouseenter",()=>{

gsap.to(cursor,{
width:45,
height:45,
background:"rgba(201,168,106,.18)",
duration:.3
});

});

el.addEventListener("mouseleave",()=>{

gsap.to(cursor,{
width:18,
height:18,
background:"transparent",
duration:.3
});

});

});

/*==========================
HERO INTRO
==========================*/

const heroTL=gsap.timeline({
defaults:{
ease:"power4.out"
}
});

/* Logo starts off screen */

heroTL.from(".hero-logo",{

x:-window.innerWidth,

rotation:-1440,

duration:2,

scale:.3

})

/* Brand */

.from(".hero-title",{

x:700,

opacity:0,

duration:1.3

},"-=1.4")

/* Tagline */

.from(".hero-tagline",{

y:80,

opacity:0,

duration:1

},"-=.8")

/* Button */

.from(".hero-button",{

opacity:0,

scale:.6,

duration:.8

},"-=.5")

/* Scroll Text */

.from(".scroll-text",{

opacity:0,

y:30,

duration:.7

},"-=.5");

/*==========================
BUTTON GLOW
==========================*/

gsap.to(".hero-button",{

boxShadow:"0 0 35px rgba(201,168,106,.55)",

repeat:-1,

yoyo:true,

duration:1.5,

ease:"sine.inOut"

});

/*==========================
BACKGROUND BLOBS
==========================*/

gsap.to(".hero-gradient-one",{

x:120,

y:80,

duration:14,

repeat:-1,

yoyo:true,

ease:"sine.inOut"

});

gsap.to(".hero-gradient-two",{

x:-90,

y:-70,

duration:16,

repeat:-1,

yoyo:true,

ease:"sine.inOut"

});

gsap.to(".hero-gradient-three",{

y:-100,

duration:12,

repeat:-1,

yoyo:true,

ease:"sine.inOut"

});

/*==========================
SCROLL TEXT
==========================*/

gsap.to(".scroll-text",{

y:-12,

repeat:-1,

yoyo:true,

duration:1.2,

ease:"sine.inOut"

});

/*==========================
PARALLAX HERO
==========================*/

gsap.to(".hero-gradient-one",{

scrollTrigger:{
trigger:".hero",
start:"top top",
end:"bottom top",
scrub:true
},

y:-250

});

gsap.to(".hero-gradient-two",{

scrollTrigger:{
trigger:".hero",
start:"top top",
end:"bottom top",
scrub:true
},

y:180

});

gsap.to(".hero-gradient-three",{

scrollTrigger:{
trigger:".hero",
start:"top top",
end:"bottom top",
scrub:true
},

scale:1.35

});

/*==========================
HERO PIN
==========================*/

const hero=document.querySelector(".hero");

const heroContainer=document.querySelector(".hero-container");

const heroLeft=document.querySelector(".hero-left");

const heroRight=document.querySelector(".hero-right");

gsap.timeline({

scrollTrigger:{

trigger:hero,

start:"top top",

end:"+=170%",

pin:true,

scrub:1,

anticipatePin:1

}

})

.to(heroContainer,{

scale:.78,

duration:1

})

.to(heroLeft,{

x:"-18vw",

duration:1

},0)

.to(heroRight,{

x:"-8vw",

duration:1

},0)

.to(".hero-title",{

fontSize:"3.8rem",

duration:1

},0)

.to(".hero-tagline",{

opacity:.7

},0)

/*==========================
HERO FADE
==========================*/

.to(".scroll-text",{

opacity:0

},0);
/*====================================
AHCollections4U
PART 4B
Collections Storytelling
====================================*/

/*==========================
STORY PANEL REVEAL
==========================*/

gsap.from(".story-inner",{

scrollTrigger:{
trigger:".story-wrapper",
start:"top center"
},

opacity:0,
x:-120,
duration:1.4,
ease:"power3.out"

});

/*==========================
COLLECTION CARDS
==========================*/

const cards=gsap.utils.toArray(".lux-card");

cards.forEach((card,index)=>{

gsap.set(card,{
zIndex:cards.length-index
});

});

/*==========================
STACK EFFECT
==========================*/

cards.forEach((card,index)=>{

gsap.from(card,{

scrollTrigger:{

trigger:card,

start:"top 88%",

end:"top 45%",

scrub:1

},

opacity:0,

scale:.82,

y:220,

rotationX:25,

rotationY:-12,

ease:"power3.out"

});

});

/*==========================
PIN EACH CARD
==========================*/

cards.forEach((card)=>{

ScrollTrigger.create({

trigger:card,

start:"top 12%",

end:"+=90%",

pin:true,

pinSpacing:false,

anticipatePin:1

});

});

/*==========================
IMAGE PARALLAX
==========================*/

document.querySelectorAll(".lux-image img").forEach((img)=>{

gsap.to(img,{

scrollTrigger:{
trigger:img,
start:"top bottom",
end:"bottom top",
scrub:true
},

yPercent:-18,
ease:"none"

});

});

/*==========================
CONTENT REVEAL
==========================*/

document.querySelectorAll(".lux-content").forEach((content)=>{

gsap.from(content.children,{

scrollTrigger:{
trigger:content,
start:"top 75%"
},

opacity:0,

y:60,

stagger:.15,

duration:.9,

ease:"power3.out"

});

});

/*==========================
3D HOVER
==========================*/

cards.forEach((card)=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((y/rect.height)-0.5)*-12;

gsap.to(card,{

rotationY:rotateY,

rotationX:rotateX,

transformPerspective:1200,

duration:.45,

ease:"power2.out"

});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{

rotationX:0,

rotationY:0,

duration:.6,

ease:"power3.out"

});

});

});

/*==========================
FLOATING PANEL LOGO
==========================*/

gsap.to(".story-logo",{

y:-18,

repeat:-1,

yoyo:true,

duration:2,

ease:"sine.inOut"

});

/*==========================
TEXT PARALLAX
==========================*/

gsap.to(".story-inner h2",{

scrollTrigger:{
trigger:".story-wrapper",
start:"top top",
end:"bottom bottom",
scrub:true
},

y:-60

});

gsap.to(".story-inner p",{

scrollTrigger:{
trigger:".story-wrapper",
start:"top top",
end:"bottom bottom",
scrub:true
},

y:-35

});

/*==========================
GOLD SHIMMER
==========================*/

document.querySelectorAll(".lux-content a").forEach(btn=>{

gsap.to(btn,{

color:"#d7b06b",

repeat:-1,

yoyo:true,

duration:1.4,

ease:"sine.inOut"

});

});

/*==========================
SOFT SCALE
==========================*/

cards.forEach(card=>{

ScrollTrigger.create({

trigger:card,

start:"top center",

end:"bottom center",

onUpdate:self=>{

gsap.to(card,{

scale:1+(self.progress*0.03),

duration:.2,

overwrite:true

});

}

});

});

/*==========================
SECTION FADE
==========================*/

gsap.from(".story-wrapper",{

opacity:0,

duration:1.2,

scrollTrigger:{
trigger:".story-wrapper",
start:"top 80%"
}

});
/*====================================
AHCollections4U
PART 4C
Occasions • Featured • About • Contact • Footer
====================================*/

/*==========================
FLOATING OCCASION CARDS
==========================*/

const occasionCards = gsap.utils.toArray(".occasion-card");

occasionCards.forEach((card, i) => {

    gsap.from(card, {
        scrollTrigger: {
            trigger: ".occasions-section",
            start: "top 70%"
        },

        opacity: 0,
        scale: .5,
        rotation: gsap.utils.random(-20,20),
        y: gsap.utils.random(120,220),
        duration: 1,
        delay: i * .05,
        ease: "back.out(1.8)"
    });

    gsap.to(card,{

        y:gsap.utils.random(-18,18),

        x:gsap.utils.random(-10,10),

        rotation:gsap.utils.random(-5,5),

        repeat:-1,

        yoyo:true,

        duration:gsap.utils.random(2.5,4),

        ease:"sine.inOut"

    });

});

/*==========================
3D OCCASION HOVER
==========================*/

occasionCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-.5)*18;

const rotateX=((y/rect.height)-.5)*-18;

gsap.to(card,{

rotationY:rotateY,

rotationX:rotateX,

scale:1.08,

duration:.35

});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{

rotationX:0,

rotationY:0,

scale:1,

duration:.45

});

});

});

/*==========================
EDITORIAL PRODUCTS
==========================*/

gsap.utils.toArray(".editorial").forEach(section=>{

gsap.from(section,{

scrollTrigger:{
trigger:section,
start:"top 75%"
},

opacity:0,

y:120,

duration:1.2,

ease:"power3.out"

});

});

/* Editorial Image */

gsap.utils.toArray(".editorial-image img").forEach(img=>{

gsap.from(img,{

scrollTrigger:{
trigger:img,
start:"top 75%"
},

scale:1.25,

duration:1.8,

ease:"power2.out"

});

});

/*==========================
BUTTON EFFECT
==========================*/

document.querySelectorAll(".editorial a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

gsap.to(btn,{

scale:1.08,

duration:.25

});

});

btn.addEventListener("mouseleave",()=>{

gsap.to(btn,{

scale:1,

duration:.25

});

});

});

/*==========================
ABOUT
==========================*/

gsap.from(".about-container span",{

scrollTrigger:{
trigger:".about-section",
start:"top 70%"
},

opacity:0,

y:50,

duration:1

});

gsap.from(".about-container h2",{

scrollTrigger:{
trigger:".about-section",
start:"top 70%"
},

opacity:0,

x:-120,

duration:1.1

});

gsap.from(".about-container p",{

scrollTrigger:{
trigger:".about-section",
start:"top 65%"
},

opacity:0,

y:80,

duration:1.4

});

/* Background Text */

gsap.to(".about-bg-text",{

scrollTrigger:{
trigger:".about-section",
scrub:true
},

xPercent:-15,

ease:"none"

});

/*==========================
CONTACT
==========================*/

gsap.from(".glass-contact",{

scrollTrigger:{
trigger:".contact-section",
start:"top 70%"
},

opacity:0,

scale:.85,

duration:1.2,

ease:"power3.out"

});

gsap.from(".contact-grid>*",{

scrollTrigger:{
trigger:".contact-grid",
start:"top 80%"
},

opacity:0,

y:60,

stagger:.12,

duration:.8

});

/*==========================
FOOTER
==========================*/

gsap.from("footer",{

scrollTrigger:{
trigger:"footer",
start:"top bottom"
},

opacity:0,

y:100,

duration:1.2

});

gsap.from(".footer-links a",{

scrollTrigger:{
trigger:".footer-links",
start:"top 85%"
},

opacity:0,

y:40,

stagger:.08

});

gsap.from(".footer-social a",{

scrollTrigger:{
trigger:".footer-social",
start:"top 85%"
},

opacity:0,

scale:.5,

stagger:.12

});

/*==========================
SUBTLE PARALLAX
==========================*/

gsap.utils.toArray("section").forEach(section=>{

const img=section.querySelector("img");

if(!img) return;

gsap.to(img,{

scrollTrigger:{
trigger:section,
start:"top bottom",
end:"bottom top",
scrub:true
},

yPercent:-8,

ease:"none"

});

});

/*==========================
WINDOW REFRESH
==========================*/

window.addEventListener("load",()=>{

ScrollTrigger.refresh();

});

/*==========================
RESIZE
==========================*/

window.addEventListener("resize",()=>{

ScrollTrigger.refresh();

});

/*==========================
PRELOADER FADE (Optional)
==========================*/

window.addEventListener("load",()=>{

gsap.from("body",{

opacity:0,

duration:.8,

ease:"power2.out"

});

});

/*====================================
END OF SCRIPT
====================================*/