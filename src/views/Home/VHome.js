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
  const [razorBack, setRazorBack] = React.useState(false);
  const [pad_esp_flag, setPad_esp_flag] = React.useState(true);
  const [paddle, setPaddle] = React.useState(null);

  const [ldomin_1, setLdomin1] = React.useState(null);
  const [ldomin_2, setLdomin2] = React.useState(null);
  const [rdomin_1, setRdomin1] = React.useState(null);
  const [rdomin_2, setRdomin2] = React.useState(null);

  const func_reset = (ind) => {
    if (ind === 0) {
      // Design
      setDesign(null);
    }
    else if (ind === 1) {
      // Abxy
      setAbxy(null);
    }
    else if (ind === 2) {
      // Dpad
      setDpad(null);
    }
    else if (ind === 3) {
      // thumbstickL
      setThumbstickL(null);
    }
    else if (ind === 4) {
      // thumbstickR
      setThumbstickR(null);
    }
    else if (ind === 5) {
      // start btn
      setStartBtn(null);
    }
    else if (ind === 6) {
      // touchpad
      setTouchpad(null);
    }
    else if (ind === 7) {
      // trim
      setTrim(null);
    }
    else if (ind === 8) {
      setTrigger(null)
    }
    else if (ind === 9) {
      setRearDesign(null)
    }
    else if (ind === 10) {
      setRazorBack(false)
    }
    else if (ind === 11) {
      setPaddle(null)
    }
    else if (ind === 12) {
      setLdomin1(null);
      setLdomin2(null);
    }
    else if (ind === 13) {
      setRdomin1(null);
      setRdomin2(null);
    }
    else if (ind === 14) {
      setDigital_trigger(false);
    }
    else if (ind === 15) {
      setIsText(false);
      setTextVal('');
      setFamily(0);
    } else  {
      setLogo(false);
      setImages([]);
    }
  }

  const [digital_trigger, setDigital_trigger] = React.useState(false);

  // Text
  const [isText, setIsText] = React.useState(false);
  const [textVal, setTextVal] = React.useState('');
  const [familyId, setFamily] = React.useState(0);

  // Logo
  const [isLogo, setLogo] = React.useState(false);
  const [images, setImages] = React.useState([]);

  const [initalPrice, setInitalPrice] = React.useState(63.99);

  const imageSetting = {
    design,
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
    setRearDesign,
    razorBack,
    razorBackPrice: 29.99,
    setRazorBack,
    pad_esp_flag,
    setPad_esp_flag,
    paddle,
    setPaddle,

    ldomin_1,
    setLdomin1,
    ldomin_2,
    setLdomin2,
    rdomin_1,
    setRdomin1,
    rdomin_2,
    setRdomin2,

    digital_trigger,
    digital_trigger_price: 30.99,
    setDigital_trigger,

    // text
    isText,
    setIsText,
    textVal,
    textPrice: 10.99,
    setTextVal,
    familyId,
    setFamily,

    // Logo
    isLogo,
    setLogo,
    images,
    setImages,

    func_reset,

    initalPrice,
    setInitalPrice,
    spanNames : [ 
      { name: 'Design' },
      { name: 'Abxy' },
      { name: 'Dpad' },
      { name: 'Thumbstick L' },
      { name: 'Thumbstick R' },
      { name: 'Start Back' },
      { name: 'Touchpad' },
      { name: 'Trim' },
      { name: 'triggers' },
      { name: 'Rear Design', },
      { name: 'Razorback Maxfire', },
      { name: 'Paddles', },
      { name: 'Left Domin8or Button' },
      { name: 'Right Domin8or Button' },
      { name: 'Digital Triggers' },
      { name: 'Text' },
      { name: 'Logo' }
    ],
    fontFamiles: [
      { name: 'motion picture', family: 'motion-picture' },
      { name: 'pristina', family: 'pristina' },
      { name: 'delicia', family: 'delicia' },
      { name: 'luna', family: 'luna-medium' },
      { name: 'FORTNITE', family: 'fortnite' },
      { name: 'BAZOOKA', family: 'bazooka' }
    ]
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