import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollAnimation = () => {
  useEffect(() => {
    gsap.fromTo(
      ".fade-scroll", // Target the class for animation
      { opacity: 0, y: 50 }, // Start state: faded out and moved down
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".fade-scroll", // Element to observe
          start: "top 80%", // Animation starts when the element's top is 80% of the viewport height
          end: "top 30%", // Animation ends when the element's top is 30% of the viewport height
          scrub: true, // Smooth fade-in and fade-out as you scroll
        },
      }
    );
  }, []);

  return (
    <div>
      <section className="fade-scroll">
      </section>
    </div>
  );
};

export default GsapScrollAnimation;
