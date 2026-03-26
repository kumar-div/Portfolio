import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Job Simulation</h4>
                <h5>Deloitte</h5>
              </div>
              <h3>March 2026</h3>
            </div>
            <p>
              Completed a hands-on cybersecurity simulation focused on identifying threats and understanding real-world security practices. Gained practical exposure to risk assessment and security analysis.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics Job Simulation</h4>
                <h5>Deloitte</h5>
              </div>
              <h3>March 2026</h3>
            </div>
            <p>
              Worked on a data analytics simulation involving data analysis and forensic technology. Developed skills in extracting insights from data and understanding investigative techniques.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Advanced Software Engineering Simulation</h4>
                <h5>Walmart</h5>
              </div>
              <h3>March 2026</h3>
            </div>
            <p>
              Completed an advanced software engineering simulation covering data structures, software architecture, database design, and data processing. Built a strong foundation in real-world engineering concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
