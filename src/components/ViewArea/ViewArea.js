import React, { useEffect } from "react";
import styled, {css} from "styled-components";
import html2canvas from 'html2canvas';
import downloadjs from "downloadjs";
import Moveable from "react-moveable";
import { Assets } from "../../theme/index";
import AppContext from "../../context/context";
import { Design } from "../../assets/images/main_assets/1-DESIGN/DesignImage";
import { Abxy } from "../../assets/images/main_assets/2-ABXY/AbxyImage";
import { Dpad } from "../../assets/images/main_assets/3-Dpad/DpadImage";
import { ThumbL } from "../../assets/images/main_assets/4-THUMBSTICK L/ThumbL";
import { ThumbR } from "../../assets/images/main_assets/5-THUMBSTICK R/ThumbR";
import { StartBtn } from "../../assets/images/main_assets/6-START BACK/StartBtn";
import { Touchpad } from "../../assets/images/main_assets/7-TOUCHPAD/Touchpad";
import { Trim } from "../../assets/images/main_assets/8-TRIM/Trims";
import { Trigger } from "../../assets/images/main_assets/9-TRIGGERS/Triggers";
import { RearDesign } from "../../assets/images/main_assets/10-REAR DESIGN/RearDesign";
import { Paddle } from "../../assets/images/main_assets/paddle/Paddle";
import { DominL, DominSelection } from "../../assets/images/main_assets/L Domin8or Button/DominL";
import { DominR } from "../../assets/images/main_assets/R Domin8or Button/DominR";
import ImageMove from "../ImageMove/ImageMove";
import TextMove from "../TextMove/TextMove";
import download from "downloadjs";

const ViewArea = () => {
  
  const myContext = React.useContext(AppContext);

  const [isover_text, setOver_text] = React.useState(1);

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.getElementById('viewer'));
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
    // if (myContext.sideflag) {
    // } else {
    //   const canvas = await html2canvas(document.getElementById('backend'));
    //   const dataURL = canvas.toDataURL('image/png');
    //   downloadjs(dataURL, 'download.png', 'image/png');
    // }
  };

  React.useEffect(() => {
    console.log('is it right?')
  }, [myContext.AniImg]);

  
    return (
      <Wrapper isover_text={isover_text} id="total">
        {/* <ImageMove></ImageMove>
        <TextMove></TextMove> */}
        <LocalHeader flag={myContext.sideflag}>
          <div>
            <span>
              Play Station 5 Controller
            </span>
          </div>
          <div>
            <div>
              <span onClick={() => myContext.setSideflag(true)}> Front </span>
              <span onClick={() => myContext.setSideflag(false)}> Back </span>
              <span onClick={() => myContext.setSideflag(!myContext.sideflag)}>
                <img></img>
              </span>
            </div>
          </div>
        </LocalHeader>
        <Viewer flag={myContext.sideflag} width1="60%" width2="20%" top1="10%" top2="60%">
          <div>
            <div id="viewer">
            
              <div id="frontend">

                <div>
                  <div>
                    <div>
                    </div>
                  </div>

                  <img src={Assets.ModelImg}></img>
                  {/* 
                    ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
                    ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
                    ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
                    ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
                    ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
                    ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
                  */}
                  {
                    myContext.design !== null ? (() => {
                      return (
                        Design.items[myContext.design[0]][myContext.design[1]].image ? <img src={Design.items[myContext.design[0]][myContext.design[1]].image}></img> : <div className="lds-dual-ring"></div>
                      )
                    })() : (() => {

                    })()
                  }


                  {/*
                      █████╗ ██████╗ ██╗  ██╗██╗   ██╗
                      ██╔══██╗██╔══██╗╚██╗██╔╝╚██╗ ██╔╝
                      ███████║██████╔╝ ╚███╔╝  ╚████╔╝ 
                      ██╔══██║██╔══██╗ ██╔██╗   ╚██╔╝  
                      ██║  ██║██████╔╝██╔╝ ██╗   ██║   
                      ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   
                  */}
                  {
                    myContext.abxy !== null ? (() => {
                      return (
                        Abxy.items[myContext.abxy[0]][myContext.abxy[1]].image ? <img src={Abxy.items[myContext.abxy[0]][myContext.abxy[1]].image}></img> : <div className="lds-dual-ring"></div>
                      )
                    })() : (() => {
                    })()
                  }
                  {/*
                      ██████╗ ██████╗  █████╗ ██████╗ 
                      ██╔══██╗██╔══██╗██╔══██╗██╔══██╗
                      ██║  ██║██████╔╝███████║██║  ██║
                      ██║  ██║██╔═══╝ ██╔══██║██║  ██║
                      ██████╔╝██║     ██║  ██║██████╔╝
                      ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═════╝ 
                  */}
                  {
                    myContext.dpad !== null ? (() => {
                      return (
                        Dpad.items[myContext.dpad[0]][myContext.dpad[1]].image ? <img src={Dpad.items[myContext.dpad[0]][myContext.dpad[1]].image}></img> : <div className="lds-dual-ring"></div>
                      )
                    })() : (() => {
                    })()
                  }
                  {/**
                   * ████████╗██╗  ██╗██╗   ██╗███╗   ███╗██████╗     ██╗     
                     ╚══██╔══╝██║  ██║██║   ██║████╗ ████║██╔══██╗    ██║     
                        ██║   ███████║██║   ██║██╔████╔██║██████╔╝    ██║     
                        ██║   ██╔══██║██║   ██║██║╚██╔╝██║██╔══██╗    ██║     
                        ██║   ██║  ██║╚██████╔╝██║ ╚═╝ ██║██████╔╝    ███████╗
                        ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝     ╚══════╝
                  */}
                  {
                      myContext.thumbstickL !== null ? (() => {
                        return (
                          ThumbL.items[myContext.thumbstickL[0]][myContext.thumbstickL[1]].image ? <img src={ThumbL.items[myContext.thumbstickL[0]][myContext.thumbstickL[1]].image}></img> : <div className="lds-dual-ring"></div>
                        )
                      })() : (() => {})()
                    }

                    {/**
                     * ████████╗██╗  ██╗██╗   ██╗███╗   ███╗██████╗     ██████╗ 
                       ╚══██╔══╝██║  ██║██║   ██║████╗ ████║██╔══██╗    ██╔══██╗
                          ██║   ███████║██║   ██║██╔████╔██║██████╔╝    ██████╔╝
                          ██║   ██╔══██║██║   ██║██║╚██╔╝██║██╔══██╗    ██╔══██╗
                          ██║   ██║  ██║╚██████╔╝██║ ╚═╝ ██║██████╔╝    ██║  ██║
                          ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝     ╚═╝  ╚═╝
                    */}
                    {
                      myContext.thumbstickR !== null ? (() => {
                        return (
                          ThumbR.items[myContext.thumbstickR[0]][myContext.thumbstickR[1]].image ? <img src={ThumbR.items[myContext.thumbstickR[0]][myContext.thumbstickR[1]].image}></img> : <div className="lds-dual-ring"></div>
                        )
                      })() : (() => {})()
                    }

                    {/**
                     *  ███████╗████████╗ █████╗ ██████╗ ████████╗    ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗
                        ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝    ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║
                        ███████╗   ██║   ███████║██████╔╝   ██║       ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║
                        ╚════██║   ██║   ██╔══██║██╔══██╗   ██║       ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║
                        ███████║   ██║   ██║  ██║██║  ██║   ██║       ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║
                        ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝
                    */}
                    {
                        myContext.startBtn !== null ? (() => {
                          return (
                            StartBtn.items[myContext.startBtn[0]][myContext.startBtn[1]].image ? <img src={StartBtn.items[myContext.startBtn[0]][myContext.startBtn[1]].image}></img> : <div className="lds-dual-ring"></div>
                          )
                        })() : (() => {})()
                      }

                      {
                        /**
                         * ████████╗ ██████╗ ██╗   ██╗ ██████╗██╗  ██╗██████╗  █████╗ ██████╗ 
                           ╚══██╔══╝██╔═══██╗██║   ██║██╔════╝██║  ██║██╔══██╗██╔══██╗██╔══██╗
                              ██║   ██║   ██║██║   ██║██║     ███████║██████╔╝███████║██║  ██║
                              ██║   ██║   ██║██║   ██║██║     ██╔══██║██╔═══╝ ██╔══██║██║  ██║
                              ██║   ╚██████╔╝╚██████╔╝╚██████╗██║  ██║██║     ██║  ██║██████╔╝
                              ╚═╝    ╚═════╝  ╚═════╝  ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝╚═════╝ 
                        */
                      }
                      {
                        myContext.touchpad !== null ? (() => {
                          return (
                            Touchpad.items[myContext.touchpad[0]][myContext.touchpad[1]].image ? <img src={Touchpad.items[myContext.touchpad[0]][myContext.touchpad[1]].image}></img> : <div className="lds-dual-ring"></div>
                          )
                        })() : (() => {})()
                      }
                      {/**
                       *████████╗██████╗ ██╗███╗   ███╗
                        ╚══██╔══╝██╔══██╗██║████╗ ████║
                            ██║   ██████╔╝██║██╔████╔██║
                            ██║   ██╔══██╗██║██║╚██╔╝██║
                            ██║   ██║  ██║██║██║ ╚═╝ ██║
                            ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝
                      */}
                      {
                        myContext.trim !== null ? (() => {
                          return (
                            Trim.items[myContext.trim[0]][myContext.trim[1]].image ? <img src={Trim.items[myContext.trim[0]][myContext.trim[1]].image}></img> : <div className="lds-dual-ring"></div>
                          )
                        })() : (() => {})()
                      }
                      {/**
                       * ████████╗██████╗ ██╗ ██████╗  ██████╗ ███████╗██████╗ 
                         ╚══██╔══╝██╔══██╗██║██╔════╝ ██╔════╝ ██╔════╝██╔══██╗
                            ██║   ██████╔╝██║██║  ███╗██║  ███╗█████╗  ██████╔╝
                            ██║   ██╔══██╗██║██║   ██║██║   ██║██╔══╝  ██╔══██╗
                            ██║   ██║  ██║██║╚██████╔╝╚██████╔╝███████╗██║  ██║
                            ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝
                      */}
                      {
                        myContext.trigger !== null ? (() => {
                          return (
                            Trigger.items[myContext.trigger[0]][myContext.trigger[1]].image ? <img src={Trigger.items[myContext.trigger[0]][myContext.trigger[1]].image}></img> : <div className="lds-dual-ring"></div>
                          )
                        })() : (() => {})()
                      }
                      {/**
                       *  ██████╗ ███████╗ █████╗ ██████╗     ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
                          ██╔══██╗██╔════╝██╔══██╗██╔══██╗    ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
                          ██████╔╝█████╗  ███████║██████╔╝    ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
                          ██╔══██╗██╔══╝  ██╔══██║██╔══██╗    ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
                          ██║  ██║███████╗██║  ██║██║  ██║    ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
                          ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
                      */}
                      {
                        myContext.rearDesign !== null ? (() => {
                          return (
                            RearDesign.items[myContext.rearDesign[0]][myContext.rearDesign[1]].image ? <img src={RearDesign.items[myContext.rearDesign[0]][myContext.rearDesign[1]].image}></img> : <div className="lds-dual-ring"></div>
                          )
                        })() : (() => {})()
                      }
                      <AniImg i={Design.items[0][0].image} f={myContext.aniFlag}></AniImg>
                </div>
                  <ImageMove></ImageMove>
                  <TextMove></TextMove>
                
              </div>
              <div id="backend">
                <div>
                  <img src={Assets.ModelBackImg}></img>
                  {
                    myContext.touchpad !== null ? (() => {
                      return (
                        Touchpad.items[myContext.touchpad[0]][myContext.touchpad[1]].image ? <img src={Touchpad.items[myContext.touchpad[0]][myContext.touchpad[1]].image_back}></img> : <div className="lds-dual-ring"></div>
                      )
                    })() : (() => {})()
                  }
                  {/**
                   *████████╗██████╗ ██╗███╗   ███╗
                    ╚══██╔══╝██╔══██╗██║████╗ ████║
                        ██║   ██████╔╝██║██╔████╔██║
                        ██║   ██╔══██╗██║██║╚██╔╝██║
                        ██║   ██║  ██║██║██║ ╚═╝ ██║
                        ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝
                  */}
                  {
                    myContext.trim !== null ? (() => {
                      return (
                        Trim.items[myContext.trim[0]][myContext.trim[1]].image ? <img src={Trim.items[myContext.trim[0]][myContext.trim[1]].image_back}></img> : <div className="lds-dual-ring"></div>
                      )
                    })() : (() => {})()
                  }
                  {/**
                   * ████████╗██████╗ ██╗ ██████╗  ██████╗ ███████╗██████╗ 
                     ╚══██╔══╝██╔══██╗██║██╔════╝ ██╔════╝ ██╔════╝██╔══██╗
                        ██║   ██████╔╝██║██║  ███╗██║  ███╗█████╗  ██████╔╝
                        ██║   ██╔══██╗██║██║   ██║██║   ██║██╔══╝  ██╔══██╗
                        ██║   ██║  ██║██║╚██████╔╝╚██████╔╝███████╗██║  ██║
                        ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝
                  */}
                  {
                    myContext.trigger !== null ? (() => {
                      return (
                        Trigger.items[myContext.trigger[0]][myContext.trigger[1]].image_back ? <img src={Trigger.items[myContext.trigger[0]][myContext.trigger[1]].image_back}></img> : <div className="lds-dual-ring"></div>
                      )
                    })() : (() => {})()
                  }
                  {/**
                   * ██████╗ ███████╗ █████╗ ██████╗     ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
                     ██╔══██╗██╔════╝██╔══██╗██╔══██╗    ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
                      ██████╔╝█████╗  ███████║██████╔╝    ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
                      ██╔══██╗██╔══╝  ██╔══██║██╔══██╗    ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
                      ██║  ██║███████╗██║  ██║██║  ██║    ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
                      ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
                  */}
                  {
                    myContext.rearDesign !== null ? (() => {
                      return (
                        RearDesign.items[myContext.rearDesign[0]][myContext.rearDesign[1]].image ? <img src={RearDesign.items[myContext.rearDesign[0]][myContext.rearDesign[1]].image_back}></img> : <div className="lds-dual-ring"></div>
                      )
                    })() : (() => {})()
                  }
                  {/**
                   * ██████╗  █████╗ ██████╗ ██████╗ ██╗     ███████╗
                     ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║     ██╔════╝
                      ██████╔╝███████║██║  ██║██║  ██║██║     █████╗  
                      ██╔═══╝ ██╔══██║██║  ██║██║  ██║██║     ██╔══╝  
                      ██║     ██║  ██║██████╔╝██████╔╝███████╗███████╗
                      ╚═╝     ╚═╝  ╚═╝╚═════╝ ╚═════╝ ╚══════╝╚══════╝
                  */}
                  {
                    myContext.paddle !== null && myContext.pad_esp_flag ? (() => {
                      return (
                        Paddle.items[myContext.paddle[0]][myContext.paddle[1]].image_back ? <img src={Paddle.items[myContext.paddle[0]][myContext.paddle[1]].image_back}></img> : <div className="lds-dual-ring"></div>
                      )
                    })() : (() => {})()
                  }
                  {/**
                    * ██████╗  ██████╗ ███╗   ███╗██╗███╗   ██╗    ██╗     
                      ██╔══██╗██╔═══██╗████╗ ████║██║████╗  ██║    ██║     
                      ██║  ██║██║   ██║██╔████╔██║██║██╔██╗ ██║    ██║     
                      ██║  ██║██║   ██║██║╚██╔╝██║██║██║╚██╗██║    ██║     
                      ██████╔╝╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║    ███████╗
                      ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝    ╚══════╝
                    */}
                    {
                      myContext.ldomin_1 !== null && myContext.ldomin_2 !== null && !myContext.pad_esp_flag ? (() => {
                        return (
                          DominL.items[myContext.ldomin_2].image_back ? <img src={DominL.items[myContext.ldomin_2].image_back}></img> : <div className="lds-dual-ring"></div>
                        )
                      })() : (() => {})()
                    }
                    {/**
                     * ██████╗  ██████╗ ███╗   ███╗██╗███╗   ██╗    ██████╗ 
                       ██╔══██╗██╔═══██╗████╗ ████║██║████╗  ██║    ██╔══██╗
                        ██║  ██║██║   ██║██╔████╔██║██║██╔██╗ ██║    ██████╔╝
                        ██║  ██║██║   ██║██║╚██╔╝██║██║██║╚██╗██║    ██╔══██╗
                        ██████╔╝╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║    ██║  ██║
                        ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝
                    */}
                    {
                      myContext.rdomin_1 !== null && myContext.rdomin_2 !== null && !myContext.pad_esp_flag ? (() => {
                        return (
                          DominR.items[myContext.rdomin_2].image_back ? <img src={DominR.items[myContext.rdomin_2].image_back}></img> : <div className="lds-dual-ring"></div>
                        )
                      })() : (() => {})()
                    }
                </div>
              </div>
            </div>
          </div>
          
        </Viewer>
        <LocalFooter>
          <div id="info_div">
            <TotalPrice>
              <span>
                Total
              </span>
              <span>
                £{
                  Math.round((myContext.initalPrice +
                    Number(myContext.design !== null ? Design.items[myContext.design[0]][myContext.design[1]].price : 0) +
                    Number(myContext.abxy !== null ? Abxy.items[myContext.abxy[0]][myContext.abxy[1]].price : 0) +
                    Number(myContext.dpad !== null ? Dpad.items[myContext.dpad[0]][myContext.dpad[1]].price : 0) + 
                    Number(myContext.thumbstickL !== null ? ThumbL.items[myContext.thumbstickL[0]][myContext.thumbstickL[1]].price : 0) +
                    Number(myContext.thumbstickR !== null ? ThumbR.items[myContext.thumbstickR[0]][myContext.thumbstickR[1]].price : 0) + 
                    Number(myContext.startBtn !== null ? StartBtn.items[myContext.startBtn[0]][myContext.startBtn[1]].price : 0) + 
                    Number(myContext.touchpad !== null ? Touchpad.items[myContext.touchpad[0]][myContext.touchpad[1]].price : 0) + 
                    Number(myContext.trim !== null ? Trim.items[myContext.trim[0]][myContext.trim[1]].price : 0) + 
                    Number(myContext.trigger !== null ? Trigger.items[myContext.trigger[0]][myContext.trigger[1]].price : 0) + 
                    Number(myContext.rearDesign !== null ? RearDesign.items[myContext.rearDesign[0]][myContext.rearDesign[1]].price : 0) + 
                    Number(myContext.razorBack ? myContext.razorBackPrice : 0) + 
                    Number(myContext.paddle !== null && myContext.pad_esp_flag ? Paddle.items[myContext.paddle[0]][myContext.paddle[1]].price : 0) + 
                    Number(myContext.ldomin_2 !== null && !myContext.pad_esp_flag ? Number(DominL.items[myContext.ldomin_2].price) + Number(DominSelection.items[myContext.ldomin_1].price) : 0) + 
                    Number(myContext.rdomin_2 !== null && !myContext.pad_esp_flag ? Number(DominR.items[myContext.rdomin_2].price) + Number(DominSelection.items[myContext.rdomin_1].price) : 0) + 
                    Number(myContext.digital_trigger ? myContext.digital_trigger_price : 0)
                  ) * 100
                  ) / 100
                }
              </span>
            </TotalPrice>
            <Info>
              <div>
                <span> Estimated Delivery Date </span>
                <EDD>
                  04/04/2022
                </EDD>
              </div>
              <ATC onClick={() => handleCaptureClick()}>
                <img></img>
                Add to Cart
              </ATC>
            </Info>
          </div>
        </LocalFooter>
      </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.bgColor};
  /* background-color: white; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .moveable-control {
    display: ${props => props.isover_text ? 'black' : 'none'}
  }

  @media screen and (max-width: 800px) {
    height: 60%;
  }
  /* .moveable-line {
    display: none !important;
  } */
`

const Loading = styled.div`
  position: relative;
  top: 40%;
  z-index: 2;
  display: none;
`

const LocalHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  & > div:nth-child(1) {
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    span {
      font-size: 30px;
      font-family: 'Rajdhani-Regular';
      color: ${props => props.theme.color};
    }
    img {
      background-color: ${props => props.theme.HeadIconBgColor};
      padding: 10px;
      content: url(${props => props.theme.FlagIcon});
      border-radius: 15px;
      border: ${props => props.theme.DirectIconBorder};
    }
  }
  & > div:nth-child(2) {
    position: absolute;
    right: 20px;
    & > div:nth-child(1) {
      position: relative;
      font-size: 15px;
      font-family: 'Rajdhani-Medium';
      span {
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
      }
      & > span:nth-child(1) {
        color: ${props => props.flag ? props.theme.SwapFrontColor : props.theme.SwapBackColor};
        background-color: ${props => props.flag ? props.theme.SwapFrontBgColor : props.theme.SwapBackBgColor};
        padding-right: 30px;
        border: ${props => props.theme.SwapBorder};
      }
      & > span:nth-child(2) {
        color: ${props => !props.flag ? props.theme.SwapFrontColor : props.theme.SwapBackColor};
        background-color: ${props => !props.flag ? props.theme.SwapFrontBgColor : props.theme.SwapBackBgColor};
        border: ${props => props.theme.SwapBorder};
      }
  
      & > span:nth-child(3) {
        position: absolute;
        top: -10px;
        left: 35%;
        padding: 10px;
        background-color: ${props => props.theme.ThemeColor};
        img {
          content: url(${props => props.theme.SwapIcon});
        }
        /* box-shadow: 2px 2px 2px 2px #ccc; */
      }
    }
  }
`

const Viewer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  & > div:nth-child(1) {
    width: 100%;
    height: 100%;
    display: flex;
    transform: scale(1.4);
    justify-content: center;
    #viewer {
      position: relative;
      width: 100%;
      height: 100%;
      
      & > div:nth-child(1) {
        // Frontend side
        position: absolute;
        transition: all 1s;
        width: ${props => props.flag ? props.width1 : props.width2};
        left: ${props => props.flag ? `calc((100% - ${props.width1}) / 2)` : `calc((100% - ${props.width2}) / 2)`};
        top: ${props => props.flag ? props.top1 : props.top2};
        /* 
        height: ${props => props.flag ? '90%' : '30%'}; */

        & > div:nth-child(1) {
          min-width: 100%;
          min-height: 100%;
          position: relative;
          width: auto;
          background-color: red;
          & > div:nth-child(1) {
            width: 100%;
            height: 100%;
            position: absolute;
            & > div:nth-child(1) {
              width: 100%;
              height: 100%;
              position: relative;
              z-index: 100;
            }
          }
          img {
            position: absolute;
            width: 100%;
            /* transition: all 1s; */
          }
        }
      }
      & > div:nth-child(2) {
        // Backend side
        position: absolute;
        transition: all 1s;
        width: ${props => !props.flag ? props.width1 : props.width2};
        left: ${props => !props.flag ? `calc((100% - ${props.width1}) / 2)` : `calc((100% - ${props.width2}) / 2)`};
        top: ${props => !props.flag ? props.top1 : props.top2};
        & > div:nth-child(1) {
          width: 100%;
          height: 100%;
          position: relative;
          img {
            position: absolute;
            transition: all 1s;
            width: 100%;
          }
        }
      }
    }
  }
`

const LocalFooter = styled.div`
  width: 100%;
  @media screen and (max-width: 800px){
    display: none;
  }
  #info_div {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    background-color: white;
    margin-bottom: 10px;
    @media screen and (max-width:800px) {
      border-radius: 0;
      padding: 0;
    }
  }
`

const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  & span:nth-child(1) {
    font-size: 15px;
    font-family: 'Rajdhani-Light';
  }
  & span:nth-child(2) {
    font-size: 25px;
    font-family: 'Rajdhani-Medium';
  }
`

const Info = styled.div`
  text-align: right;
  display: flex;
  gap: 10px;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    & > span:nth-child(1) {
      font-size: 15px;
      font-family: 'Rajdhani-Light';
    }
  }
`

const EDD = styled.span`
  font-size: 17px;
  font-family: 'Rajdhani-Light';
`

const ATC = styled.button`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  color: white;
  border: 0;
  border-radius: 20px;
  background-color: ${props => props.theme.ThemeColor};
  img {
    content: url(${props => props.theme.AtcIcon});
  }
  @media screen and (max-width: 800px) {
    
  }
`

const LogoDiv = styled.div`
  padding: 20px;
  z-index: 50;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AniTemp = styled.div`
  
`

const AniImg = styled.img`
  content: url(${props => props.i});
  animation-name: example;
  animation-duration: 1s;
  animation-direction: reverse;
  opacity: 0;
  
  /* @keyframes example {
    0%   {opacity: 0;}
    25%  {opacity: 1;}
    50%  {opacity: 0;}
    75%  {opacity: 1;}
    100% {display: none;}
  } */
  ${(props) => {
    switch (props.f) {
      case true:
        return css`
          @keyframes example {
            0%   {opacity: 0;}
            25%  {opacity: 1;}
            50%  {opacity: 0;}
            75%  {opacity: 1;}
            100% {display: none;}
          }
        `;
      default:
        return css`
        `;
    }
  }}
`

export default ViewArea;