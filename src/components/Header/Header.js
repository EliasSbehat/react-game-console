import React from "react";
import styled from "styled-components";
import AppContext from "../../context/context";

const Header = (props) => {
  const myContext = React.useContext(AppContext);
  React.useEffect(() => {
  })
  return (
    <Wrapper id="header">
      <Container>
        <RightDiv>
          <img></img>
          <img onClick={() => props.modeChange()}></img>
        </RightDiv>
        <LeftDiv>
          <SearchInput placeholder={'Search'} type="text" resflag={0}></SearchInput>
          <BritiSpan><img></img></BritiSpan>
          <FeatherSpan><img></img><span>2</span></FeatherSpan>
          <AvatarSpan><img></img></AvatarSpan>
        </LeftDiv>
      </Container>
      <ResponContainer>
        <TopDiv>
          <img></img>
          <img onClick={() => props.modeChange()}></img>
          <FeatherSpan><img></img><span>2</span></FeatherSpan>
        </TopDiv>
        <BotDiv>
        <SearchInput placeholder="Search" type="text" resflag={1}></SearchInput>
        </BotDiv>
      </ResponContainer>
    </Wrapper>
  )
}

const ResponContainer = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.bgColor};
  border-bottom: 3px solid ${props => props.theme.HeaderButtom};
`

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  & > img:nth-child(1) {
    content: url(${props => props.theme.ResponIcon});
  }
  & img:nth-child(2) {
    content: url(${props => props.theme.Logo});
  }
`

const BotDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.bgColor};
  padding: 10px 0;
  @media screen and (max-width: 800px) {
    display: none;
  }
`

const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min-content;
  img {
    margin-left: 30px;
  }

  & img:nth-child(1) {
    content: url(${props => props.theme.ResponIcon});
  }

  & img:nth-child(2) {
    content: url(${props => props.theme.Logo});
  }
`

const LeftDiv = styled.div`
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: min-content;
  gap: 20px;
`

const SearchInput = styled.input`
  background-color: ${props => props.theme.SearchBgColor};
  background-image: url(${props => props.theme.SearchIcon});
  width: ${props => props.resflag === 0 ? '300px':'85%'};
  border: 0;
  background-repeat: no-repeat;
  background-position: calc(100% - 20px) center;
  padding: 16px;
  color: ${props => props.theme.color};
  border-radius: 20px;
  padding-right: 50px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`

const BritiSpan = styled.span`
  background-color: ${props => props.theme.HeadIconBgColor};
  padding: 12px 17px;
  border-radius: 15px;
  border: ${props => props.theme.DirectIconBorder};
  img {
    content: url(${props => props.theme.BritiIcon});
  }
`;

const FeatherSpan = styled.div`
  background-color:${props => props.theme.HeadIconBgColor};
  padding: 12px 15px 12px 10px;
  border-radius: 15px;
  position: relative;
  border: ${props => props.theme.DirectIconBorder};

  span {
    background-color:${props => props.theme.InformBgColor};
    position: absolute;
    width: 23px;
    height: 23px;
    text-align: center;
    border-radius: 15px;
    color: white;
    font-weight: bold;
    border: 2px solid white;
    top: -10px;
    right: -10px;
  }

  img {
    content: url(${props => props.theme.FeatherIcon});
  }
`

const AvatarSpan = styled.span`
  border-radius: 15px;
  img {
    content: url(${props => props.theme.Avatar});
  }
`


export default Header;