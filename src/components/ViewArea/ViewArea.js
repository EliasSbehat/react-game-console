import React from "react";
import styled from "styled-components";

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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.bgColor};
  padding: 0 10px;
  width: 100%;
`

const LocalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
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
      border: ${props => props.theme.SwapBorder};
      border-radius: 10px;
      padding: 5px 10px;
    }
    & > span:nth-child(1) {
      color: ${props => props.theme.SwapFrontColor};
      background-color: ${props => props.theme.SwapFrontBgColor};
    }
    & > span:nth-child(2) {
      color: ${props => props.theme.SwapBackColor};
      background-color: ${props => props.theme.SwapBackBgColor};
    }

    & > span:nth-child(3) {
      position: absolute;
      top: -5px;
      left: 35%;
      background-color: ${props => props.theme.ThemeColor};
      img {
        content: url(${props => props.theme.SwapIcon});
      }
    }
  }
`

export default ViewArea;