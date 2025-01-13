import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Full Stack Development",
        description:
            "Building dynamic and responsive web applications using React, Angular, Python, Flask, Java and Spring Boot, ensuring seamless front-end and back-end integration.",
    },
    {
        id: 2,
        image: Image2,
        title: "Cloud Deployment & Architecture",
        description:
            "Designing and deploying scalable web solutions on AWS, Azure, and GCP, leveraging cloud services for high availability and performance.",
    },
    {
        id: 3,
        image: Image3,
        title: "DevOps & Automation",
        description:
            "Streamlining CI/CD pipelines with Docker, Kubernetes, and Jenkins to enhance software deployment, scalability, and performance.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services;
