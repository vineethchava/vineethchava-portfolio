import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg'
import Image4 from '../../assets/avatar-2.svg'
import Image1 from '../../assets/avatar-1.svg'


import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "Praveen Pogaku",
			subtitle: "Lead Analyst @ CGI",
			comment: "Vineeth worked at CGI as a Software engineer. He was excellent and had a real eye for the development. If there was ever a time where we had a complicated backend integration issue and we needed to know what's the best approach - Vineeth was our goto man! 🙌",
		},
		{
			id: 2,
			image: Image3,
			title: "Ayushi Singh",
			subtitle: "Senior Developer @ CGI",
			comment: "I enjoy working with Vineeth and learnt so much. You make the process fun and interesting. Good luck! 👍",
		},
		{
			id: 3,
			image: Image1, 
			title: "Naveen Verma",
			subtitle: "Team Lead @ Infosys",
			comment: "Working with Vineeth has been an inspiring journey. His problem-solving skills and positive attitude make every project a success. Best wishes! 🙌",
		}
		

	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials