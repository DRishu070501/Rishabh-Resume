import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Core Competencies',
            skills: [
                'Java Development',
                'Web Development',
                'Spring Framework',
                'RESTful Services',
                'Agile Methodologies',
                'Front-End Design',
                'API Integration',
                'Version Control',
                'Problem Solving',
                'Team Collaboration',
                'Object-Oriented Design',
                'Code Optimization'
            ]
        },
        {
            title: 'Technical Skills',
            skills: [
                'Java',
                'Spring Boot',
                'Spring MVC',
                'Spring Data JPA',
                'Hibernate',
                'Servlets',
                'JSP',
                'Node.js',
                'NestJS',
                'Python',
                'JavaScript',
                'HTML',
                'CSS',
                'Bootstrap',
                'MySQL',
                'PostgreSQL',
                'REST API',
                'Git',
                'Swing (Java)'
            ]
        }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title gradient-text">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="skill-item glass-card"
                                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                                    >
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
