import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog-1.svg';

const Blog = () => {
    const handleRedirect = () => {
        window.open("https://ieeexplore.ieee.org/document/8748817", '_blank', 'noopener noreferrer');
    };

    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Research Publications</h2>

            <div className="blog__container grid">
                <div
                    className="blog__card"
                    onClick={handleRedirect}
                    style={{ cursor: "pointer" }} // Makes the card clickable
                >
                    <div className="blog__thumb">
                        <a href="https://ieeexplore.ieee.org/document/8748817" target="_blank" rel="noopener noreferrer">
                            <span className="blog__category">IEEE</span>
                        </a>
                        <a href="https://ieeexplore.ieee.org/document/8748817" target="_blank" rel="noopener noreferrer">
                            <img src={Image1} alt="Research Paper" className="blog__img" />
                        </a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">IEEE Research Paper</h3>
                        <div className="blog__meta">
                            <span>13 October, 2018</span>
                            <span className="blog__dot">.</span>
                            <span>Vineeth</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
