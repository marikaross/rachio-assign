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
      {zoneCards}
    </div>
    )
}

export default ZoneContainer;