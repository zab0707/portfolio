import React from 'react';

const SkillItem = ({item}) => {
  return(
    <div>
      <h3>{item.skill}<span className="float-right">{item.status}</span></h3>
      <div className="progress">
          <div className="progress-bar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: item.percent}}><span className="sr-only">{item.percent}</span></div>
      </div>
      <h6 className="float-right">{item.percent}</h6>
    </div>
  );
}

export default SkillItem;