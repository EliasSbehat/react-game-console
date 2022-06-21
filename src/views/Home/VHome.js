import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Header from "../../components/Header/Header";
import Tools from "../../components/Tools/Tools";

import { DarkMode, DayMode } from "../../context";

const VHome = () => {
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
      <>
        <Wrapper>
          <Header modeChange={modeChange} flag='1'></Header>
          <MainDiv>
            <Tools></Tools>
          </MainDiv>
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`

`
const MainDiv = styled.div`
  display: flex;
`

export default VHome;