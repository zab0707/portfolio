import React from 'react';

const EduItem = ({item}) => {

  return(
     <div className="item">
      <div className="row">
          <div className="col-md-8">
              <h3>{item.course}</h3>
              <h4 className="organization">{item.college}</h4>
          </div>
          <div className="col-4"><span className="period">{item.duration}</span></div>
      </div>
      <p className="font-weight-bold">{item.result}</p>
  </div>
  );
}

export default EduItem;