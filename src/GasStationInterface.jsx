/**
 * GasPump.jsx
 *
 * Description goes here
 *
 * @author Andrew Roberts
 */

import React, { useRef } from "react";
import styled from "styled-components";
import FuelTank from "./FuelTank";
import Logger from "./Logger";
import { useContainerDimension, useGasPump, useLogger } from "./hooks";
import { SvgGasStationDiagram } from "../public/icons";

/**
 * Styling
 */

const GasPumpContainer = styled.div`
  border: 1px solid #aaaaaa;
  display: flex;
  justify-content: center;
  position: relative;
`;

const GasPumpDiagram = styled(SvgGasStationDiagram)`
  height: 100%;
`;

const FuelTankOverlay = styled.div`
  bottom: 20px;
  height: 33%;
  max-width: 33%;
  position: absolute;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  justify-items: center;
  height: 100%;
`;

/**
 * Logic
 */

// function handleOrientation(event) {
//   var absolute = event.absolute;
//   var alpha    = event.alpha;
//   var beta     = event.beta;
//   var gamma    = event.gamma;

//   console.log(event);
// }

/**
 * Components
 */

function GasMeter({ currentFuelLevel }) {}

function GasStationInterface() {
  /* component logic */
  const { logs, log, clearLogs } = useLogger([]);
  const { currentFuelLevel, startPump, stopPump, resetPump } = useGasPump(
    "DECREMENT",
    100,
    1,
    100,
    log
  );

  console.log(logs);
  /* component styling */
  // do some useRef magic and find out the dimensions of the parent container
  const [diagramRef, diagramSize] = useContainerDimension();
  // Use the parent dimensions to relatively size and position the fuel tank
  // This allows us to build a responsive layout that will look nice on mobile devices
  const fuelGaugeRadius = Math.min(
    Math.round(diagramSize.height * 0.45),
    Math.round(diagramSize.width * 0.4)
  );

  return (
    <MainContainer>
      <GasPumpContainer>
        <GasPumpDiagram sizingref={diagramRef} />
        <FuelTankOverlay>
          <FuelTank radius={fuelGaugeRadius} fuelLevel={currentFuelLevel} />
        </FuelTankOverlay>
      </GasPumpContainer>
      <div>
        <button onClick={startPump}>START PUMP</button>
        <button onClick={stopPump}>STOP PUMP</button>
        <button onClick={resetPump}>RESET PUMP</button>
        <Logger logList={logs}/>
      </div>
    </MainContainer>
  );
}

export default GasStationInterface;
