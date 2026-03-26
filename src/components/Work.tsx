import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    type: "Project",
    tech: "React, TypeScript, GSAP",
    image: "/images/portfolio.png",
    github: "https://github.com/kumar-div/Portfolio",
    live: "https://div-portfolio-1.vercel.app/",
    description: "A modern animated portfolio built with React and TypeScript.",
  },
  {
    id: 2,
    title: "Cyber Job Simulation",
    type: "Job Simulation",
    tech: "Networking, Security, Log Analysis",
    image: "/images/cyber.png",
    description:
      "Analyzed web logs to identify suspicious activity and supported breach investigation.",
  },
  {
    id: 3,
    title: "Data Analytics Simulation",
    type: "Job Simulation",
    tech: "Tableau, Excel, Data Analysis",
    image: "/images/data.png",
    description:
      "Built dashboards and extracted insights using Tableau and Excel.",
  },
  {
    id: 4,
    title: "Software Engineering Simulation",
    type: "Job Simulation",
    tech: "Java, SQL, UML",
    image: "/images/walmart.png",
    description:
      "Designed systems, built data structures, and modeled architecture.",
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".work-card");

    gsap.from(cards, {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-card" key={project.id}>
              
              <div className="work-number">
                0{index + 1}
              </div>

              <WorkImage image={project.image} alt={project.title} />

              <div className="work-content">
                <h3>{project.title}</h3>
                <p className="work-type">{project.type}</p>

                <p className="work-desc">
                  {project.description}
                </p>

                <p className="work-tech">
                  <strong>Tech:</strong> {project.tech}
                </p>

                <div className="work-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live →
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub →
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;