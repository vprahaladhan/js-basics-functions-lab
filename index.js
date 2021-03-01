// Code your solution in this file!
const hqStreetNo = 42;

const distanceFromHqInBlocks = (pickupLoc) => Math.abs(pickupLoc - hqStreetNo);

const distanceFromHqInFeet = (pickupLoc) => distanceFromHqInBlocks(pickupLoc) * 264;

const distanceTravelledInFeet = (startingBlock, endingBlock) => Math.abs(startingBlock - endingBlock) * 264;

const calculatesFarePrice = (start, destination) => {
  const totalFeet = Math.abs(destination - start) * 264;
  console.log('Total feet > ', totalFeet);

  if (totalFeet <= 400) {
    return 0;
  }

  if (totalFeet <= 2000) {
    return (totalFeet - 400) * 0.02;
  }

  if (totalFeet <= 2500) {
    return 25;
  }

  return "cannot travel that far"
}