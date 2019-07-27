/**
 * FuelGauge.jsx
 * This file is an example implementation of a cool react library built on top of 
 * a D3 implementation of a liquid gauge (https://github.com/trendmicro-frontend/react-liquid-gauge).
 * 
 * It accepts a value for a fuel level and animates the changes as the level rises or falls.
 * In the context of this application, our GasPump is going to control this state.
 * 
 * @author Andrew Roberts
 */

import React, { useState } from "react";
import LiquidFillGauge from "react-liquid-gauge";

function FuelTank({ fuelLevel, radius }) {
  // color configuration
  let fillColor;
  if (fuelLevel < 25) {
    fillColor = "#fe0000"; // red
  } else if (fuelLevel < 50) {
    fillColor = "#f77b00"; // orange
  } else if (fuelLevel < 75) {
    fillColor = "#ffde00"; // yellow
  } else {
    fillColor = "#0ab28a"; // Solace green 🎉
  }

  return (
    <LiquidFillGauge
      style={{ margin: "0 auto" }}
      width={radius}
      height={radius}
      value={fuelLevel}
      textRenderer={() => {
        return <tspan>{`${Math.round(fuelLevel)}%`}</tspan>;
      }}
      riseAnimation
      waveAnimation
      waveFrequency={2}
      waveAmplitude={2}
      circleStyle={{
        fill: "#000000"
      }}
      waveStyle={{
        fill: fillColor
      }}
      textStyle={{
        fill: "#000000",
        fontSize: "2em"
      }}
      waveTextStyle={{
        fill: "#000000",
        fontSize: "2em"
      }}
      // circle width and margin
      innerRadius={0.97}
      outerRadius={1}
    />
  );
}

export default FuelTank;
