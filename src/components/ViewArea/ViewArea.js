import React from "react";
import styled from "styled-components";
import html2canvas from 'html2canvas';
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

const ViewArea = () => {
  const [sideflag, setSideflag] = React.useState(true);
  const myContext = React.useContext(AppContext);
  const printRef = React.useRef();
  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  React.useEffect(() => {
    // handleDownloadImage();
  }, [])
  return (
    <Wrapper>
      <LocalHeader>
        <div>
          <span>
            Play Station 5 Controller
          </span>
        </div>
        <div>
          <div>
            <span onClick={() => setSideflag(true)}> Front </span>
            <span onClick={() => setSideflag(false)}> Back </span>
            <span onClick={() => setSideflag(!sideflag)}>
              <img></img>
            </span>
          </div>
        </div>

    </LocalHeader>
      <Viewer flag={sideflag} width1="60%" width2="20%" top1="10%" top2="60%">
        <div>
          <div id="viewer">
            <div>
              <div>
                <img src={Assets.ModelImg} ref={printRef} ></img>
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
                      Design.items[myContext.design[0]][myContext.design[1]].image ? <img src={Design.items[myContext.design[0]][myContext.design[1]].image}></img> : <div class="lds-dual-ring"></div>
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
                      Abxy.items[myContext.abxy[0]][myContext.abxy[1]].image ? <img src={Abxy.items[myContext.abxy[0]][myContext.abxy[1]].image}></img> : <div class="lds-dual-ring"></div>
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
                      Dpad.items[myContext.dpad[0]][myContext.dpad[1]].image ? <img src={Dpad.items[myContext.dpad[0]][myContext.dpad[1]].image}></img> : <div class="lds-dual-ring"></div>
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
                        ThumbL.items[myContext.thumbstickL[0]][myContext.thumbstickL[1]].image ? <img src={ThumbL.items[myContext.thumbstickL[0]][myContext.thumbstickL[1]].image}></img> : <div class="lds-dual-ring"></div>
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
                        ThumbR.items[myContext.thumbstickR[0]][myContext.thumbstickR[1]].image ? <img src={ThumbR.items[myContext.thumbstickR[0]][myContext.thumbstickR[1]].image}></img> : <div class="lds-dual-ring"></div>
                      )
                    })() : (() => {})()
                  }

                  {/**
                   * ███████╗████████╗ █████╗ ██████╗ ████████╗    ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗
                     ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝    ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║
                     ███████╗   ██║   ███████║██████╔╝   ██║       ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║
                     ╚════██║   ██║   ██╔══██║██╔══██╗   ██║       ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║
                     ███████║   ██║   ██║  ██║██║  ██║   ██║       ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║
                     ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝
                  */}
                  {
                      myContext.startBtn !== null ? (() => {
                        return (
                          StartBtn.items[myContext.startBtn[0]][myContext.startBtn[1]].image ? <img src={StartBtn.items[myContext.startBtn[0]][myContext.startBtn[1]].image}></img> : <div class="lds-dual-ring"></div>
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
                          Touchpad.items[myContext.touchpad[0]][myContext.touchpad[1]].image ? <img src={Touchpad.items[myContext.touchpad[0]][myContext.touchpad[1]].image}></img> : <div class="lds-dual-ring"></div>
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
                          Trim.items[myContext.trim[0]][myContext.trim[1]].image ? <img src={Trim.items[myContext.trim[0]][myContext.trim[1]].image}></img> : <div class="lds-dual-ring"></div>
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
                          Trigger.items[myContext.trigger[0]][myContext.trigger[1]].image ? <img src={Trigger.items[myContext.trigger[0]][myContext.trigger[1]].image}></img> : <div class="lds-dual-ring"></div>
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
                          RearDesign.items[myContext.rearDesign[0]][myContext.rearDesign[1]].image ? <img src={RearDesign.items[myContext.rearDesign[0]][myContext.rearDesign[1]].image}></img> : <div class="lds-dual-ring"></div>
                        )
                      })() : (() => {})()
                    }
              </div>
            </div>
            <div>
              <div>
                <img src={Assets.ModelBackImg}></img>
                {
                  myContext.touchpad !== null ? (() => {
                    return (
                      Touchpad.items[myContext.touchpad[0]][myContext.touchpad[1]].image ? <img src={Touchpad.items[myContext.touchpad[0]][myContext.touchpad[1]].image_back}></img> : <div class="lds-dual-ring"></div>
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
                      Trim.items[myContext.trim[0]][myContext.trim[1]].image ? <img src={Trim.items[myContext.trim[0]][myContext.trim[1]].image_back}></img> : <div class="lds-dual-ring"></div>
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
                      Trigger.items[myContext.trigger[0]][myContext.trigger[1]].image_back ? <img src={Trigger.items[myContext.trigger[0]][myContext.trigger[1]].image_back}></img> : <div class="lds-dual-ring"></div>
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
                      RearDesign.items[myContext.rearDesign[0]][myContext.rearDesign[1]].image ? <img src={RearDesign.items[myContext.rearDesign[0]][myContext.rearDesign[1]].image_back}></img> : <div class="lds-dual-ring"></div>
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
              $63.99
            </span>
          </TotalPrice>
          <Info>
            <div>
              <span> Estimated Delivery Date </span>
              <EDD>
                04/04/2022
              </EDD>
            </div>
            <ATC>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
        color: ${props => props.theme.SwapFrontColor};
        background-color: ${props => props.theme.SwapFrontBgColor};
        padding-right: 30px;
        border: ${props => props.theme.SwapBorder};
      }
      & > span:nth-child(2) {
        color: ${props => props.theme.SwapBackColor};
        background-color: ${props => props.theme.SwapBackBgColor};
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
        box-shadow: 2px 2px 2px 2px #ccc;
      }
    }
  }
`

const Viewer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  & > div:nth-child(1) {
    width: 100%;
    height: 100%;
    display: flex;
    transform: scale(1.4);
    justify-content: center;
    #viewer {
      position: relative;
      width: 100%;
      /* transform: scale(1.3); */
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
          img {
            position: absolute;
            width: 100%;
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
            width: 100%;
          }
        }
      }
    }
  }
`

const LocalFooter = styled.div`
  width: 100%;
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
      margin: 0;
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
`

export default ViewArea;