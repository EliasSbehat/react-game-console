import React from "react"
import styled from "styled-components";
import {  ThemeProvider } from 'styled-components'

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
`

const Buttons = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  color: ${props => props.theme.textColor};
`

const themes = {
  dark: {
    bgColor: '#222',
    textColor: '#fff'
  },
  light: {
    bgColor: '#fff',
    textColor: '#222'
  }
}

const Toggler = ({ onChange, currentTheme }) => (
  <Buttons>
    <label>
      <input type="radio" name="theme" value="dark" onChange={onChange} defaultChecked={currentTheme === 'dark'} /> Dark
    </label>
    <label>
      <input type="radio" name="theme" value="light" onChange={onChange} defaultChecked={currentTheme === 'light'} /> Light
    </label>
  </Buttons>
)

const ThemeToggle = ({ children, themeName }) => {
  const defaultTheme = themeName === 'dark' ? themes.dark : themes.light
  const [theme, setTheme] = React.useState(defaultTheme)
  
  const onChangeTheme = ({ target }) => {
    setTheme(target.value === 'dark' ? themes.dark : themes.light)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {children}
        <Toggler onChange={onChangeTheme} currentTheme={themeName} />
      </React.Fragment>
    </ThemeProvider>
  )
}

const Container = () => <Content>Styled components theme toggler</Content>

const Test = () => (
  <ThemeToggle themeName='dark'>
    <Container />
  </ThemeToggle>
)

export default Test;
