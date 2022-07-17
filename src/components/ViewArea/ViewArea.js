import React, { useEffect } from "react";
import styled, {css} from "styled-components";
import html2canvas from 'html2canvas';
import downloadjs from "downloadjs";
import Moveable, { Scalable } from "react-moveable";
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

  React.useEffect(() => {
    // document.addEventListener('click', function(event) {
    //   var isClickInside = document.getElementById('txtmove').contains(event.target);
    //   if (isClickInside === undefined || !isClickInside) {
    //     myContext.setImgStatus(false);
    //     console.log('-------------');
    //     var isClickInside1 = document.getElementById('imagemove').contains(event.target);
    //     if (!isClickInside1) {
    //       myContext.setImgStatus(false);
    //     } else {
    //       myContext.setImgStatus(true);  
    //     }
    //   } else {
    //     myContext.setImgStatus(true);
    //     myContext.setTxtStatus(false);
    //   }
    // });

    // new
    document.addEventListener('click', function(event) {
      let flag = 0;
      if (document.getElementById('txtmove') !== null) {
        var isClickInside = document.getElementById('txtmove').contains(event.target);
        if (isClickInside) {
          myContext.setTxtStatus(true);
          myContext.setImgStatus(false);
          flag = 1;
        }
      }
      if (document.getElementById('imagemove') !== null) {
        var isClickInside = document.getElementById('imagemove').contains(event.target);
        if (isClickInside) {
          myContext.setImgStatus(true);
          myContext.setTxtStatus(false);
          flag = 1;
        }
      }

      if (flag === 0) {
        myContext.setImgStatus(false);
        myContext.setTxtStatus(false);
      }
    });
  });


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

  // React.useEffect(() => {
  //   console.log('is it right?')
  // }, [myContext.AniImg]);

  
    return (
      <Wrapper isover_text={isover_text} id="total">
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
                    myContext.design !== null && myContext.designData !== null ? (() => {
                      return (
                        myContext.designData.items[myContext.design[0]][myContext.design[1]].image ? <img src={myContext.designData.items[myContext.design[0]][myContext.design[1]].image}></img> : <div className="lds-dual-ring"></div>
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
                    myContext.abxy !== null && myContext.abxyData != null ? (() => {
                      console.log('---------');
                      return (
                        myContext.abxyData.items[myContext.abxy[0]][myContext.abxy[1]].image ? <img src={myContext.abxyData.items[myContext.abxy[0]][myContext.abxy[1]].image}></img> : <div className="lds-dual-ring"></div>
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
                    myContext.dpad !== null && myContext.dpadData ? (() => {
                      return (
                        myContext.dpadData.items[myContext.dpad[0]][myContext.dpad[1]].image ? <img src={myContext.dpadData.items[myContext.dpad[0]][myContext.dpad[1]].image}></img> : <div className="lds-dual-ring"></div>
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
                      myContext.thumbstickL !== null && myContext.thubmLData ? (() => {
                        return (
                          myContext.thubmLData.items[myContext.thumbstickL[0]][myContext.thumbstickL[1]].image ? <img src={myContext.thubmLData.items[myContext.thumbstickL[0]][myContext.thumbstickL[1]].image}></img> : <div className="lds-dual-ring"></div>
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
                      myContext.thumbstickR !== null && myContext.thubmRData ? (() => {
                        return (
                          myContext.thubmRData.items[myContext.thumbstickR[0]][myContext.thumbstickR[1]].image ? <img src={myContext.thubmRData.items[myContext.thumbstickR[0]][myContext.thumbstickR[1]].image}></img> : <div className="lds-dual-ring"></div>
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
                        myContext.startBtn !== null && myContext.startBackData ? (() => {
                          return (
                            myContext.startBackData.items[myContext.startBtn[0]][myContext.startBtn[1]].image ? <img src={myContext.startBackData.items[myContext.startBtn[0]][myContext.startBtn[1]].image}></img> : <div className="lds-dual-ring"></div>
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
                        myContext.touchpad !== null && myContext.thuchPadData ? (() => {
                          return (
                            myContext.thuchPadData.items[myContext.touchpad[0]][myContext.touchpad[1]].image ? <img src={myContext.thuchPadData.items[myContext.touchpad[0]][myContext.touchpad[1]].image}></img> : <div className="lds-dual-ring"></div>
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
                        myContext.trim !== null && myContext.trimData ? (() => {
                          return (
                            myContext.trimData.items[myContext.trim[0]][myContext.trim[1]].image ? <img src={myContext.trimData.items[myContext.trim[0]][myContext.trim[1]].image}></img> : <div className="lds-dual-ring"></div>
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
                        myContext.trigger !== null && myContext.triggersData ? (() => {
                          return (
                            myContext.triggersData.items[myContext.trigger[0]][myContext.trigger[1]].image ? <img src={myContext.triggersData.items[myContext.trigger[0]][myContext.trigger[1]].image}></img> : <div className="lds-dual-ring"></div>
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
                        myContext.rearDesign !== null && myContext.rearDesignData ? (() => {
                          return (
                            myContext.rearDesignData.items[myContext.rearDesign[0]][myContext.rearDesign[1]].image ? <img src={myContext.rearDesignData.items[myContext.rearDesign[0]][myContext.rearDesign[1]].image}></img> : <div className="lds-dual-ring"></div>
                          )
                        })() : (() => {})()
                      }
                      {/* {
                        myContext.hoverImg !== null ? */}
                          <HoverImg img={myContext.hoverImg} />
                      {/* } */}
                      {/* <AniImg i={myContext.aniImg !== null ? myContext.aniImg : 'null'} f={myContext.aniFlag}></AniImg> */}
                      <SpecialArea sf={myContext.sideflag} si={myContext.snapIndex} id='specialArea'>
                        <div>
                          <div>
                            <TextMove></TextMove>
                            <ImageMove id="imagemove"></ImageMove>
                          </div>
                        </div>
                      </SpecialArea>
                  </div>
                </div>
              </div>

              <div id="backend">
                <div>
                  <img src={Assets.ModelBackImg}></img>
                  {/* {
                    myContext.touchpad !== null ? (() => {
                      return (
                        Touchpad.items[myContext.touchpad[0]][myContext.touchpad[1]].image ? <img src={Touchpad.items[myContext.touchpad[0]][myContext.touchpad[1]].image_back}></img> : <div className="lds-dual-ring"></div>
                      )
                    })() : (() => {})()
                  } */}
                  {/**
                   * ████████╗██████╗ ██╗███╗   ███╗
                     ╚══██╔══╝██╔══██╗██║████╗ ████║
                        ██║   ██████╔╝██║██╔████╔██║
                        ██║   ██╔══██╗██║██║╚██╔╝██║
                        ██║   ██║  ██║██║██║ ╚═╝ ██║
                        ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝
                  */}
                  {
                    myContext.trim !== null && myContext.trimData ? (() => {
                      return (
                        myContext.trimData.items[myContext.trim[0]][myContext.trim[1]].image ? <img src={myContext.trimData.items[myContext.trim[0]][myContext.trim[1]].image_back}></img> : <div className="lds-dual-ring"></div>
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
                    myContext.trigger !== null && myContext.triggersData != null ? (() => {
                      return (
                        myContext.triggersData.items[myContext.trigger[0]][myContext.trigger[1]].image_back ? <img src={myContext.triggersData.items[myContext.trigger[0]][myContext.trigger[1]].image_back}></img> : <div className="lds-dual-ring"></div>
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
                    myContext.rearDesign !== null && myContext.rearDesignData != null ? (() => {
                      return (
                        myContext.rearDesignData.items[myContext.rearDesign[0]][myContext.rearDesign[1]].image ? <img src={myContext.rearDesignData.items[myContext.rearDesign[0]][myContext.rearDesign[1]].image_back}></img> : <div className="lds-dual-ring"></div>
                      )
                    })() : (() => {})()
                  }
                  {/**
                   *  ██████╗  █████╗ ██████╗ ██████╗ ██╗     ███████╗
                      ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║     ██╔════╝
                      ██████╔╝███████║██║  ██║██║  ██║██║     █████╗  
                      ██╔═══╝ ██╔══██║██║  ██║██║  ██║██║     ██╔══╝  
                      ██║     ██║  ██║██████╔╝██████╔╝███████╗███████╗
                      ╚═╝     ╚═╝  ╚═╝╚═════╝ ╚═════╝ ╚══════╝╚══════╝
                  */}
                  {
                    myContext.paddle !== null ? (() => {
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
                      myContext.ldomin_1 !== null && myContext.ldomin_2 !== null ? (() => {
                        return (
                          DominL.items[myContext.ldomin_2].image_back ? <img src={DominL.items[myContext.ldomin_2].image_back}></img> : <div className="lds-dual-ring"></div>
                        )
                      })() : (() => {})()
                    }
                    {/**
                       *  ██████╗  ██████╗ ███╗   ███╗██╗███╗   ██╗    ██████╗ 
                          ██╔══██╗██╔═══██╗████╗ ████║██║████╗  ██║    ██╔══██╗
                          ██║  ██║██║   ██║██╔████╔██║██║██╔██╗ ██║    ██████╔╝
                          ██║  ██║██║   ██║██║╚██╔╝██║██║██║╚██╗██║    ██╔══██╗
                          ██████╔╝╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║    ██║  ██║
                          ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝
                    */}
                    {
                      myContext.rdomin_1 !== null && myContext.rdomin_2 !== null ? (() => {
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
        {/* <LocalFooter>
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
              <ATC onClick={() => handleCaptureClick()} flag={myContext.isFinished}>
                <img></img>
                Add to Cart
              </ATC>
            </Info>
          </div>
        </LocalFooter> */}
      </Wrapper>
    )
}

const Wrapper = styled.div`
  /* background-color: ${props => props.theme.bgColor}; */
  background-color: #E9E9EB;
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
      /* color: ${props => props.theme.color}; */
      color: '#333333';
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
    /* transform: scale(1.4); */
    justify-content: center;
    #viewer {
      position: relative;
      width: 100%;
      height: 100%;
      
      & > div:nth-child(1) {
        border-radius: 40px;
        // Frontend side
        position: absolute;
        z-index: ${props => !props.flag ? '100!important' : '99!important'};
        transition: all 1s, z-index 0s;

        /* left: 50%;
        top: 50%;
        transform: ${props => props.flag ? 'scale(8)' : 'scale(2)'}; */

        /* width: ${props => props.flag ? props.width1 : props.width2};
        left: ${props => props.flag ? `calc((100% - ${props.width1}) / 2)` : `calc((100% - ${props.width2}) / 2)`};
        top: ${props => props.flag ? props.top1 : props.top2}; */
        left: 25%;
        top: ${props => props.flag ? '-0%' : '65%'};
        width: 50%;
        transform: ${props => props.flag ? 'scale(1.4)' : 'scale(0.5)'};
        & > div:nth-child(1) {
          min-width: 100%;
          min-height: 100%;
          & > div:nth-child(1) {
            position: relative;
            width: auto;
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
      }
      & > div:nth-child(2) {
        border-radius: 40px;
        z-index: ${props => props.flag ? '100!important' : '99!important'};
        // Backend side
        position: absolute;
        transition: all 1s, z-index 0s;
        /* width: ${props => !props.flag ? props.width1 : props.width2};
        left: ${props => !props.flag ? `calc((100% - ${props.width1}) / 2)` : `calc((100% - ${props.width2}) / 2)`};
        top: ${props => !props.flag ? props.top1 : props.top2}; */
        left: 25%;
        top: ${props => !props.flag ? '-0%' : '65%'};
        width: 50%;
        transform: ${props => !props.flag ? 'scale(1.4)' : 'scale(0.5)'};
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
  /* display: ${props => props.flag ? 'flex' : 'none'}; */
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
  animation-name: ${props => props.f ? 'example' : 'hello'};
  animation-duration: 1s;
  animation-direction: reverse;
  opacity: 0;
  @keyframes example {
    0%   {opacity: 0;}
    25%  {opacity: 1;}
    50%  {opacity: 0;}
    75%  {opacity: 1;}
    100% {display: none;}
  }
  /* ${(props) => {
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
        break;
      default:
        css``;
        break;
    }
  }} */
`

const HoverImg = styled.img`
  content: url(${props => props.img !== null ? props.img : 'null'});
  /* transition: all 2s!important; */
`

const SpecialArea = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  /* padding-top: 66.6%; */
  top: 0;
  & > div:nth-child(1) {
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 63%;
    & > div:nth-child(1) {
      position: absolute;
      top: 15%;
      left: 39.3%;
      height: 20%;
      outline: ${props => props.sf && (props.si === 13 || props.si === 14) ? '2px dotted red' : 'none'};
      width: 24%;
      overflow: hidden;
      img {
        /* max-width: 100%;
        max-height: 100%; */
      }
    }

    .moveable-control {
      position: absolute;
      /* width: 10px;
      height: 10px;
      top:3px;
      left: 3px; */
    }
  }
`

export default ViewArea;