export const cleanZones = (zoneData) => {
  const cleanedZones = zoneData.devices.zones.map(zone => {
    return {
      name: zone.name,
      duration: zone.runtime / 60
    };
  });
  return cleanedZones
};

export { cleanZones }