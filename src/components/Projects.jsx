import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Trybe',
            description: 'A web application for tracking the diamond lifecycle from rough to polished. Built structured workflows to manage dealers, lots, and packages across departments. Integrated planning suggestions, deviation approvals, and real-time tracking features. Implemented automated wage calculations for both piece-based and role-wise rates. Developed reporting modules for department-wise and process-wise aging analysis. Managed multi-version file handling with secure and configurable workflow approvals.',
            technologies: ['NestJS', 'MySQL', 'Python', 'Node.js']
        },
        {
            title: 'Purchase Consolidation (Lattice)',
            description: 'Developed modules for stone procurement through requisition and on-site quality checks. Integrated availability checks, quality grading, and vendor pricing assessment workflows. Handled invoicing logic and record management for accepted and rejected stones. Automated process flow for managing unavailable items and procurement gaps. Enabled centralized dashboard for tracking status across procurement lifecycle stages.',
            technologies: ['CoffeeScript', 'Node.js', 'MySQL']
        },
        {
            title: 'Product Development (PD)',
            description: 'Engineered system to manage design workflow from customer brief to final sample. Built interfaces for merchandisers, designers, and sales to input key design insights. Enabled CAD/CAM processing stages with version tracking and team collaboration. Created pricing logic based on design effort, cost evaluation, and client feedback. Streamlined review-approval loop to reduce turnaround time and ensure alignment.',
            technologies: ['Spring Boot', 'PostgreSQL', 'JPA']
        },
        {
            title: 'Online Shopping Web Application',
            period: 'Mar 2021',
            description: 'Developed a feature-rich e-commerce platform using JSP, Servlet, and MySQL backend. Implemented secure login authentication with session handling and encrypted credentials. Created intuitive product catalog with filtering, search, and sorting capabilities. Designed shopping cart functionality with quantity updates and total price recalculations. Developed a complete checkout workflow including form validation and confirmation page. Structured code in modular format to enhance maintainability and future scalability.',
            technologies: ['JSP', 'Servlet', 'MySQL', 'HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Snake Game Desktop Application',
            period: 'Oct 2020 – Nov 2020',
            description: 'Built an interactive snake game using Java Swing and custom event listeners. Programmed snake movement logic and collision detection using object-oriented design. Designed score tracker with dynamic updates and real-time feedback during gameplay. Implemented game-over handling and automatic restart for better user engagement. Tested game performance across multiple systems for stability and responsiveness.',
            technologies: ['Java', 'Swing', 'OOP']
        }
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">Key Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-header">
                                <h3 className="project-title gradient-text">{project.title}</h3>
                                {project.period && <span className="project-period">{project.period}</span>}
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
