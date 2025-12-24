import './Education.css';

const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Science (B.Sc), Computer Science',
            institution: 'Shree RamKrishna Institute Of Computer Education And Applied Sciences',
            cgpa: '8.36/10',
            period: '2019 – 2022'
        },
        {
            degree: 'Senior Secondary (XII), Science',
            institution: 'Oxford English Higher Secondary School (GSEB board)',
            percentage: '66.00%',
            period: '2019'
        },
        {
            degree: 'Secondary (X)',
            institution: 'Oxford English Higher Secondary School (GSEB board)',
            percentage: '75.00%',
            period: '2017'
        }
    ];

    const certifications = [
        '1st Rank in C coding competition by Pixels (Bhagwan Mahaveer University)',
        '1st Rank in C coding competition by Sarvajanik College of Engineering & Technology',
        'Certified in C (Intermediate) from Hackerrank assessments',
        'Certified in Java (Basic) from Hackerrank assessments'
    ];

    const training = {
        title: 'IT Technology Career Path',
        organization: 'Tops Technologies',
        location: 'Surat, Gujarat',
        period: 'Jul 2020 – May 2021',
        details: [
            'Completed structured training in Java, Web Development, and Agile Practices',
            'Worked on hands-on exercises and real-time mini-projects for practical experience'
        ]
    };

    return (
        <section id="education" className="education section">
            <div className="container">
                <h2 className="section-title">Education & Certifications</h2>

                <div className="education-content">
                    <div className="education-section">
                        <h3 className="subsection-title gradient-text">Education</h3>
                        <div className="education-list">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="education-card glass-card"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <h4 className="degree">{edu.degree}</h4>
                                    <p className="institution">{edu.institution}</p>
                                    <div className="edu-details">
                                        <span className="grade">
                                            {edu.cgpa || edu.percentage}
                                        </span>
                                        <span className="period">{edu.period}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="certifications-section">
                        <h3 className="subsection-title gradient-text">Certifications & Achievements</h3>
                        <div className="certifications-list glass-card slide-up">
                            {certifications.map((cert, index) => (
                                <div key={index} className="cert-item">
                                    <span className="cert-icon">🏆</span>
                                    <p>{cert}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="training-section">
                        <h3 className="subsection-title gradient-text">Training</h3>
                        <div className="training-card glass-card slide-up">
                            <h4 className="training-title">{training.title}</h4>
                            <p className="training-org">{training.organization} – {training.location}</p>
                            <p className="training-period">{training.period}</p>
                            <ul className="training-details">
                                {training.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

