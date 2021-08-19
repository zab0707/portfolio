import React from 'react';

const CarouselItem = (props) => {
  return (
    <div className={(props.alt === 0) ? 'carousel-item active': 'carousel-item'}>
      <img className="d-block w-100" src={props.path} alt={`${props.alt} slide`} />
    </div>
  );
};

export default CarouselItem;