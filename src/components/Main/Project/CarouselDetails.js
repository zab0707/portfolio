import React from 'react';

const CarouselDetails = ({item}) => {
  return(
    <div className="card border-0">
      <div className="card-body">
        <h3>{item.title}</h3>
        <h6>{item.name}</h6>
        <p className="text-muted card-text">{item.desc}</p>
        <p className="font-weight-bold">Technologies and Frameworks: {item.tech}.</p>
      </div>
    </div>
  );
};

export default CarouselDetails;