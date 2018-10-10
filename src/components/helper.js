const cleanZones = (zoneData) => {
  const cleanedZones = zoneData.devices.map(device => {
    const zoneInfo = device.zones.map(zone => {
      return {
        name: zone.name,
        duration: zone.runtime
      }
    });
    return zoneInfo
  });
  return cleanedZones
};

export { cleanZones }