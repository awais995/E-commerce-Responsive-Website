"use client"
import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';

const Hero = () => {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  }

  const slideData =[
    {
    id: 0,
    image: 'https://via.placeholder.com/1920x1080',
    title: 'Slide 1',
    mainTitle: 'Subtitle 1',
    price: '$20'
    },

    {
        id: 1,
        image: 'https://via.placeholder.com/1920x1080',
        title: 'Slide 1',
        mainTitle: 'Subtitle 2',
        price: '$20'
        },

        {
    id: 2,
    image: 'https://via.placeholder.com/1920x1080',
    title: 'Slide 3',
    mainTitle: 'Subtitle 2',
    price: '$20'
    }

]
  
    return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
        {slideData.map((item) => (
        <Slide 
        key={item.id}
        img={item.img}
        title={item.title}
        mainTitle={item.mainTitle}
        price={item.price}
        />
        ))}
         </Slider>
      </div>
    </div>
  );
};

export default Hero