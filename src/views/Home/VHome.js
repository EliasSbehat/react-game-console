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
import { ABXY_APIED } from "../../assets/images/main_assets/2-ABXY/AbxyImage";
import { DPAD_APIED } from "../../assets/images/main_assets/3-Dpad/DpadImage";
import { ThumbL_APIED } from "../../assets/images/main_assets/4-THUMBSTICK L/ThumbL";
import { ThumbR_APIED } from "../../assets/images/main_assets/5-THUMBSTICK R/ThumbR";
import { StartBtn_APIDED } from "../../assets/images/main_assets/6-START BACK/StartBtn";
import { Touchpad_APIED } from "../../assets/images/main_assets/7-TOUCHPAD/Touchpad";
import { Trim_APIED } from "../../assets/images/main_assets/8-TRIM/Trims";
import { Trigger_APIED } from "../../assets/images/main_assets/9-TRIGGERS/Triggers";
import { Paddle_APIED } from "../../assets/images/main_assets/paddle/Paddle";
import { RearDesign_APIED } from "../../assets/images/main_assets/10-REAR DESIGN/RearDesign";

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
  const [digital_trigger_price, setDigital_trigger_price] = React.useState(0);
  

  // Text
  const [isText, setIsText] = React.useState(false);
  const [textVal, setTextVal] = React.useState('');
  const [familyId, setFamily] = React.useState(0);
  const [textPrice, setTextPrice] = React.useState(0);

  // Logo
  const [isLogo, setLogo] = React.useState(false);
  const [logoPrice, setLogoPrice] = React.useState(0);
  const [images, setImages] = React.useState([]);

  const [initalPrice, setInitalPrice] = React.useState(63.99);
  const [textColor, setTextColor] = React.useState('black');
  const [fontSize, setFontSize] = React.useState(30);

  const [designData, setDesignData] = React.useState(null);
  const [abxyData, setAbxyData] = React.useState(null);
  const [dpadData, setDpadData] = React.useState(null);
  const [thubmLData, setThumbLData] = React.useState(null);
  const [thubmRData, setThumbRData] = React.useState(null);
  const [startBackData, setStateBackData] = React.useState(null);
  const [thuchPadData, setTouchPadData] = React.useState(null);
  const [trimData, setTrimData] = React.useState(null);
  const [triggersData, setTriggersData] = React.useState(null);
  const [razorBackPrice, setRazorBackPrice] = React.useState(null);
  const [paddleData, setPaddleData] = React.useState(null);
  const [dominselectData, setDominselectData] = React.useState(null);
  const [rearDesignData, setRearDesignData] = React.useState(null);
  const [personalizationData, setPersonalizationData] = React.useState(null);

  // TablIndexs
  const [DesigntabSelect, DesignSetTabSelect] = React.useState(0);
  const [AbxytabSelect, AbxySetTabSelect] = React.useState(0);
  const [DpadtabSelect, DpadSetTabSelect] = React.useState(0);
  const [ThumbLtabSelect, ThumbLSetTabSelect] = React.useState(0);
  const [ThumbRtabSelect, ThumbRSetTabSelect] = React.useState(0);
  const [StartBtntabSelect, StartBtnSetTabSelect] = React.useState(0);
  const [TouchpadtabSelect, TouchpadSetTabSelect] = React.useState(0);
  const [TrimtabSelect, TrimSetTabSelect] = React.useState(0);
  const [TriggertabSelect, TriggerSetTabSelect] = React.useState(0);


  const imageSetting = {

    designData,
    abxyData,
    dpadData,
    thubmLData,
    thubmRData,
    startBackData,
    thuchPadData,
    trimData,
    triggersData,
    paddleData,
    setPaddleData,
    dominselectData,
    setDominselectData,
    rearDesignData,
    setRearDesignData,
    personalizationData,

    DesigntabSelect,
    DesignSetTabSelect,
    AbxytabSelect,
    AbxySetTabSelect,
    DpadtabSelect,
    DpadSetTabSelect,
    ThumbLtabSelect,
    ThumbLSetTabSelect,
    ThumbRtabSelect,
    ThumbRSetTabSelect,
    StartBtntabSelect,
    StartBtnSetTabSelect,
    TouchpadtabSelect,
    TouchpadSetTabSelect,
    TrimtabSelect,
    TrimSetTabSelect,
    TriggertabSelect,
    TriggerSetTabSelect,

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
    razorBackPrice,
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
    
    digital_trigger_price,
    
    setDigital_trigger,
    

    // text
    isText,
    setIsText,
    textVal,
    setTextVal,
    textPrice,
    setTextPrice,
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
    logoPrice,
    setLogoPrice,
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
                  price: design_step[design_step_keys[i]].price,
                  is_default: design_step[design_step_keys[i]].extension_attributes['is_default']
                }

                if (temp.is_default) DesignSetTabSelect(i);

                let ltemp = [];
                for (j = 0; j < design_step[design_step_keys[i]].childs.length; j++) {
                  let image = JSON.parse(design_step[design_step_keys[i]].childs[j]['extension_attributes']['images_data'])[0]['value'];
                  ltemp.push({
                    name: design_step[design_step_keys[i]].childs[j].title,
                    price: design_step[design_step_keys[i]].childs[j].price,
                    image: Design_APIED[i][j].image,
                    selet: base_url + image,
                    is_default: design_step[design_step_keys[i]].childs[j]['extension_attributes'].is_default
                  });

                  if (ltemp.is_default) {
                    setDesign([i, j])
                  }
                }
                design.steps.push(temp);
                design.items.push(ltemp);
              }
              // console.log(design);
              setDesignData(design);
            // --------------- Design End ---------------

            // --------------- Abxy ---------------
              let abxy = {};
              let abxy_step = object_data[object_keys[1]].values;
              let abxy_step_keys = Object.keys(abxy_step);
              abxy.steps = [];
              abxy.items = [];
              for (i = 0; i < abxy_step_keys.length; i++) {
                let temp = {
                  name: abxy_step[abxy_step_keys[i]].title,
                  price: abxy_step[abxy_step_keys[i]].price,
                  is_default: abxy_step[abxy_step_keys[i]].extension_attributes['is_default']
                }

                if (temp.is_default) AbxySetTabSelect(i);

                let ltemp = [];
                for (j = 0; j < abxy_step[abxy_step_keys[i]].childs.length; j++) {
                  let image = JSON.parse(abxy_step[abxy_step_keys[i]].childs[j]['extension_attributes']['images_data'])[0]['value'];
                  ltemp.push({
                    name: abxy_step[abxy_step_keys[i]].childs[j].title,
                    price: abxy_step[abxy_step_keys[i]].childs[j].price,
                    image: ABXY_APIED[i][j].image,
                    selet: base_url + image,
                  });
                }
                abxy.steps.push(temp);
                abxy.items.push(ltemp);
              }
              setAbxyData(abxy);
            // --------------- Abxy End ---------------

            // --------------- Dpad ---------------
              let dpad = {};
              let dpad_step = object_data[object_keys[2]].values;
              let dpad_step_keys = Object.keys(dpad_step);
              dpad.steps = [];
              dpad.items = [];
              for (i = 0; i < dpad_step_keys.length; i++) {
                let temp = {
                  name: dpad_step[dpad_step_keys[i]].title,
                  price: dpad_step[dpad_step_keys[i]].price,
                  is_default: dpad_step[dpad_step_keys[i]].extension_attributes['is_default']
                }

                let ltemp = [];
                for (j = 0; j < dpad_step[dpad_step_keys[i]].childs.length; j++) {
                  let image = JSON.parse(dpad_step[dpad_step_keys[i]].childs[j]['extension_attributes']['images_data'])[0]['value'];
                  ltemp.push({
                    name: dpad_step[dpad_step_keys[i]].childs[j].title,
                    price: dpad_step[dpad_step_keys[i]].childs[j].price,
                    image: DPAD_APIED[i][j].image,
                    selet: base_url + image,
                  });
                }
                dpad.steps.push(temp);
                dpad.items.push(ltemp);
              }
              setDpadData(dpad);
            // --------------- Dpad End --------------

            // --------------- ThumbL --------------
              let thumbl = { steps: [''], items: [[]] };
              let thumbl_values = Object.keys(object_data['optId_1528'].values);
              for (i = 0; i < thumbl_values.length; i++) {
                const temp = object_data['optId_1528'].values[thumbl_values[i]];
                thumbl.items[0].push({
                  name: temp.title,
                  price: temp.price,
                  selet: base_url + JSON.parse(temp['extension_attributes']['images_data'])[0].value,
                  image: ThumbL_APIED[i].image
                });
              }
              setThumbLData(thumbl);
            // --------------- ThumbL End ---------------

            // --------------- ThumbL --------------
              let thumbr = { steps: [''], items: [[]] };
              let thumbr_values = Object.keys(object_data['optId_1529'].values);
              for (i = 0; i < thumbr_values.length; i++) {
                const temp = object_data['optId_1529'].values[thumbr_values[i]];
                thumbr.items[0].push({
                  name: temp.title,
                  price: temp.price,
                  selet: base_url + JSON.parse(temp['extension_attributes']['images_data'])[0].value,
                  image: ThumbR_APIED[0][i].image
                });
              }
              setThumbRData(thumbr);
            // --------------- ThumbL End ---------------

            // --------------- Start Back ---------------
              let startback = {};
              let startback_step = object_data['optId_1530'].values;
              let startback_step_keys = Object.keys(startback_step);
              startback.steps = [];
              startback.items = [];
              for (i = 0; i < startback_step_keys.length; i++) {
                let temp = {
                  name: startback_step[startback_step_keys[i]].title,
                  price: startback_step[startback_step_keys[i]].price,
                  is_default: startback_step[startback_step_keys[i]].extension_attributes['is_default']
                }
                if (temp.is_default) StartBtnSetTabSelect(i);


                let ltemp = [];
                for (j = 0; j < startback_step[startback_step_keys[i]].childs.length; j++) {
                  let image = JSON.parse(startback_step[startback_step_keys[i]].childs[j]['extension_attributes']['images_data'])[0]['value'];
                  ltemp.push({
                    name: startback_step[startback_step_keys[i]].childs[j].title,
                    price: startback_step[startback_step_keys[i]].childs[j].price,
                    image: StartBtn_APIDED[i][j].image,
                    selet: base_url + image,
                  });
                }
                startback.steps.push(temp);
                startback.items.push(ltemp);
              }
              setStateBackData(startback);
            // --------------- Start Back End ---------------

            // --------------- Touchpad ---------------
              let touchpad = {};
              let touchpad_step = object_data['optId_1533'].values;
              let touchpad_step_keys = Object.keys(touchpad_step);
              touchpad.steps = [];
              touchpad.items = [];
              for (i = 0; i < touchpad_step_keys.length; i++) {
                let temp = {
                  name: touchpad_step[touchpad_step_keys[i]].title,
                  price: touchpad_step[touchpad_step_keys[i]].price,
                  is_default: touchpad_step[touchpad_step_keys[i]].extension_attributes['is_default']
                }

                if (temp.is_default) TouchpadSetTabSelect(i)

                let ltemp = [];
                for (j = 0; j < touchpad_step[touchpad_step_keys[i]].childs.length; j++) {
                  let image = JSON.parse(touchpad_step[touchpad_step_keys[i]].childs[j]['extension_attributes']['images_data'])[0]['value'];
                  ltemp.push({
                    name: touchpad_step[touchpad_step_keys[i]].childs[j].title,
                    price: touchpad_step[touchpad_step_keys[i]].childs[j].price,
                    image: Touchpad_APIED[i][j].image,
                    selet: base_url + image,
                  });
                }
                touchpad.steps.push(temp);
                touchpad.items.push(ltemp);
              }
              setTouchPadData(touchpad);
          // --------------- Touchpad End ---------------

          // --------------- ThumbL --------------
            let trim = { steps: [''], items: [[]] };
            let trim_values = Object.keys(object_data['optId_1536'].values);
            for (i = 0; i < trim_values.length; i++) {
              const temp = object_data['optId_1536'].values[trim_values[i]];
              trim.items[0].push({
                name: temp.title,
                price: temp.price,
                selet: base_url + JSON.parse(temp['extension_attributes']['images_data'])[0].value,
                image: Trim_APIED[0][i].image,
                image_back: Trim_APIED[0][i].image_back
              });
            }
            setTrimData(trim);
          // --------------- ThumbL End ---------------

          // --------------- triggers ---------------
            let triggers = {};
            let triggers_step = object_data['optId_1537'].values;
            let triggers_step_keys = Object.keys(triggers_step);
            triggers.steps = [];
            triggers.items = [];
            for (i = 0; i < triggers_step_keys.length; i++) {
              let temp = {
                name: triggers_step[triggers_step_keys[i]].title,
                price: triggers_step[triggers_step_keys[i]].price,
                is_default: triggers_step[triggers_step_keys[i]].extension_attributes['is_default']
              }

              if (temp.is_default) TriggerSetTabSelect(i);

              let ltemp = [];
              for (j = 0; j < triggers_step[triggers_step_keys[i]].childs.length; j++) {
                let image = JSON.parse(triggers_step[triggers_step_keys[i]].childs[j]['extension_attributes']['images_data'])[0]['value'];
                ltemp.push({
                  name: triggers_step[triggers_step_keys[i]].childs[j].title,
                  price: triggers_step[triggers_step_keys[i]].childs[j].price,
                  image: Trigger_APIED[i][j].image,
                  image_back: Trigger_APIED[i][j].image_back,
                  selet: base_url + image,
                });
              }
              triggers.steps.push(temp);
              triggers.items.push(ltemp);
            }
            setTriggersData(triggers);
        // --------------- triggers End ---------------
        // --------------- raborback ---------------
          // setRazorbackData
          let razorback = {};
          let razorback_keys = Object.keys(object_data['optId_1540'].values);
          razorback.price = object_data['optId_1540'].values[razorback_keys[0]].price;
          razorback.is_default = object_data['optId_1540'].values[razorback_keys[0]].extension_attributes.is_default;
          setRazorBackPrice(razorback.price);
          setRazorBack(razorback.is_default);
        // --------------- raborback end ---------------

        // --------------- esports ---------------
          let esport = object_data['optId_1541'];
          let esport_keys = Object.keys(esport.values);
          // --------------- Paddle ---------------
            let temp = esport.values[esport_keys[1]];
            let paddles = {};
            paddles.name = temp.title;
            paddles.price = temp.price;
            paddles.is_default = temp.extension_attributes.is_default;
            paddles.items = [[]];
            console.log(temp.childs.length);
            for (i = 0; i < temp.childs.length; i++) {
              paddles.items[0].push(
                {
                  name: temp.childs[i].title,
                  price: temp.childs[i].price,
                  selet: base_url + JSON.parse(temp.childs[i].extension_attributes.images_data)[0].value,
                  image_back: Paddle_APIED[0][i].image_back
                }
              )
            }
            setPaddleData(paddles);
          // --------------- Paddle End ---------------
          // --------------- Domin8or Button ---------------
            temp = esport.values[esport_keys[2]];
            let dominselect = {};
            dominselect.name = temp.title;
            dominselect.price = temp.price;
            dominselect.items = [];
            for (i = 0; i < temp.childs.length / 2; i++) {
              let temp1 = {};
              temp1.name = temp.childs[i].keys;
              temp1.price = temp.childs[i].price;
              temp1.image = base_url + JSON.parse(temp.childs[i].extension_attributes.images_data)[0].value;
              temp1.select = base_url + JSON.parse(temp.childs[i].extension_attributes.images_data)[0].value;
              dominselect.items.push(temp1);
            }
            setDominselectData(dominselect);
          // --------------- Domin8or Button End ---------------
        // --------------- esports end ---------------

        // --------------- RearDesign ---------------
          let rearDesign = { steps: [''], items: [[]] };
          let rearDesign_values = Object.keys(object_data['optId_1545'].values);
          rearDesign.name = object_data['optId_1545'].title;
          for (i = 0; i < rearDesign_values.length; i++) {
            const temp = object_data['optId_1545'].values[rearDesign_values[i]];
            rearDesign.items[0].push({
              name: temp.title,
              price: temp.price,
              selet: base_url + JSON.parse(temp['extension_attributes']['images_data'])[0].value,
              image: RearDesign_APIED[0][i].image,
              image_back: RearDesign_APIED[0][i].image_back
            });
          }
          setRearDesignData(rearDesign);
        // --------------- RearDesign End ---------------

        // --------------- D triggers ---------------
          let dtriggers = {};
          let dtriggers_keys = Object.keys(object_data['optId_1549'].values);
          dtriggers.price = object_data['optId_1549'].values[dtriggers_keys[1]].price;
          dtriggers.is_default = object_data['optId_1549'].values[dtriggers_keys[1]].extension_attributes.is_default;
          setDigital_trigger(dtriggers.is_default);
          setDigital_trigger_price(dtriggers.price);
        // --------------- D triggers End ---------------

        // --------------- Text and Logo ---------------
          const per = object_data['optId_1546'];
          const per_value_keys = Object.keys(object_data['optId_1546'].values);

          let names = [];
          console.log(object_data);
          names.push(per.title);
          names.push({ name: per.values[per_value_keys[0]].title, price: per.values[per_value_keys[0]].price });
          names.push({ name: per.values[per_value_keys[1]].title, price: per.values[per_value_keys[1]].price });
          names.push({ name: per.values[per_value_keys[2]].title, price: per.values[per_value_keys[2]].price });
          setTextPrice(per.values[per_value_keys[1]].price);
          setLogoPrice(per.values[per_value_keys[2]].price)
          if (per.values[per_value_keys[1]].extension_attributes.is_default) setIsText(true);
          if (per.values[per_value_keys[2]].extension_attributes.is_default) setLogo(true);
          setPersonalizationData(names);
        // --------------- Text and Logo End ---------------
          
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