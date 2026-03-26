import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (window.innerWidth < 900) return;

  const paras = document.querySelectorAll(".para");
  const titles = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  // Paragraph animation (simple)
  paras.forEach((para) => {
    gsap.fromTo(
      para,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: (para as HTMLElement).parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // Title animation (simple)
  titles.forEach((title) => {
    gsap.fromTo(
      title,
      { opacity: 0, y: 80, rotate: 10 },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: (title as HTMLElement).parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}