import { portfolioData } from './data';
import './App.css';

function App() {
  const { header, experience, projects } = portfolioData;

  return (
    <div className="portfolio-container">
      <header className="section header-section">
        <h1>{header.name}</h1>
        <h2>{header.title}</h2>
        <p className="bio">{header.bio}</p>
        <div className="links">
          <a href={`mailto:${header.email}`}>Email</a>
          <a href={header.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={header.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </header>

      <section className="section">
        <h3>Work Experience</h3>
        <div className="list-container">
          {experience.map((job, index) => (
            <div key={index} className="item-card">
              <div className="item-header">
                <h4>{job.role} <span>@ {job.company}</span></h4>
                <span className="duration">{job.duration}</span>
              </div>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Projects</h3>
        <div className="list-container grid">
          {projects.map((proj, index) => (
            <div key={index} className="item-card project-card">
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
              <div className="tech-tags">
                {proj.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={proj.link} target="_blank" rel="noreferrer" className="project-link">
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} {header.name}. Built with Vite & React.</p>
      </footer>
    </div>
  );
}

export default App;
