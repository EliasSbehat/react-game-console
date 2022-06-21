import React from "react";
import styled from "styled-components";

const Tools = () => {
  return (
    <Wrapper>
      <TopDiv>
        <div>
          <img></img>
          Design
        </div>
        <div>

        </div>
      </TopDiv>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 30%;
  background-color: ${props => props.theme.ToolBgColor};
  padding: 0 10px;
`
const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  & div:nth-child(1) {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    color: ${props => props.theme.color};
    img {
      content: url(${props => props.theme.GameConsoleImg});
    }
  }
`

export default Tools;