import React from 'react';

const SkillDetails = ({item}) => {
  return(
    <div className="card special-skill-item border-0">
      <div className="card-header bg-transparent border-0"><i className={`icon ${item.icon}`}></i></div>
      <div className="card-body">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.desc}</p>
      </div>
    </div>
  );
};

export default SkillDetails;