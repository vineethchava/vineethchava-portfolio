import React from 'react';
import './About.css';
import Image from '../../assets/avatar-4.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
    <div className="about__info">
        <p className="about__description">
            Hello! I'm Vineeth Chava, a passionate Software Engineer with 3.5+ years of experience in building scalable, high-performance web applications. Currently, I'm pursuing my Master's in Computer Science at the University of Missouri, Kansas City, with a perfect GPA of 4.0.<br /><br />
            Over the years, I have honed my skills in designing and deploying cloud-based solutions on AWS, leveraging technologies like Python, Java, RESTful APIs, and JavaScript frameworks (React.js, Angular). Proficient in backend development with Node.js and Spring Boot, and experienced with DevOps tools such as Docker and Jenkins. 
            Passionate about leading teams, driving collaboration, and delivering impactful, real-world solutions.<br /><br />
            Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="about__list">
        <li>Python</li>
<li>Java</li>
<li>JavaScript (ES6+)</li>
<li>React.js</li>
<li>Node.js</li>
<li>PostgreSQL</li>
<li>AWS</li>
<li>Docker</li>

        </ul>
        <button className="btn" onClick={downloadResume}>Download Resume</button>
    </div>
</div>

            </div>

            <AboutBox />
        </section>
    )
}

export default About