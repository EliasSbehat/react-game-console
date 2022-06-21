import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Header from "../../components/Header/Header";

const VHome = () => {
  const [theme, setTheme] = React.useState('red');
  return (
    <ThemeProvider theme={{color: theme}}>
      <>
        <Wrapper>
          <Header></Header>
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  
`

export default VHome;