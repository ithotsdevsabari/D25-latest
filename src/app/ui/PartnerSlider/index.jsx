import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import './partnerSlider.scss';

export default function PartnerSlider() {
  /** Logo data Data **/

  const logoData = [
    {
        id:'1',
        url:'/partnerLogos/logo1.png',
        alt:"Partner Logo"
    },
    {
        id:'2',
        url:'/partnerLogos/logo2.png',
        alt:"Partner Logo"
    },
    {
        id:'3',
        url:'/partnerLogos/logo3.png',
        alt:"Partner Logo"
    },
    {
        id:'4',
        url:'/partnerLogos/logo4.png',
        alt:"Partner Logo"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        //   dots: true,
        //   arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        //   dots: true,
        //   arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="slider-conteiner">
      {logoData.map((item, index) => (
        <Div key={item.id} >
          <Div className="">
        <Div className="">
          <img src={item.url} alt={item.alt} />
          <Div className="" />
        </Div>
      </Div>
        </Div>
      ))}
    </Slider>
  );
}
