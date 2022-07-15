import React from "react";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { ModelBackImg } from "../../assets/images";
import Header from "../../components/Header/Header";
import Tools from "../../components/Tools/Tools";
import ViewArea from "../../components/ViewArea/ViewArea";
import AppContext from "../../context/context";

import {BsCheckLg} from 'react-icons/bs';
import {TiTimes} from 'react-icons/ti';

import { DarkMode, DayMode } from "../../theme";
import { Design_APIED } from '../../assets/images/main_assets/1-DESIGN/DesignImage';

const VHome = () => {
  const base_url = 'https://m2-dev-controllermodz.aqeltech.com/media/mageworx/optionfeatures/product/option/value';
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
  const [sideflag, setSideflag] = React.useState(true);
  const [snapIndex, setSnapIndex] = React.useState(0);

  const [lrdomin, setLRdomin] = React.useState(false);

  const [ldomin_1, setLdomin1] = React.useState(null);
  const [ldomin_2, setLdomin2] = React.useState(null);
  const [rdomin_1, setRdomin1] = React.useState(null);
  const [rdomin_2, setRdomin2] = React.useState(null);

  const [modal_flag, setModalFlag] = React.useState(false);

  const [aniFlag, setAniFlag] = React.useState(false);
  const [aniImg, setAniImg] = React.useState(null);
  const [hoverImg, setHoverImg] = React.useState(null);

  const [isFinished, setIsFinished] = React.useState(false);

  const [imgStatus, setImgStatus] = React.useState(false);
  const [txtStatus, setTxtStatus] = React.useState(false);

  const [esportsFlag, setEsportsFlag] = React.useState(0);

  const [remap, setRemap] = React.useState(true);

  

  function func_file_select() {
    const temp = document.getElementById('file_selector');
    setModalFlag(false);
    temp.click();
  }  

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
  const [textColor, setTextColor] = React.useState('black');
  const [fontSize, setFontSize] = React.useState(30);

  // const [DesignData, setDesignData] = React.useState([]);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
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
    razorBackPrice: 9.99,
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
    setTextVal,
    textPrice: 10.99,
    familyId,
    setFamily,
    textColor, 
    setTextColor,
    fontSize,
    setFontSize,
    modal_flag,
    setModalFlag,

    // Logo
    isLogo,
    setLogo,
    images,
    setImages,

    func_reset,

    sideflag, 
    setSideflag,
    snapIndex,
    setSnapIndex,

    initalPrice,
    setInitalPrice,

    aniFlag,
    setAniFlag,
    aniImg,
    setAniImg,

    hoverImg,
    setHoverImg,

    isFinished,
    setIsFinished,

    imgStatus,
    setImgStatus,
    txtStatus,
    setTxtStatus,

    lrdomin,
    setLRdomin,

    esportsFlag, 
    setEsportsFlag,

    remap,
    setRemap,

    fontFamiles: [
      { name: 'motion picture', family: 'motion-picture' },
      { name: 'pristina', family: 'pristina' },
      { name: 'delicia', family: 'delicia' },
      { name: 'luna', family: 'luna-medium' },
      { name: 'FORTNITE', family: 'fortnite' },
      { name: 'BAZOOKA', family: 'bazooka' }
    ]
  }
  React.useEffect(() => {
    if (!apiFlag)
      (async () => {
        const response = await fetch('https://game-server-deploy.herokuapp.com/test', { method: 'GET' });
        if (response.ok) {
          // ---------------------- Response is Okay ----------------------
          let json = await response.json();
          let object_data = {};
          let childs = {};
          
          for (var i = 0; i <json.length; i++) {
            if (json[i].values != undefined) {              
              if (json[i].values[0]['extension_attributes'].dependency == undefined) {
                object_data['optId_'+json[i].option_id] = {};
                object_data['optId_'+json[i].option_id]['option_id'] = json[i].option_id;
                object_data['optId_'+json[i].option_id]['title'] = json[i].title;
                object_data['optId_'+json[i].option_id]['dependType'] = json[i].extension_attributes.dependency_type;
                object_data['optId_'+json[i].option_id]['disabled'] = json[i].extension_attributes.disabled;
                object_data['optId_'+json[i].option_id]['option_title_id'] = json[i].extension_attributes.option_title_id;
                object_data['optId_'+json[i].option_id]['values'] = {};
                object_data['optId_'+json[i].option_id]['values'] = new Object();
                // object_data['optId_'+json[i].option_id]['childs'] = {};
                for (var j = 0; j < json[i].values.length; j++) {
                  object_data['optId_'+json[i].option_id]['values']["optTypeId_" + json[i].values[j].option_type_id] = json[i].values[j];
                  // object_data['optId_'+json[i].option_id]['childs']["optTypeId_" + json[i].values[j].option_type_id] = {};
                }
              } else {
                // Childs
                  for (var j = 0; j < json[i].values.length; j++) {
                    childs['optId_'+json[i].values[j].option_type_id] = json[i].values[j];
                  }
                // Childs End
              }
            } else {
              object_data['optId_'+json[i].option_id] = {};
              object_data['optId_'+json[i].option_id]['option_id'] = json[i].option_id;
              object_data['optId_'+json[i].option_id]['title'] = json[i].title;
              object_data['optId_'+json[i].option_id]['dependType'] = json[i].extension_attributes.dependency_type;
              object_data['optId_'+json[i].option_id]['disabled'] = json[i].extension_attributes.disabled;
              object_data['optId_'+json[i].option_id]['option_title_id'] = json[i].extension_attributes.option_title_id;
              object_data['optId_'+json[i].option_id]['values'] = {};
            }
          }
          const childKeys = Object.keys(childs);
          for (var i = 0; i < childKeys.length; i++) {
            const link = JSON.parse(childs[childKeys[i]]['extension_attributes'].dependency)[0];
            if (object_data['optId_' + link[0]].values['optTypeId_' + link[1]]['childs'] != undefined) {
              object_data['optId_' + link[0]].values['optTypeId_' + link[1]]['childs'].push(childs[childKeys[i]]);
            } else {
              object_data['optId_' + link[0]].values['optTypeId_' + link[1]]['childs'] = [];
              object_data['optId_' + link[0]].values['optTypeId_' + link[1]]['childs'].push(childs[childKeys[i]]);
            }
          }
          // console.log(object_data);
          const object_keys = Object.keys(object_data);
            // --------------- Design ---------------
              let design = {};
              let design_step = object_data[object_keys[0]].values;
              let design_step_keys = Object.keys(design_step);
              design.steps = [];
              design.items = [];
              for (i = 0; i < design_step_keys.length; i++) {
                let temp = {
                  name: design_step[design_step_keys[i]].title,
                  price: design_step[design_step_keys[i]].price
                }
                let ltemp = [];
                for (j = 0; j < design_step[design_step_keys[i]].childs.length; j++) {
                  let image = JSON.parse(design_step[design_step_keys[i]].childs[j]['extension_attributes']['images_data'])[0]['value'];
                  ltemp.push({
                    name: design_step[design_step_keys[i]].childs[j].title,
                    price: design_step[design_step_keys[i]].childs[j].price,
                    image: base_url + image,
                    selet: Design_APIED[i][j],
                  });
                }
                design.steps.push(temp);
                design.items.push(ltemp);
              }
              // setDesignData(design);
            // --------------- Design End ---------------
          // ---------------------- Response is Okay End ----------------------
        } else {
          // console.log("HTTP-Error: " + response.status);
        }
      })();
  }, []);

  // Check height of components
  const [h_header, getHeader] = React.useState(0);
  const [apiFlag, setApiFlag] = React.useState(false);
  

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
            <Modal flag={modal_flag}>
              <div>
                <h1>
                  Tips for uploading an image for controller logo
                </h1>
                <MoConItem>
                  <h1><BsCheckLg></BsCheckLg>File size</h1>
                  <p>
                    File size must be smaller than 2MB
                  </p>
                </MoConItem>
                <MoConItem>
                  <h1><BsCheckLg></BsCheckLg>File type</h1>
                  <p>
                    Only available Jpeg, Png, SVG
                  </p>
                </MoConItem>
                <MoOkay onClick={func_file_select}>
                  Okay
                </MoOkay>
                <HideModal onClick={() => setModalFlag(false)}>
                  <TiTimes></TiTimes>
                </HideModal>
              </div>
            </Modal>
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
  height: calc(100vh - 81px);
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 124px);
  }
  position: relative;
`

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: ${props => props.flag ? 'flex':'none'};
  justify-content: center;
  align-items: center;
  color: black;;
  background-color: rgba(0, 0, 0, 0.3);
  & > div:nth-child(1) {
    box-shadow: 2px 2px 2px 2px #aaa;
    border-radius: 20px;
    position: relative;
    font-family: 'Rajdhani-Regular';
    background-color: rgba(240,248,248,0.8);
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(20px); 
    max-width: 40vw;
    padding: 20px;
    h1 {
      margin-top: 30px;
    }
  }
`

const MoConItem = styled.div`
  
  h1 {
    font-size: 25px;
    svg {
      width: 30px;
      height: 20px;
      margin-top: 5px;
      fill: #00ce71;
    }
  }
  p {
    font-size: 20px;
  }
`

const HideModal = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
  transition: all .1s;
  &:hover {
    transform: scale(1.1);
  }
`

const MoOkay = styled.div`
  font-family: 'Rajdhani-Bold';
  font-size: 20px;
  margin: 20px 0 0 40px;
  cursor: pointer;
`

export default VHome;