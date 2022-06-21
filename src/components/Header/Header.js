import React from "react";
import styled from "styled-components";
import { 
  Resp_icon_dark_img, 
  Logo_img,
  Search_icon_dark_img,
  Briti_icon_dark_img,
  Feather_icon_dark_img,
  AvatarImg,
} from "../../assets/images";
const Header = () => {
  return (
    <Wrapper>
      <Container>
        <RightDiv>
          <img src={Resp_icon_dark_img}></img>
          <img src={Logo_img}></img>
        </RightDiv>
        <LeftDiv>
          <SearchInput placeholder="Search" type="text" resflag={0}></SearchInput>
          <BritiSpan><img src={Briti_icon_dark_img}></img></BritiSpan>
          <FeatherSpan><img src={Feather_icon_dark_img}></img><span>2</span></FeatherSpan>
          <AvatarSpan><img src={AvatarImg}></img></AvatarSpan>
        </LeftDiv>
      </Container>
      <ResponContainer>
        <TopDiv>
          <img src={Resp_icon_dark_img}></img>
          <img src={Logo_img}></img>
          <FeatherSpan><img src={Feather_icon_dark_img}></img><span>2</span></FeatherSpan>
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
  background-color: #292c33;
  padding: 17px 0;
`

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
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
  background-color: #292c33;
  padding: 17px 0;
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
  background-color:rgba(255, 255, 255, 0.15000000596046448);
  background-image: url(${Search_icon_dark_img});
  background-repeat: no-repeat;
  background-position: calc(100% - 20px) center;
  padding: 16px;
  color: white;
  border: 0;
  border-radius: 20px;
  padding-right: 50px;
  width: ${props => props.resflag === 0 ? '300px':'85%'};
  &:focus {
    outline: none;
  }
`

const BritiSpan = styled.span`
  background-color:rgba(255, 255, 255, 0.10000000149011612);
  padding: 12px 17px;
  border-radius: 15px;
`;

const FeatherSpan = styled.div`
  background-color:rgba(255, 255, 255, 0.10000000149011612);
  padding: 12px 15px 12px 10px;
  border-radius: 15px;
  position: relative;
  span {
    background-color:#00ce71;
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
`

const AvatarSpan = styled.span`
  border-radius: 15px;
`


export default Header;