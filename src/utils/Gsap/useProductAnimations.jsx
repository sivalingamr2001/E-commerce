import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useProductAnimations = (products) => {
  useEffect(() => {
    if (products.length > 0) {
      gsap.utils.toArray(".products__card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      });
    }
  }, [products]);
};

export default useProductAnimations;
