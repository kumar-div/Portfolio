import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";

  document
    .getElementsByTagName("main")[0]
    ?.classList.add("main-active");

  // Background animation
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Simple text animation (no SplitText)
  gsap.from(".landing-info h3, .landing-intro h2, .landing-intro h1", {
    opacity: 0,
    y: 30,
    duration: 0,
  });

  gsap.fromTo(
    ".landing-h2-info",
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.2,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Loop text effect (simple version)
  loopText(".landing-h2-info", ".landing-h2-info-1");
  loopText(".landing-h2-1", ".landing-h2-2");
}

function loopText(selector1: string, selector2: string) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  tl.fromTo(
    selector2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1,
      y: 0,
      delay: 2,
    }
  )
    .to(selector1, {
      y: -80,
      duration: 1,
      delay: 2,
    })
    .to(selector2, {
      y: -80,
      duration: 1,
    });
}