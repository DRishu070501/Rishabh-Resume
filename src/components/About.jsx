import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text glass-card slide-in-left">
                        <p>
                            Results-driven Backend Developer with 3+ years of experience building scalable web applications
                            using Spring Boot and NestJS. Proficient in designing robust APIs, integrating MySQL/PostgreSQL
                            databases, and writing clean, maintainable code using OOP and functional programming principles.
                        </p>
                        <p>
                            Experienced in Agile-based workflows, CI/CD pipelines, and collaborative development. Comfortable
                            working across monolithic and microservices architectures, with occasional front-end contributions
                            using HTML, CSS, and JavaScript.
                        </p>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card glass-card slide-up">
                            <div className="stat-number gradient-text">3+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-card glass-card slide-up" style={{ animationDelay: '0.1s' }}>
                            <div className="stat-number gradient-text">5+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-card glass-card slide-up" style={{ animationDelay: '0.2s' }}>
                            <div className="stat-number gradient-text">10+</div>
                            <div className="stat-label">Technologies</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
