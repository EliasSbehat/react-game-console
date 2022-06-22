import React from "react";
import styled from "styled-components";

import { Assets } from "../../context/index";


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
          <div>
            <span> Front </span>
            <span> Back </span>
            <span>
              <img></img>
            </span>
          </div>
        </div>

    </LocalHeader>
      <Viewer>
        <div id="viewer">
          <img src={Assets.ModelImg}></img>
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
  display: flex;
  justify-content: center;
  #viewer {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      left: center;
      width: 70%;
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