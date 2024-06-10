document.addEventListener("DOMContentLoaded", () => {
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    multiplier: 2,
    class: "is-reveal",
  });

  // Refresh ScrollTrigger and LocomotiveScroll
  scroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, 0, 0)
        : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  ScrollTrigger.refresh();

  // Cursor and Animation Code
  const cursor = document.querySelector(".cursor");
  const page1Content = document.querySelector(".page1-content");

  const page1Animation = () => {
    const tl = gsap.timeline();

    tl.from(".page1-starting h3", {
      x: 200,
      duration: 0.5,
      opacity: 0,
      delay: 2,
    })
      .to(".page1-starting h3", {
        x: -200,
        duration: 0.5,
        opacity: 0,
        delay: 1,
      })
      .to(".page1-starting", {
        zIndex: -1,
        delay: 0.5,
      })
      .from(".page1 video", {
        delay: 0.5,
        y: 300,
        opacity: 0,
        duration: 0.5,
      })
      .from("nav h3, nav h4", {
        delay: 0.5,
        x: 100,
        opacity: 0,
        duration: 0.5,
      })
      .from(".page1-content h1  ", {
        stagger: 0.5,
        x: 100,
        opacity: 0,
        duration: 0.5,
      })
      .to(".cursor", {
        zIndex: 9,
        x: 700,
        y: 300,
        duration: 1,
      });

    page1Content.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
      });
    });

    page1Content.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });

    page1Content.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      });
    });
  };

  const page2Animation = () => {
    gsap.from(".content1 h3", {
      y: 120,
      opacity: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".content1",
        scroller: ".main",
        start: "top 48%",
        end: "bottom 46%",
        scrub: 1,
      },
    });

    gsap.from(".content2 h4", {
      y: 150,
      opacity: 0,
      stagger: 0.2,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".content2",
        scroller: ".main",
        start: "top 49%",
        end: "bottom 98%",
        scrub: 1,
      },
    });

    gsap.to("hr", {
      width: "100%",
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".content2",
        scroller: ".main",
        start: "top 41%",
        end: "bottom 88%",
        scrub: 2,
      },
    });
  };
  const page3Animation = () => {
    gsap.from(".page3-content1 p", {
      y: -120,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".page3-content2",
        scroller: ".main",
        start: "top 51%",
        end: "bottom 68%",
        scrub: 2,
      },
    });
    gsap.from(".page3-content2 h3", {
      y: 120,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".page3-content2",
        scroller: ".main",
        start: "top 51%",
        end: "bottom 68%",
        scrub: 2,
      },
    });
  };

  const page4Animation = () => {
    document.querySelector("#card1").addEventListener("mouseenter", () => {
      gsap.to("#card1 video", {
        zIndex: 15,
        duration: 0.5,
        ease: "power2.out",
      });
    });
    document.querySelector("#card1").addEventListener("mouseleave", () => {
      gsap.to("#card1 video", {
        zIndex: 10,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    document.querySelector("#card2").addEventListener("mouseenter", () => {
      gsap.to("#card2 video", {
        zIndex: 15,
        duration: 0.5,
        ease: "power2.out",
      });
    });
    document.querySelector("#card2").addEventListener("mouseleave", () => {
      gsap.to("#card2 video", {
        zIndex: 10,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    document.querySelector("#card3").addEventListener("mouseenter", () => {
      gsap.to("#card3 video", {
        zIndex: 15,
        duration: 0.5,
        ease: "power2.out",
      });
    });
    document.querySelector("#card3").addEventListener("mouseleave", () => {
      gsap.to("#card3 video", {
        zIndex: 10,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  };

  const page5Animation = () => {
    gsap.from(".page5-content1 h3", {
      y: 120,
      opacity: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".page5-content1",
        scroller: ".main",
        start: "top 48%",
        end: "bottom 46%",
        scrub: 1,
      },
    });

    gsap.from(".page5-content2 h4", {
      y: 150,
      opacity: 0,
      stagger: 0.2,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".page5-content2",
        scroller: ".main",
        start: "top 49%",
        end: "bottom 98%",
        scrub: 1,
      },
    });

    gsap.to(".page5 hr", {
      width: "100%",
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".page5-content2",
        scroller: ".main",
        start: "top 41%",
        end: "bottom 88%",
        scrub: 2,
      },
    });
  };
  const page6Animation = () => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const circlePath = document.querySelector(".page6 svg:first-child circle");
    const animatedSVG = document.querySelector(".animated-svg");

    if (circlePath && animatedSVG) {
      const pathLength = circlePath.getTotalLength();

      gsap.set(animatedSVG, { xPercent: -50, yPercent: -50 });

      const tween = gsap.timeline({
        scrollTrigger: {
          trigger: ".page6",
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      });

      tween.to(animatedSVG, {
        motionPath: {
          path: circlePath,
          align: circlePath,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        duration: 1,
        ease: "none",
      });
    } else {
      console.log(
        "Could not find the circle path or the animated SVG element."
      );
    }
  };
  const page7Animation = () => {
    gsap.from(".page7-content1 h3", {
      y: 120,
      opacity: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".page7-content1",
        scroller: ".main",
        start: "top 48%",
        end: "bottom 46%",
        scrub: 1,
      },
    });

    gsap.from(".page7-content2 h4", {
      y: 150,
      opacity: 0,
      stagger: 0.2,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".page7-content2",
        scroller: ".main",
        start: "top 49%",
        end: "bottom 98%",
        scrub: 1,
      },
    });

    gsap.to(".page7 hr", {
      width: "100%",
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".page7-content2",
        scroller: ".main",
        start: "top 41%",
        end: "bottom 88%",
        scrub: 2,
      },
    });
  };

  const page8Animation = () => {
    const container = document.querySelector(".page8-content2 .image-container");
    const images = Array.from(container.children);
    
    
    images.forEach(img => {
      const clone = img.cloneNode(true);
      container.appendChild(clone);
    });
  
    const totalWidth = images.reduce((acc, img) => acc + img.offsetWidth + parseFloat(window.getComputedStyle(img).marginLeft), 0);
  
    
    gsap.to(container, {
      x: -totalWidth,
      duration: 100, // Adjust the duration for speed
      ease: "linear",
      repeat: -1,
    });
  };
    
  const page9Animation = () => {
    gsap.from(".page9 h5", {
      y: -120,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".page9 h5",
        scroller: ".main",
        start: "top 58%",
        end: "bottom 68%",
        scrub: 2,
        
      },
    });
    gsap.from(".page9 h3", {
      y: 120,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".page9 h3",
        scroller: ".main",
        start: "top 68%",
        end: "bottom 78%",
        scrub: 2,
      },
    });
  }
  
  const footerAnimation = ()=>{
      
    gsap.from("#footer", {
      y: -200,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".page9 ",
        scroller: ".main",
        start: "top 90%",
        end: "bottom 1%",
        scrub: 2,
       
        
      },
    });

    gsap.from(".footer-content1", {
      y: 120,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".footer-content1",
        scroller: ".main",
        start: "top 20%",
        end: "bottom 45%",
        scrub: 2,
    
        
      },
    });

    gsap.from(".part3", {
      y: 120,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".footer-content2",
        scroller: ".main",
        start: "top 20%",
        end: "bottom 45%",
        scrub: 2,
       
        
      },
    });
    gsap.from(".part4", {
      y: 120,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".footer-content2",
        scroller: ".main",
        start: "top 20%",
        end: "bottom 90%",
        scrub: 2,
      },
    });
    
  }
  page1Animation();
  page2Animation();
  page3Animation();
  page4Animation();
  page5Animation();
  page7Animation();
  page8Animation();
  page9Animation();
  footerAnimation();
});
