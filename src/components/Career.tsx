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
                <h4>Web Development</h4>
                <h5>Self-Taught & Professional</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed comprehensive Web Development training. Built and deployed multiple responsive web applications using modern technologies like React, Next.js, and Node.js. Mastered full-stack development and created projects that combine functionality with excellent user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Expert</h4>
                <h5>Advanced Expertise</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Achieved expert-level proficiency in Python. Developed automation tools, data processing scripts, and backend systems. Created custom solutions for various clients, focusing on efficiency, clean code, and scalability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelance & Remote Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working on various remote projects and client work across multiple platforms. Combining web development and Python expertise to deliver comprehensive solutions. Pursuing BSCS degree while maintaining active freelance work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
