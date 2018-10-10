import React from 'react';

const ZoneCard = ({ zoneName, startTime, duration, id}) => {
  return (
    <div>
      <h4>{zoneName}</h4>
      <h4>{startTime}</h4>
      <h4>{duration}</h4>
    </div>
    )
}

export default ZoneCard;
