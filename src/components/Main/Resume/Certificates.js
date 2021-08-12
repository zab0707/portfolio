import React from 'react';

import CerItem from './CerItem';

const Certificates = ({c1, c2}) => {
  return(
    <div className="row no-gutters">
      <div className="col-md-6">
        <CerItem name={c1} />
      </div>
        <div className="col-md-6">
        <CerItem name={c2} />
      </div>
    </div>
  );
};

export default Certificates;