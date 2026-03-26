import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");

    const handleClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();

        const target = e.currentTarget as HTMLAnchorElement;
        const section = target.getAttribute("data-href");

        if (section) {
          document.querySelector(section)?.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // CLEANUP (important)
    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/images/logo.png" className="navbar-title" data-cursor="disable" target="_blank" rel="noopener noreferrer">
          Divyansh
        </a>

        <a
          href="mailto:div.container25@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          div.container25@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;