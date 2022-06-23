import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Design } from "../../assets/images/main_assets/1-DESIGN/DesignImage";
import { Abxy } from "../../assets/images/main_assets/2-ABXY/AbxyImage";
import { Dpad } from "../../assets/images/main_assets/3-Dpad/DpadImage";
import { ThumbL } from "../../assets/images/main_assets/4-THUMBSTICK L/ThumbL";
import { ThumbR } from "../../assets/images/main_assets/5-THUMBSTICK R/ThumbR";
import { StartBtn } from "../../assets/images/main_assets/6-START BACK/StartBtn";
import { Touchpad } from "../../assets/images/main_assets/7-TOUCHPAD/Touchpad";
import { Trim } from "../../assets/images/main_assets/8-TRIM/Trims";
import { Trigger } from "../../assets/images/main_assets/9-TRIGGERS/Triggers";
import { RearDesign } from "../../assets/images/main_assets/10-REAR DESIGN/RearDesign";

import AppContext from "../../context/context";
import "swiper/css";

const Tools = () => {

  const [DesigntabSelect, DesignSetTabSelect] = React.useState(0);
  const [AbxytabSelect, AbxySetTabSelect] = React.useState(0);
  const [DpadtabSelect, DpadSetTabSelect] = React.useState(0);
  const [ThumbLtabSelect, ThumbLSetTabSelect] = React.useState(0);
  const [ThumbRtabSelect, ThumbRSetTabSelect] = React.useState(0);
  const [StartBtntabSelect, StartBtnSetTabSelect] = React.useState(0);
  const [TouchpadtabSelect, TouchpadSetTabSelect] = React.useState(0);
  const [TrimtabSelect, TrimSetTabSelect] = React.useState(0);
  const [TriggertabSelect, TriggerSetTabSelect] = React.useState(0);
  const [RearDesigntabSelect, RearDesignSetTabSelect] = React.useState(0);


  const Assets = [Design, Abxy, Dpad, ThumbL, ThumbR, StartBtn, Touchpad, Trim, Trigger, RearDesign];
  const myContext = React.useContext(AppContext);
  const [snapIndex, setSnapIndex] = React.useState(0);


  return (
    <Wrapper>
      <TopDiv>
        <div>
          <div>
            <img></img>
            Design
          </div>
          <SwiperProcessor>
            <div>
              <progress id = "file" max = {Assets.length} value = {snapIndex+1}></progress>
              Step {snapIndex + 1} / {Assets.length}
            </div>
            <span className="prev">
              <img></img>
            </span>
            <span className="next">
              <img></img>
            </span>
          </SwiperProcessor>
        </div>
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
            setSnapIndex(event.snapIndex);
          }}
          onSwiper={(swiper) => console.log('--')}
        >
          {/* 
             ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
             ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
             ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
             ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
             ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
             ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
          */}
            <SwiperSlide>
              <TopItems>
                {
                  Design.steps.map((item, index) => (
                    <TapItem w={Assets[snapIndex].steps.length} key={ index } keys={index} active={DesigntabSelect} onClick = {() => DesignSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        {item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                }
              </TopItems>
              <Selector>
                {
                  Design.items[DesigntabSelect].map((item, index) => (
                    <SelectItem bgImg={item.selet} onClick={() => myContext.setDesign([DesigntabSelect, index])}></SelectItem>
                  ))
                }
              </Selector>
            </SwiperSlide>
          {/*
              █████╗ ██████╗ ██╗  ██╗██╗   ██╗
              ██╔══██╗██╔══██╗╚██╗██╔╝╚██╗ ██╔╝
              ███████║██████╔╝ ╚███╔╝  ╚████╔╝ 
              ██╔══██║██╔══██╗ ██╔██╗   ╚██╔╝  
              ██║  ██║██████╔╝██╔╝ ██╗   ██║   
              ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   
          */}
          <SwiperSlide>
            <TopItems>
              {
                Abxy.steps.map((item, index) => (
                  <TapItem w={Assets[snapIndex].steps.length} key={ index } keys={index} active={AbxytabSelect} onClick = {() => AbxySetTabSelect(index)}>
                    <span>
                      {item.name}
                    </span>
                    <span>
                      {item.price}
                    </span>
                    <div></div>
                  </TapItem>
                ))
              }
            </TopItems>
            <Selector>
              {
                Abxy.items[AbxytabSelect].map((item, index) => (
                  <SelectItem bgImg={item.selet} onClick={() => myContext.setAbxy([AbxytabSelect, index])}></SelectItem>
                ))
              }
            </Selector>
          </SwiperSlide>
          
          {/*
              ██████╗ ██████╗  █████╗ ██████╗ 
              ██╔══██╗██╔══██╗██╔══██╗██╔══██╗
              ██║  ██║██████╔╝███████║██║  ██║
              ██║  ██║██╔═══╝ ██╔══██║██║  ██║
              ██████╔╝██║     ██║  ██║██████╔╝
              ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═════╝ 
          */}

          <SwiperSlide>
            <TopItems>
              {
                Dpad.steps.map((item, index) => (
                  <TapItem key={ index } keys={index} active={DpadtabSelect} onClick = {() => DpadSetTabSelect(index)}>
                    <span>
                      {item.name}
                    </span>
                    <span>
                      {item.price}
                    </span>
                    <div></div>
                  </TapItem>
                ))
              }
            </TopItems>
            <Selector>
              {
                Dpad.items[DpadtabSelect].map((item, index) => (
                  <SelectItem bgImg={item.selet} onClick={() => myContext.setDpad([DpadtabSelect, index])}></SelectItem>
                ))
              }
            </Selector>
          </SwiperSlide>

          {/*
            ████████╗██╗  ██╗██╗   ██╗███╗   ███╗██████╗     ██╗     
            ╚══██╔══╝██║  ██║██║   ██║████╗ ████║██╔══██╗    ██║     
               ██║   ███████║██║   ██║██╔████╔██║██████╔╝    ██║     
               ██║   ██╔══██║██║   ██║██║╚██╔╝██║██╔══██╗    ██║     
               ██║   ██║  ██║╚██████╔╝██║ ╚═╝ ██║██████╔╝    ███████╗
               ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝     ╚══════╝
          */}
          <SwiperSlide>
            <Selector>
              {
                ThumbL.items[ThumbLtabSelect].map((item, index) => (
                  <SelectItem bgImg={item.selet} onClick={() => myContext.setThumbstickL([ThumbLtabSelect, index])}></SelectItem>
                ))
              }
            </Selector>
          </SwiperSlide>

          {/**
           * ████████╗██╗  ██╗██╗   ██╗███╗   ███╗██████╗     ██████╗ 
             ╚══██╔══╝██║  ██║██║   ██║████╗ ████║██╔══██╗    ██╔══██╗
                ██║   ███████║██║   ██║██╔████╔██║██████╔╝    ██████╔╝
                ██║   ██╔══██║██║   ██║██║╚██╔╝██║██╔══██╗    ██╔══██╗
                ██║   ██║  ██║╚██████╔╝██║ ╚═╝ ██║██████╔╝    ██║  ██║
                ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝     ╚═╝  ╚═╝
           */}
            <SwiperSlide>
              <Selector>
                {
                  ThumbR.items[ThumbRtabSelect].map((item, index) => (
                    <SelectItem bgImg={item.selet} onClick={() => myContext.setThumbstickR([ThumbRtabSelect, index])}></SelectItem>
                  ))
                }
              </Selector>
            </SwiperSlide>

            {/**
             * ███████╗████████╗ █████╗ ██████╗ ████████╗    ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗
               ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝    ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║
               ███████╗   ██║   ███████║██████╔╝   ██║       ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║
               ╚════██║   ██║   ██╔══██║██╔══██╗   ██║       ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║
               ███████║   ██║   ██║  ██║██║  ██║   ██║       ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║
               ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝
             */}
             <SwiperSlide>
              <TopItems>
                {
                  StartBtn.steps.map((item, index) => (
                    <TapItem w={Assets[snapIndex].steps.length} key={ index } keys={index} active={StartBtntabSelect} onClick = {() => StartBtnSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        {item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                }
              </TopItems>
              <Selector>
                {
                  StartBtn.items[StartBtntabSelect].map((item, index) => (
                    <SelectItem key={index} bgImg={item.selet} onClick={() => myContext.setStartBtn([StartBtntabSelect, index])}></SelectItem>
                  ))
                }
              </Selector>
            </SwiperSlide>

            {/**
             * ████████╗ ██████╗ ██╗   ██╗ ██████╗██╗  ██╗██████╗  █████╗ ██████╗ 
               ╚══██╔══╝██╔═══██╗██║   ██║██╔════╝██║  ██║██╔══██╗██╔══██╗██╔══██╗
                  ██║   ██║   ██║██║   ██║██║     ███████║██████╔╝███████║██║  ██║
                  ██║   ██║   ██║██║   ██║██║     ██╔══██║██╔═══╝ ██╔══██║██║  ██║
                  ██║   ╚██████╔╝╚██████╔╝╚██████╗██║  ██║██║     ██║  ██║██████╔╝
                  ╚═╝    ╚═════╝  ╚═════╝  ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝╚═════╝ 
            */}
            <SwiperSlide>
              <TopItems>
                {
                  Touchpad.steps.map((item, index) => (
                    <TapItem w={Assets[snapIndex].steps.length} key={ index } keys={index} active={TouchpadtabSelect} onClick = {() => TouchpadSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        {item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                }
              </TopItems>
              <Selector>
                {
                  Touchpad.items[TouchpadtabSelect].map((item, index) => (
                    <SelectItem key={index} bgImg={item.selet} onClick={() => myContext.setTouchpad([TouchpadtabSelect, index])}></SelectItem>
                  ))
                }
              </Selector>
            </SwiperSlide>
            {/**
             * ████████╗██████╗ ██╗███╗   ███╗
               ╚══██╔══╝██╔══██╗██║████╗ ████║
                  ██║   ██████╔╝██║██╔████╔██║
                  ██║   ██╔══██╗██║██║╚██╔╝██║
                  ██║   ██║  ██║██║██║ ╚═╝ ██║
                  ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝
             */}
             <SwiperSlide>
              <Selector>
                {
                  Trim.items[TrimtabSelect].map((item, index) => (
                    <SelectItem key={index} bgImg={item.selet} onClick={() => myContext.setTrim([TrimtabSelect, index])}></SelectItem>
                  ))
                }
              </Selector>
            </SwiperSlide>
            {/**
             * ████████╗██████╗ ██╗ ██████╗  ██████╗ ███████╗██████╗ 
               ╚══██╔══╝██╔══██╗██║██╔════╝ ██╔════╝ ██╔════╝██╔══██╗
                  ██║   ██████╔╝██║██║  ███╗██║  ███╗█████╗  ██████╔╝
                  ██║   ██╔══██╗██║██║   ██║██║   ██║██╔══╝  ██╔══██╗
                  ██║   ██║  ██║██║╚██████╔╝╚██████╔╝███████╗██║  ██║
                  ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝
            */}
            <SwiperSlide>
              <TopItems>
                {
                  Trigger.steps.map((item, index) => (
                    <TapItem w={Assets[snapIndex].steps.length} key={ index } keys={index} active={TriggertabSelect} onClick = {() => TriggerSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        {item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                }
              </TopItems>
              <Selector>
                {
                  Trigger.items[TriggertabSelect].map((item, index) => (
                    <SelectItem key={index} bgImg={item.selet} onClick={() => myContext.setTrigger([TriggertabSelect, index])}></SelectItem>
                  ))
                }
              </Selector>
            </SwiperSlide>
            {/**
             * ██████╗ ███████╗ █████╗ ██████╗     ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
               ██╔══██╗██╔════╝██╔══██╗██╔══██╗    ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
               ██████╔╝█████╗  ███████║██████╔╝    ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
               ██╔══██╗██╔══╝  ██╔══██║██╔══██╗    ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
               ██║  ██║███████╗██║  ██║██║  ██║    ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
               ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
            */}
            <SwiperSlide>
              <TopItems>
                {/* {
                  Trigger.steps.map((item, index) => (
                    <TapItem key={ index } keys={index} active={TriggertabSelect} onClick = {() => TriggerSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        {item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                } */}
              </TopItems>
              <Selector>
                {
                  RearDesign.items[RearDesigntabSelect].map((item, index) => (
                    <SelectItem key={index} bgImg={item.selet} onClick={() => myContext.setRearDesign([RearDesigntabSelect, index])}></SelectItem>
                  ))
                }
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
  border-left: 3px solid ${props => props.theme.ThemeColor};
  
  @media screen and (max-width: 800px) {
    /* display: none; */
  }
`
const TopDiv = styled.div`
  & > div:nth-child(1) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 10px;
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
  }
`
const TopItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`


const TapItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(65% / ${props => props.w});
  background-color: ${props => props.keys === props.active ? props.theme.TapSelectBgColor : props.theme.TapBgColor};
  color: ${props => props.keys === props.active ? props.theme.TapSelectColor : props.theme.TapColor};
  border-radius: 5px;
  font-family: 'Rajdhani-Medium';
  position: relative;
  padding: 10px 10px;
  cursor: pointer;
  & > span:nth-child(1) {
    font-size: 15px;
    white-space: nowrap;
  }
  div {
    position: absolute;
    background-color: ${props => props.keys === props.active ? props.theme.ThemeColor : 'none'};
    width: 80%;
    height: 3px;
    bottom: 0;
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
    cursor: pointer;
  }
  & > span:nth-child(3) {
    padding: 5px 12px;
    border: ${props => props.theme.DirectIconBorder};
    background-color: ${props => props.theme.DirectIconBgColor};
    border-radius: 10px;
    img {
      content: url(${props => props.theme.RightDirectIconImg});
    }
    cursor: pointer;
  }
`

const MediumDiv = styled.div`
  height: calc(100vh - 95px - 177px);
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.ScrollTraker};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${props => props.theme.ScrollBar};
  }
`

const Selector = styled.div`
  background-color: ${props => props.theme.ToolBgColor};
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 10px;
  justify-content: flex-start;
  align-content: flex-start;
  height: 100%;
  
`

const SelectItem = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid white;
  color: white;
  background-image: url(${props => props.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
`

export default Tools;