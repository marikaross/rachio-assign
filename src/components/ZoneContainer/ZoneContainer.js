import React from 'react';
import ZoneCard from '../ZoneCard/ZoneCard.js';

const ZoneContainer = ({zones}) => {
  const zoneCards = zones.map(zone => (
    <ZoneCard
      {...zone}
      key = {zone.id} 
    />
  ))

  return (
    <div>
      <header className='container-header'>
        <h3>Zone</h3>
        <h3>Start Time</h3>
        <h3>Duration</h3>
      </header>
      {zoneCards}
    </div>
    )
}

export default ZoneContainer;