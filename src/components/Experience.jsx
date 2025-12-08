import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Mobioffice Software Innovations Pvt. Ltd.',
            location: 'Surat, Gujarat',
            role: 'Software Development Engineer (Web)',
            period: 'Mar 2022 – Present',
            responsibilities: [
                'Develop and maintain scalable applications using Spring MVC and JSP frameworks',
                'Build responsive UI components with HTML, CSS, JavaScript, and Bootstrap libraries',
                'Integrate applications with RESTful APIs for dynamic, data-driven application functionality',
                'Participate in Agile sprints, standups, and planning meetings to ensure timely delivery',
                'Refactor legacy modules to improve code efficiency and reduce application load times',
                'Collaborate with QA teams to identify bugs and perform regression testing procedures',
                'Utilize Git for version control, ensuring clean merges and proper branch management',
                'Assist with application deployment processes and resolving issues in production environments'
            ]
        },
        {
            company: 'WebOsMotic',
            location: 'Surat, Gujarat',
            role: 'Java Development Intern',
            period: 'Jul 2021 – Mar 2022',
            responsibilities: [
                'Contributed to web development using Google Web Toolkit and Spring MVC architecture',
                'Implemented reusable UI components for dynamic data-driven transactions',
                'Assisted with building front-end features using HTML, CSS, and modern JavaScript',
                'Participated in daily code reviews, learning agile web development delivery cycles',
                'Wrote clean, maintainable backend code and collaborated during review discussions',
                'Tested multiple modules and identified bugs to ensure stability before deployment'
            ]
        }
    ];

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="timeline-content glass-card">
                                <div className="timeline-header">
                                    <h3 className="company-name gradient-text">{exp.company}</h3>
                                    <span className="period">{exp.period}</span>
                                </div>
                                <h4 className="role-title">{exp.role}</h4>
                                <p className="location">{exp.location}</p>
                                <ul className="responsibilities">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

