import React from 'react';

import CarouselItem from './CarouselItem';

const Carousel = ({id, item, path, exe}) => {
  return(
    <div id={id} className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={`${path}/1.${exe}`} alt={`1 slide`} />
        </div>
        {item.map((i) => {
          return <CarouselItem path={`${path}${i}.${exe}`} alt={i} key={i} />;
        })
        }
      </div>
      <a className="carousel-control-prev" href={`#${id}`} role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href={`#${id}`} role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;