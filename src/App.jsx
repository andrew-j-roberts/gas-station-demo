import React from "react";
import styled from "styled-components";
import GasStationInterface from "./GasStationInterface";
import { SvgPetroCanadaLogo } from "../public/icons";

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled(SvgPetroCanadaLogo)`
  height: 100px;
  width: 100px;
`;

const HeaderTitle = styled.h3`
  margin-left: 10px;
`;

const MainContent = styled.div`
  height: calc(100vh - 101px);
  width: 100vw;
`;

function App() {
  return (
    <Layout>
      <Header>
        <HeaderLogo />
        <HeaderTitle>Gas Station Demo</HeaderTitle>
      </Header>
      <MainContent>
        <GasStationInterface/>
      </MainContent>
    </Layout>
  );
}

export default App;
