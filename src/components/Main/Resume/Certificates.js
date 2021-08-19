import React from 'react';

import CerItem from './CerItem';

const Certificates = ({c1, c2}) => {
  const importAll = (r) => {
      return r.keys().map(r);
  }
  let item = importAll(require.context('../../../../public/assets/certificates/', false, /\.(png|jpe?g|svg)$/));
  return(
    <div id='certificates' className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {item.map((img, i) => {
          return <CerItem path={img['default']} alt={i} key={i} />;
        })
        }
      </div>
      <a className="carousel-control-prev" href='#certificates' role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href='#certificates' role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Certificates;