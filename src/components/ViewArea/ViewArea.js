import React from "react";
import styled from "styled-components";

import { Assets } from "../../context/index";

import Test1 from '../../assets/images/assets/2-ABXY/ABXY-Bullet-PS5.png';
import Test2 from '../../assets/images/assets/4-THUMBSTICK L/Thumbstick_L_Orange.png';
import Test3 from '../../assets/images/assets/5-THUMBSTICK R/Thumbstick_R_Orange.png'
import Test4 from '../../assets/images/assets/7-START BACK/Star_Back_Red_Chrome.png'
import Test5 from '../../assets/images/assets/Dpad/Dpad_Blue_Chrome.png';
import Test6 from '../../assets/images/assets/TOUCHPAD/Touchpad-Supernova-PS5.png';
import Test7 from '../../assets/images/assets/TRIGGERS/View_Front_Back_Triggers_Soft_Touch_Green.png';
import Test8 from '../../assets/images/assets/TRIM/front/Trim_Soft_Touch_Purple.png';

const ViewArea = () => {
  return (
    <Wrapper>
      <LocalHeader>
        <div>
          <span>
            PLay Station 5 Controller
          </span>
          <img></img>
        </div>
        <div>
          <span> Front </span>
          <span> Back </span>
          <span>
            <img></img>
          </span>
        </div>
    </LocalHeader>
      <Viewer>
        <img src={Assets.ModelImg}></img>
        <img src={Assets.TestImg}></img>
        <img src={Test1}></img>
        <img src={Test2}></img>
        <img src={Test3}></img>
        <img src={Test4}></img>
        <img src={Test5}></img>
        <img src={Test6}></img>
        <img src={Test7}></img>
        <img src={Test8}></img>
      </Viewer>
      <LocalFooter>
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
      </LocalFooter>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.bgColor};
  padding: 0 20px 20px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const LocalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  & > div:nth-child(1) {
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
`

const Viewer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;
  }

  & > img:nth-child(1) {
    z-index: 0;
  }
  & > img:nth-child(2) {
    z-index: 1;
  }
  & > img:nth-child(3) {
    z-index: 2;
  }
  & > img:nth-child(4) {
    z-index: 3;
  }
  & > img:nth-child(5) {
    z-index: 4;
  }
  & > img:nth-child(6) {
    z-index: 5;
  }
  & > img:nth-child(7) {
    z-index: 6;
  }
  & > img:nth-child(8) {
    z-index: 7;
  }
  & > img:nth-child(9) {
    z-index: 8;
  }
`

const LocalFooter = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
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