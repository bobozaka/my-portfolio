// import React from 'react';
// import Avatar1 from '../../assets/img/avatar1.jpg';
// import Avatar2 from '../../assets/img/avatar2.jpg';
// import Avatar3 from '../../assets/img/avatar3.jpg';
// import Avatar4 from '../../assets/img/avatar4.jpg';
// import './Testimonials.css';

// import { Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const Testimonials = () => {
//   const data = [
//     {
//       avatar: Avatar1,
//       name: `Ernest Achiever`,
//       review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta vitae augue sit
//       amet auctor. Aliquam fringilla mauris vel elit dictum varius. Cras diam neque, lacinia
//       quis orci vel, elementum.`,
//     },
//     {
//       avatar: Avatar2,
//       name: `Илья Позднов`,
//       review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta vitae augue sit
//       amet auctor. Aliquam fringilla mauris vel elit dictum varius. Cras diam neque, lacinia
//       quis orci vel, elementum.`,
//     },
//     {
//       avatar: Avatar3,
//       name: `Никита Карнаухов`,
//       review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta vitae augue sit
//       amet auctor. Aliquam fringilla mauris vel elit dictum varius. Cras diam neque, lacinia
//       quis orci vel, elementum.`,
//     },
//     {
//       avatar: Avatar4,
//       name: `Алина Попова`,
//       review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta vitae augue sit
//       amet auctor. Aliquam fringilla mauris vel elit dictum varius. Cras diam neque, lacinia
//       quis orci vel, elementum.`,
//     },
//   ];

//   return (
//     <section id="testimonials">
//       <h5>Отзывы Клиентов</h5>
//       <h2>Отзывы</h2>

//       <Swiper
//         className="container testimonials__container"
//         modules={[Pagination]}
//         spaceBetween={40}
//         slidesPerView={1}
//         pagination={{ clickable: true }}>
//         {data.map(({ avatar, name, review }, index) => {
//           return (
//             <SwiperSlide key={index} className="testimonial">
//               <div className="client__avatar">
//                 <img src={avatar} />
//               </div>
//               <h5 className="client__name">{name}</h5>
//               <small className="client__review">{review}</small>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </section>
//   );
// };

// export default Testimonials;
