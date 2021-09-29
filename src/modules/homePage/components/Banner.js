import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import { getBanner } from '../actions/movie';
import { SHOW_TRAILER } from '../constants/movie';


const Banner = (props) => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBanner())
  
  },[])

  const {banner} = useSelector(state => state.bannerReducer)

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === banner.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? banner.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  const showTrailer = (maBanner) => {
    let trailer = ""
    switch (maBanner) {
      case 1: {
        trailer = "https://www.youtube.com/embed/uqJ9u7GSaYM"
        break;
      }
        
      case 2: {
        trailer = "https://www.youtube.com/embed/kBY2k3G6LsM"
        break;
      }

      case 3: {
        trailer = "https://www.youtube.com/embed/_rUC3-pNLyc"
        break;
      }
    
      default: {
        trailer = "https://www.youtube.com/embed/1I4vKyhMx4s"
        break;
      }
    }
    

    dispatch({
      type: SHOW_TRAILER,
      value: true,
      trailer
  })
  }

  const slides = banner.map((item) => {
    return (
      <CarouselItem
        className="banner__wrapper"
        tag="div"
        key={item.maBanner}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
            <img style={{height:"72vh", objectFit:"cover"}} src={item.hinhAnh} alt={Math.random()} />
            <i className="fas fa-play" onClick={() => showTrailer(item.maBanner)}></i>
      </CarouselItem>
    );
  });

  return (
    <div>
      
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="banner"
      >
        <CarouselIndicators items={banner} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Banner;
