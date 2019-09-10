import React from "react"
import styled from "@emotion/styled"
import Slider from "react-slick"

const Carousel = styled(({className, children}) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <Slider {...settings} className={className}>
      {children}
    </Slider>
  )
})`
  width: 100%;

  .slick-track {
    display: flex;

    .slick-slider {
      align-items: center;
      display: flex;
      height: auto;
      justify-content: center;
      margin-bottom: 20px;
    }
  }

  .slick-dots {
    bottom: 0;
    display: flex !important;
    margin: 0 auto !important;
    padding: 0 !important;
    position: relative;
    text-align: center;
    width: fit-content;


    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      display: inline;
      height: 16px;
      margin-left: 0;
      margin-right: 12px;
      width: 16px;

      button {
        background: transparent;
        border: 1px solid #fff;
        border-radius: 50%;
        height: 16px;
        padding: 0;
        text-indent: -9999px;
        width: 16px;
      }

      &:last-child {
        margin-right: 0;
      }

      &.slick-active {
        button {
          background: #fff;
        }
      }
    }
  }
`

export default Carousel