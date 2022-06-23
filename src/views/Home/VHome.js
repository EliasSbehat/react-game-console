import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Header from "../../components/Header/Header";
import Tools from "../../components/Tools/Tools";
import ViewArea from "../../components/ViewArea/ViewArea";
import AppContext from "../../context/context";

import { DarkMode, DayMode } from "../../theme";

const VHome = () => {
  const [design, setDesign] = React.useState(null);
  const [abxy, setAbxy] = React.useState(null);
  const [dpad, setDpad] = React.useState(null);
  const [thumbstickL, setThumbstickL] = React.useState(null);
  const [thumbstickR, setThumbstickR] = React.useState(null);
  const [startBtn, setStartBtn] = React.useState(null);
  const [touchpad, setTouchpad] = React.useState(null);
  const [trim, setTrim] = React.useState(null);
  const [trigger, setTrigger] = React.useState(null);
  const [rearDesign, setRearDesign] = React.useState(null);
  
  const imageSetting = {
    design: design,
    setDesign,
    abxy,
    setAbxy,
    dpad,
    setDpad,
    thumbstickL,
    setThumbstickL,
    thumbstickR,
    setThumbstickR,
    startBtn,
    setStartBtn,
    touchpad,
    setTouchpad,
    trim,
    setTrim,
    trigger,
    setTrigger,
    rearDesign,
    setRearDesign
  }
  
  // Check height of components
  const [h_header, getHeader] = React.useState(0);
  React.useEffect(() => {
    getHeader(document.getElementById('header').clientHeight + 3);
  }, [])

  const [theme, setTheme] = React.useState(DarkMode);
  const [themeStatus, setStatus] = React.useState(0);
  function modeChange() {
    if (themeStatus === 0) {
      setStatus(1);
      setTheme(DayMode);
    } else {
      setStatus(0);
      setTheme(DarkMode);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={imageSetting}>
        <>
          <Wrapper>
              <Header modeChange={modeChange} flag='1'></Header>
            <MainDiv pl={h_header}>
              <ViewArea />
              <Tools></Tools>
            </MainDiv>
          </Wrapper>
        </>
      </AppContext.Provider>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`

`
const MainDiv = styled.div`
  display: flex;
  height: calc(100vh - 90px);
  /* @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: space-between;
  } */
`

export default VHome;