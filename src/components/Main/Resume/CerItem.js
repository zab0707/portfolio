import React from 'react';

const CerItem = ({name}) => {
  if(name){
    return (
      <img style={{border: '1px solid black'}} width="400" height="300" src={`assets/certificates/${name}.jpg`} alt={name} />
    );
  }
  return(<div></div>);
};

export default CerItem;