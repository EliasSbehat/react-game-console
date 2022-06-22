import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Tools = () => {
  const [snapIndex, setSnapIndex] = React.useState(1);
  return (
    <Wrapper>
      <TopDiv>
        <div>
          <img></img>
          Design
        </div>
        <SwiperProcessor>
          <div>
            <progress id="file" max={3} value={snapIndex}> 70% </progress>
            Step {snapIndex} / 3
          </div>
          <span className="prev">
            <img></img>
          </span>
          <span className="next">
            <img></img>
          </span>
        </SwiperProcessor>
      </TopDiv>
      <MediumDiv>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation = {{
            nextEl: '.next',
            prevEl: '.prev',
          }}
          scrollbar={{ draggable: true }}
          onSlideChange={(event) => {
            setSnapIndex(event.snapIndex + 1);
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Selector >
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
            </Selector>
          </SwiperSlide>

          <SwiperSlide>
            <Selector>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
            </Selector>
          </SwiperSlide>
          <SwiperSlide>
            <Selector>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
              <SelectItem> 1 </SelectItem>
            </Selector>
          </SwiperSlide>
        </Swiper>
      </MediumDiv>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 30%;
  background-color: ${props => props.theme.ToolBgColor};
  padding: 0 10px;
  border-left: 3px solid ${props => props.theme.ThemeColor};
  @media screen and (max-width: 800px) {
    /* display: none; */
  }
`
const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    color: ${props => props.theme.color};
    font-family: 'Rajdhani-Medium';
    font-size: 20px;
    img {
      content: url(${props => props.theme.GameConsoleImg});
    }
    @media screen and (max-width: 1194px) {
      width: 100%;
      justify-content: start;
    }
  }

  @media screen and (max-width: 1194px) {
    flex-direction: column;
  }
`

const SwiperProcessor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${props => props.theme.color};
    font-family: 'Rajdhani-Medium';
  }
  & > span:nth-child(2) {
    padding: 5px 12px;
    border: ${props => props.theme.DirectIconBorder};
    background-color: ${props => props.theme.DirectIconBgColor};
    border-radius: 10px;
    img {
      content: url(${props => props.theme.LeftDirectIconImg});
    }
  }
  & > span:nth-child(3) {
    padding: 5px 12px;
    border: ${props => props.theme.DirectIconBorder};
    background-color: ${props => props.theme.DirectIconBgColor};
    border-radius: 10px;
    img {
      content: url(${props => props.theme.RightDirectIconImg});
    }
  }
`

const MediumDiv = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 95px - 77px)
`

const Selector = styled.div`
  background-color: ${props => props.theme.ToolBgColor};
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 10px;
  justify-content: center;
  align-content: flex-start;
  overflow-y: auto;
  height: 100%;
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.ScrollTraker};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${props => props.theme.ScrollBar};
  }
`

const SelectItem = styled.div`
  width: 66px;
  height: 66px;
  border: 1px solid red;
  border-radius: 20px;
  color: white;
`

export default Tools;