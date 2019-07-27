import { useState } from "react";

/**
 * useGasPump   
 * React hook that models the actions of a physical gas pump
 * 
 * direction: indicates whether the pump should count up or down   
 * initalFuelLevel: specifies the starting level of fuel   
 * tickAmount: specifies the delta that will be added or subtracted to current fuel level
 * tickSpeed: how fast in ms the gas will increment or decrement 
 * 
 */
function useGasPump(direction, initialFuelLevel, tickAmount, tickSpeed, logger) {
  const [currentFuelLevel, setFuelLevel] = useState(initialFuelLevel);
  const [intervalId, setIntervalId] = useState(null); // keep track of interval id so we can stop our ticker

  console.log(logger);
  return {
    currentFuelLevel,
    startPump: () => {
      if(!intervalId) {
        if(direction == "INCREMENT") {
          let intervalId = setInterval(function(){ 
            setFuelLevel(prevFuelLevel => {
              logger(`Incremented tank from ${currentFuelLevel} to ${currentFuelLevel + tickAmount}`);
              return (prevFuelLevel + tickAmount);
            });
          }, tickSpeed);
          setIntervalId(intervalId);
        } else {
          let intervalId = setInterval(function(){ 
            setFuelLevel(prevFuelLevel => {
              logger(`Decremented tank from ${prevFuelLevel} to ${prevFuelLevel - tickAmount}`);
              return (prevFuelLevel - tickAmount);
            });
          }, tickSpeed);
          setIntervalId(intervalId);
        }
      }
    },
    stopPump: () => {
      if(intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    },
    resetPump: () => {
      setFuelLevel(initialFuelLevel);
    }
  };
};

export default useGasPump;
