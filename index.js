function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }

  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(startBlock - endBlock);
    const feetTravelled = blocksTravelled * 264;
    return feetTravelled;
  }

  function calculatesFarePrice(start, destination) {
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * 264;
    let farePrice = 0;
  
    if (distanceInFeet <= 400) {
      farePrice = 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      farePrice = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      farePrice = 25;
    } else {
      farePrice = 'cannot travel that far';
    }
  
    return farePrice;
  }
  

  
  
