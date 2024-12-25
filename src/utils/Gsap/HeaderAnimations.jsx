import gsap from "gsap";

export const HeaderAnimations = () => {
  gsap.fromTo(".header__intro", { scale: 0 }, { scale: 1, duration: 1 });
  gsap.fromTo(
    ".header__title",
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, ease: "bounce.out", duration: 3 }
  );

  gsap.fromTo(
    ".header__description",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, ease: "bounce.out", duration: 3 }
  );

  gsap.fromTo(
    ".shopping-left",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, ease: "bounce.out", duration: 3 }
  );
  gsap.fromTo(
    ".header__image",
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, ease: "bounce.out", duration: 3 }
  );
};

//    // Fade and Move Up
//     gsap.fromTo(".element1", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });

//     // Slide in from Top
//     gsap.fromTo(
//       ".header__brands-title",
//       { y: 200, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1 }
//     );

//     // Rotate and Fade In
//     gsap.fromTo(".element3", { rotation: 90, opacity: 0 }, { rotation: 0, opacity: 1, duration: 1 });

//     // Scale and Rotate
//     gsap.fromTo(".element4", { scale: 0.5, rotation: -90 }, { scale: 1, rotation: 0, duration: 1 });

//     // Slide in with Delay
//     gsap.fromTo(".element5", { x: -300, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5 });

//     // Bounce Out
//     gsap.fromTo(".element6", { y: 0 }, { y: 50, ease: "bounce.out", duration: 1 });

//     // Opacity Fade and Scale Up
//     gsap.fromTo(
//       ".element",
//       { opacity: 0, scale: 0.5 },
//       { opacity: 1, scale: 1, duration: 1, delay:0.3 }
//     );

//     // Rotate 360 Degrees
//     gsap.fromTo(".element8", { rotation: 0 }, { rotation: 360, duration: 2 });

//     // Fade In and Shake
//     gsap.fromTo(".element9", { opacity: 0 }, { opacity: 1, duration: 1, repeat: 2, yoyo: true, x: 20, ease: "power1.inOut" });

//     // Slide in with Bounce
//     gsap.fromTo(".element10", { x: -200, opacity: 0 }, { x: 0, opacity: 1, ease: "bounce.out", duration: 1 });

//     // Color Change with Scale
//     gsap.fromTo(".element11", { scale: 0.8, color: "#ff0000" }, { scale: 1, color: "#000000", duration: 1 });

//     // Multiple Properties (Opacity, Rotation, Scale)
//     gsap.fromTo(".element12", { opacity: 0, rotation: -45, scale: 0.5 }, { opacity: 1, rotation: 0, scale: 1, duration: 1 });

//     // Opacity and Y-Axis Slide
//     gsap.fromTo(".element13", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });

//     // Translate and Scale Animation
//     gsap.fromTo(".element14", { x: -100, scale: 0.8 }, { x: 0, scale: 1, duration: 1 });
// };
