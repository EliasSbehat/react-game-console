import React from "react";
import styled from "styled-components";
import ImageUploading from 'react-images-uploading';
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
import { Paddle } from "../../assets/images/main_assets/paddle/Paddle";


import { DominL } from "../../assets/images/main_assets/L Domin8or Button/DominL";
import { DominR } from "../../assets/images/main_assets/R Domin8or Button/DominR";
import { DominSelection } from "../../assets/images/main_assets/L Domin8or Button/DominL";

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
  const [PaddletabSelect, PaddleSetTabSelect] = React.useState(0);
  const myContext = React.useContext(AppContext);

  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    myContext.setImages(imageList);
  };

  return (
    <Wrapper>
      <TopDiv>
        <div>
          <div> 
            <img></img>
            {myContext.spanNames[myContext.snapIndex].name}
          </div>
          <SwiperProcessor>
            <div>
              <progress id = "file" max = {myContext.spanNames.length} value = {myContext.snapIndex+1}></progress>
              Step {myContext.snapIndex + 1} / {myContext.spanNames.length}
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
            myContext.setSnapIndex(event.snapIndex);
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
            <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
              <TopItems>
                {
                  Design.steps.map((item, index) => (
                    <TapItem w={Design.steps.length} key={ index } keys={index} active={DesigntabSelect} onClick = {() => DesignSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        £{item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                }
              </TopItems>
              <Selector>
                {
                  Design.items[DesigntabSelect].map((item, index) => (
                    <SelectItem 
                      bgImg={item.selet}
                      now = { myContext.design === null ? -1 : 10000 * myContext.snapIndex + 100 * myContext.design[0] + myContext.design[1]}
                      me = { 10000 * myContext.snapIndex + 100 * DesigntabSelect + index }
                      onClick={() => myContext.setDesign([DesigntabSelect, index])} 
                    />
                  ))
                }
              </Selector>
            </SwiperSlide>
          {/*
              █████╗  ██████╗ ██╗  ██╗██╗   ██╗
              ██╔══██╗██╔══██╗╚██╗██╔╝╚██╗ ██╔╝
              ███████║██████╔╝ ╚███╔╝  ╚████╔╝ 
              ██╔══██║██╔══██╗ ██╔██╗   ╚██╔╝  
              ██║  ██║██████╔╝██╔╝ ██╗   ██║   
              ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   
          */}
          <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
            <TopItems>
              {
                Abxy.steps.map((item, index) => (
                  <TapItem w={Abxy.steps.length} key={ index } keys={index} active={AbxytabSelect} onClick = {() => AbxySetTabSelect(index)}>
                    <span>
                      {item.name}
                    </span>
                    <span>
                      £{item.price}
                    </span>
                    <div></div>
                  </TapItem>
                ))
              }
            </TopItems>
            <Selector>
              {
                Abxy.items[AbxytabSelect].map((item, index) => (
                  <SelectItem 
                    bgImg={item.selet}
                    now = { myContext.abxy === null ? -1 : 10000 * myContext.snapIndex + 100 * myContext.abxy[0] + myContext.abxy[1]}
                    me = { 10000 * myContext.snapIndex + 100 * AbxytabSelect + index }
                    onClick={() => myContext.setAbxy([AbxytabSelect, index])}
                  ></SelectItem>
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

          <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
            <TopItems>
              {
                Dpad.steps.map((item, index) => (
                  <TapItem key={ index } keys={index} active={DpadtabSelect} onClick = {() => DpadSetTabSelect(index)}>
                    <span>
                      {item.name}
                    </span>
                    <span>
                      £{item.price}
                    </span>
                    <div></div>
                  </TapItem>
                ))
              }
            </TopItems>
            <Selector>
              {
                Dpad.items[DpadtabSelect].map((item, index) => (
                  <SelectItem
                    bgImg={item.selet}
                    now = { myContext.dpad === null ? -1 : 10000 * myContext.snapIndex + 100 * myContext.dpad[0] + myContext.dpad[1]}
                    me = { 10000 * myContext.snapIndex + 100 * DpadtabSelect + index }
                    onClick={() => myContext.setDpad([DpadtabSelect, index])}></SelectItem>
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
          <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
            <Selector>
              {
                ThumbL.items[ThumbLtabSelect].map((item, index) => (
                  <SelectItemPrice>
                    <SelectItem
                      bgImg={item.selet}
                      now = { myContext.thumbstickL === null ? -1 : 10000 * myContext.snapIndex + 100 * myContext.thumbstickL[0] + myContext.thumbstickL[1]}
                      me = { 10000 * myContext.snapIndex + 100 * ThumbLtabSelect + index }
                      onClick={() => myContext.setThumbstickL([ThumbLtabSelect, index])}
                    >
                    </SelectItem>
                    {
                      '£'+item.price
                    }
                  </SelectItemPrice>
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
            <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
              <Selector>
                {
                  ThumbR.items[ThumbRtabSelect].map((item, index) => (
                    <SelectItemPrice>
                      <SelectItem 
                        bgImg={item.selet}
                        now = { myContext.thumbstickR === null ? -1 : 10000 * myContext.snapIndex + 100 * myContext.thumbstickR[0] + myContext.thumbstickR[1]}
                        me = { 10000 * myContext.snapIndex + 100 * ThumbRtabSelect + index }
                        onClick={() => myContext.setThumbstickR([ThumbRtabSelect, index])} />
                      {
                        '£'+item.price
                      }
                    </SelectItemPrice>
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
             <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
              <TopItems>
                {
                  StartBtn.steps.map((item, index) => (
                    <TapItem w={StartBtn.steps.length} key={ index } keys={index} active={StartBtntabSelect} onClick = {() => StartBtnSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        £{item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                }
              </TopItems>
              <Selector>
                {
                  StartBtn.items[StartBtntabSelect].map((item, index) => (
                    <SelectItem 
                      key={index} 
                      bgImg={item.selet} 
                      now = { myContext.startBtn === null ? -1 : 10000 * myContext.snapIndex + 100 * myContext.startBtn[0] + myContext.startBtn[1]}
                      me = { 10000 * myContext.snapIndex + 100 * StartBtntabSelect + index }
                      onClick={() => myContext.setStartBtn([StartBtntabSelect, index])}
                    ></SelectItem>
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
            <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
              <TopItems>
                {
                  Touchpad.steps.map((item, index) => (
                    <TapItem w={Touchpad.steps.length} key={ index } keys={index} active={TouchpadtabSelect} onClick = {() => TouchpadSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        £{item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                }
              </TopItems>
              <Selector>
                {
                  Touchpad.items[TouchpadtabSelect].map((item, index) => (
                    <SelectItem 
                      key={index} 
                      bgImg={item.selet}
                      now = { myContext.touchpad === null ? -1 : 10000 * myContext.snapIndex + 100 * myContext.touchpad[0] + myContext.touchpad[1]}
                      me = { 10000 * myContext.snapIndex + 100 * TouchpadtabSelect + index }
                      onClick={() => myContext.setTouchpad([TouchpadtabSelect, index])}
                    ></SelectItem>
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
             <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
              <Selector>
                {
                  Trim.items[TrimtabSelect].map((item, index) => (
                    <SelectItemPrice>
                      <SelectItem
                        key={index} 
                        bgImg={item.selet} 
                        now = { myContext.trim === null ? -1 : 10000 * myContext.snapIndex + 100 * myContext.trim[0] + myContext.trim[1]}
                        me = { 10000 * myContext.snapIndex + 100 * TrimtabSelect + index }
                        onClick={() => myContext.setTrim([TrimtabSelect, index])}></SelectItem>
                      {
                        '£' + item.price
                      }
                    </SelectItemPrice>
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
            <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
              <TopItems>
                {
                  Trigger.steps.map((item, index) => (
                    <TapItem w={Trigger.steps.length} key={ index } keys={index} active={TriggertabSelect} onClick = {() => TriggerSetTabSelect(index)}>
                      <span>
                        {item.name}
                      </span>
                      <span>
                        £{item.price}
                      </span>
                      <div></div>
                    </TapItem>
                  ))
                }
              </TopItems>
              <Selector>
                {
                  Trigger.items[TriggertabSelect].map((item, index) => (
                    <SelectItem
                      key={index}
                      bgImg={item.selet}
                      now = { myContext.trigger === null ? -1 : 10000 * myContext.snapIndex + 100 * myContext.trigger[0] + myContext.trigger[1]}
                      me = { 10000 * myContext.snapIndex + 100 * TriggertabSelect + index }
                      onClick={() => myContext.setTrigger([TriggertabSelect, index])}></SelectItem>
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
            <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
              <TopItems>
              </TopItems>
              <Selector>
                {
                  RearDesign.items[RearDesigntabSelect].map((item, index) => (
                    <SelectItemPrice>
                      <SelectItem
                        key={index} 
                        bgImg={item.selet}
                        now = { myContext.rearDesign === null ? -1 : 10000 * myContext.snapIndex + 100 * myContext.rearDesign[0] + myContext.rearDesign[1]}
                        me = { 10000 * myContext.snapIndex + 100 * RearDesigntabSelect + index }
                        onClick={() => myContext.setRearDesign([RearDesigntabSelect, index])}
                      ></SelectItem>
                      {
                        '£'+item.price
                      }
                    </SelectItemPrice>
                  ))
                }
              </Selector>
            </SwiperSlide>

            {/**
             * ██████╗  █████╗ ███████╗ ██████╗ ██████╗     ██████╗  █████╗  ██████╗██╗  ██╗
               ██╔══██╗██╔══██╗╚══███╔╝██╔═══██╗██╔══██╗    ██╔══██╗██╔══██╗██╔════╝██║ ██╔╝
               ██████╔╝███████║  ███╔╝ ██║   ██║██████╔╝    ██████╔╝███████║██║     █████╔╝ 
               ██╔══██╗██╔══██║ ███╔╝  ██║   ██║██╔══██╗    ██╔══██╗██╔══██║██║     ██╔═██╗ 
               ██║  ██║██║  ██║███████╗╚██████╔╝██║  ██║    ██████╔╝██║  ██║╚██████╗██║  ██╗
               ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
             * 
            */}
            <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
              <RazorDiv flag={myContext.razorBack} onClick = {() => myContext.setRazorBack(!myContext.razorBack)}>
                <span>Razorback Maxfire Modes{"  "}(£{myContext.razorBackPrice})</span>
                <label>
                  <div>

                  </div>
                </label>
              </RazorDiv>
            </SwiperSlide>
            {/**
             * 
             * ██████╗  █████╗ ██████╗ ██████╗ ██╗     ███████╗
               ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║     ██╔════╝
               ██████╔╝███████║██║  ██║██║  ██║██║     █████╗  
               ██╔═══╝ ██╔══██║██║  ██║██║  ██║██║     ██╔══╝  
               ██║     ██║  ██║██████╔╝██████╔╝███████╗███████╗
               ╚═╝     ╚═╝  ╚═╝╚═════╝ ╚═════╝ ╚══════╝╚══════╝
             */}
            <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
              <PaddleWrapper>
                <RazorDiv flag={myContext.pad_esp_flag} onClick = {() => myContext.setPad_esp_flag(!myContext.pad_esp_flag)}>
                  <span>Paddles</span>
                  <label><div></div></label>
                </RazorDiv>
                {
                  myContext.pad_esp_flag ? (
                    <Selector>
                      {
                        Paddle.items[PaddletabSelect].map((item, index) => (
                          <SelectItemPrice>
                          <SelectItem
                            key={index} bgImg={item.select}
                            now = { myContext.paddle === null ? -1 : 10000 * myContext.snapIndex + 100 * myContext.paddle[0] + myContext.paddle[1]}
                            me = { 10000 * myContext.snapIndex + 100 * PaddletabSelect + index }
                            onClick={() => myContext.setPaddle([PaddletabSelect, index])}></SelectItem>
                            {
                              '£'+item.price
                            }
                          </SelectItemPrice>
                        ))
                      }
                    </Selector>
                  ) : (
                    <span></span>
                  )
                }
              </PaddleWrapper>
            </SwiperSlide>
            {/**
             * ██╗     ███████╗███████╗████████╗    ██████╗  ██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗  ██████╗ ██████╗     ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗
               ██║     ██╔════╝██╔════╝╚══██╔══╝    ██╔══██╗██╔═══██╗████╗ ████║██║████╗  ██║██╔══██╗██╔═══██╗██╔══██╗    ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║
               ██║     █████╗  █████╗     ██║       ██║  ██║██║   ██║██╔████╔██║██║██╔██╗ ██║╚█████╔╝██║   ██║██████╔╝    ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║
               ██║     ██╔══╝  ██╔══╝     ██║       ██║  ██║██║   ██║██║╚██╔╝██║██║██║╚██╗██║██╔══██╗██║   ██║██╔══██╗    ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║
               ███████╗███████╗██║        ██║       ██████╔╝╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║╚█████╔╝╚██████╔╝██║  ██║    ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║
               ╚══════╝╚══════╝╚═╝        ╚═╝       ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝ ╚════╝  ╚═════╝ ╚═╝  ╚═╝    ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝
             */}
             <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
              <LDominWrapper>
                <RazorDiv flag={!myContext.pad_esp_flag} onClick = {() => myContext.setPad_esp_flag(!myContext.pad_esp_flag)}>
                  <span>Left Domin button</span>
                  <label><div></div></label>
                </RazorDiv>
                {
                  !myContext.pad_esp_flag ? (
                    <LDominContainer>
                      <div>
                        <div>
                          <div>
                            <span>{DominSelection.steps.name}</span>
                          </div>
                          <Selector>
                            {
                              DominSelection.items.map((item, index) => (
                                <SelectItemPrice>
                                  <SelectItem
                                    key={index}
                                    now = { myContext.ldomin_1 === null ? -1 : 10000 * myContext.snapIndex + 100 * myContext.ldomin_1}
                                    me = { 10000 * myContext.snapIndex + 100 * index }
                                    bgImg={item.select}
                                    onClick={() => myContext.setLdomin1(index)}></SelectItem>
                                    {
                                      '£'+item.price
                                    }
                                </SelectItemPrice>
                              ))
                            }
                          </Selector>
                        </div>
                        {
                          myContext.ldomin_1 !== null ? (
                            <div>
                              <div><span>{DominL.steps[0].name}</span></div>
                              <Selector>
                              {
                                DominL.items.map((item, index) => (
                                  <SelectItemPrice>
                                    <SelectItem 
                                      key = {index} 
                                      bgImg = {item.select} 
                                      now = { myContext.ldomin_2 === null ? -1 : 10000 * myContext.snapIndex + myContext.ldomin_2}
                                      me = { 10000 * myContext.snapIndex + index }
                                      onClick = {() => myContext.setLdomin2(index)}></SelectItem>
                                      {
                                        '£'+item.price
                                      }
                                  </SelectItemPrice>
                                ))
                              }
                              </Selector>
                            </div>
                          ) : (() => {})()
                        }
                      </div>
                    </LDominContainer>
                  ) : (
                    <span></span>
                  )
                }
              </LDominWrapper>
            </SwiperSlide>
            {/**
             * ██████╗ ██╗ ██████╗ ██╗  ██╗████████╗    ██████╗  ██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗  ██████╗ ██████╗     ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗
               ██╔══██╗██║██╔════╝ ██║  ██║╚══██╔══╝    ██╔══██╗██╔═══██╗████╗ ████║██║████╗  ██║██╔══██╗██╔═══██╗██╔══██╗    ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║
               ██████╔╝██║██║  ███╗███████║   ██║       ██║  ██║██║   ██║██╔████╔██║██║██╔██╗ ██║╚█████╔╝██║   ██║██████╔╝    ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║
               ██╔══██╗██║██║   ██║██╔══██║   ██║       ██║  ██║██║   ██║██║╚██╔╝██║██║██║╚██╗██║██╔══██╗██║   ██║██╔══██╗    ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║
               ██║  ██║██║╚██████╔╝██║  ██║   ██║       ██████╔╝╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║╚█████╔╝╚██████╔╝██║  ██║    ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║
               ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝ ╚════╝  ╚═════╝ ╚═╝  ╚═╝    ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝
             */}
             <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
              <LDominWrapper>
                <RazorDiv flag={!myContext.pad_esp_flag} onClick = {() => myContext.setPad_esp_flag(!myContext.pad_esp_flag)}>
                  <span>Left Domin button</span>
                  <label><div></div></label>
                </RazorDiv>
                {
                  !myContext.pad_esp_flag ? (
                    <LDominContainer>
                      <div>
                        <div>
                          <div>
                            <span>{DominSelection.steps.name}</span>
                          </div>
                          <Selector>
                            {
                              DominSelection.items.map((item, index) => (
                                <SelectItemPrice>
                                  <SelectItem
                                    key={index}
                                    bgImg={item.select}
                                    now = { myContext.rdomin_1 === null ? -1 : 10000 * myContext.snapIndex + 100 * myContext.rdomin_1}
                                    me = { 10000 * myContext.snapIndex + 100 * index }
                                    onClick={() => myContext.setRdomin1(index)}></SelectItem>
                                    {
                                      '£'+item.price
                                    }
                                </SelectItemPrice>
                              ))
                            }
                          </Selector>
                        </div>
                        {
                          myContext.rdomin_1 !== null ? (
                            <div>
                              <div><span>{DominR.steps[0].name}</span></div>
                              <Selector>
                                {
                                  DominR.items.map((item, index) => (
                                    <SelectItemPrice>
                                      <SelectItem
                                        key={index}
                                        bgImg={item.select}
                                        now = { myContext.rdomin_2 === null ? -1 : 10000 * myContext.snapIndex + myContext.rdomin_2}
                                        me = { 10000 * myContext.snapIndex + index }
                                        onClick={() => myContext.setRdomin2(index)}>
                                      </SelectItem>
                                      {
                                        '£'+item.price
                                      }
                                    </SelectItemPrice>
                                  ))
                                }
                              </Selector>
                            </div>
                          ) : (() => {})()
                        }
                      </div>
                    </LDominContainer>
                  ) : (
                    <span></span>
                  )
                }
              </LDominWrapper>
            </SwiperSlide>
            {/**
             * ██████╗ ██╗ ██████╗ ██╗████████╗ █████╗ ██╗         ████████╗██████╗ ██╗ ██████╗  ██████╗ ███████╗██████╗ ███████╗
               ██╔══██╗██║██╔════╝ ██║╚══██╔══╝██╔══██╗██║         ╚══██╔══╝██╔══██╗██║██╔════╝ ██╔════╝ ██╔════╝██╔══██╗██╔════╝
               ██║  ██║██║██║  ███╗██║   ██║   ███████║██║            ██║   ██████╔╝██║██║  ███╗██║  ███╗█████╗  ██████╔╝███████╗
               ██║  ██║██║██║   ██║██║   ██║   ██╔══██║██║            ██║   ██╔══██╗██║██║   ██║██║   ██║██╔══╝  ██╔══██╗╚════██║
               ██████╔╝██║╚██████╔╝██║   ██║   ██║  ██║███████╗       ██║   ██║  ██║██║╚██████╔╝╚██████╔╝███████╗██║  ██║███████║
               ╚═════╝ ╚═╝ ╚═════╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝       ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝
             */}
             <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
              <RazorDiv flag={myContext.digital_trigger} onClick = {() => myContext.setDigital_trigger(!myContext.digital_trigger)}>
                <span>Digital Triggers{"  "}(£{myContext.digital_trigger_price})</span>
                <label>
                  <div>

                  </div>
                </label>
              </RazorDiv>
            </SwiperSlide>
            {/**
             * 
             * ████████╗███████╗██╗  ██╗████████╗
               ╚══██╔══╝██╔════╝╚██╗██╔╝╚══██╔══╝
                  ██║   █████╗   ╚███╔╝    ██║   
                  ██║   ██╔══╝   ██╔██╗    ██║   
                  ██║   ███████╗██╔╝ ██╗   ██║   
                  ╚═╝   ╚══════╝╚═╝  ╚═╝   ╚═╝   
             */}
             <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
              <RazorDiv flag={myContext.isText} onClick = {() => myContext.setIsText(!myContext.isText)}>
                <span>
                  {
                    !myContext.isText ? 'Add ' : 'Remove '
                  } 
                  text{"  "}(£{myContext.textPrice})
                  </span>
                <label> <div /> </label>
              </RazorDiv>
              {
                !myContext.isText ? (() => {})() : (
                  <TextDiv>
                    <input type="text" className="added-text" maxLength="14" value={myContext.textVal} onChange={(e) => myContext.setTextVal(e.target.value)} />
                    <select className="font-type" onChange={(e) => myContext.setFamily(e.target.value)}>
                      {
                        myContext.fontFamiles.map((item, index) => (
                          <FontOption family={item.family} key={index} value={index} >
                            {
                              item.name
                            }
                          </FontOption>
                          
                        ))
                      }
                    </select>
                    <select className="font-type" onChange={(e) => myContext.setTextColor(e.target.value)} >
                      <option value='black'>Black</option>
                      <option value='white'>White</option>
                      <option value='blue'>Blue</option>
                      <option value='red'>Red</option>
                      <option value='yellow'>Yellow</option>
                      <option value='green'>Green</option>
                    </select>
                    <input type="number" className="added-text" value={myContext.fontSize} onChange={(e) => myContext.setFontSize(e.target.value)} placeholder="Text size"/>
                  </TextDiv>
                )
              } 
             </SwiperSlide>
             {/**
              * ██╗      ██████╗  ██████╗  ██████╗ 
                ██║     ██╔═══██╗██╔════╝ ██╔═══██╗
                ██║     ██║   ██║██║  ███╗██║   ██║
                ██║     ██║   ██║██║   ██║██║   ██║
                ███████╗╚██████╔╝╚██████╔╝╚██████╔╝
                ╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝ 
              */}
              <SwiperSlide style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                <RazorDiv flag={myContext.isLogo} onClick = {() => myContext.setLogo(!myContext.isLogo)}>
                  <span>
                    {
                      !myContext.isLogo ? 'Add ' : 'Remove '
                    } 
                    Logo
                    </span>
                  <label> <div /> </label>
                </RazorDiv>
                {
                  !myContext.isLogo ? (() => {})() : (
                    <TextDiv>
                      <ImageUploading
                        value={myContext.images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                      >
                        {({
                          imageList,
                          onImageUpload,
                          onImageRemoveAll,
                          onImageUpdate,
                          onImageRemove,
                          isDragging,
                          dragProps,
                        }) => (
                          // write your building UI
                          <div className="upload__image-wrapper">
                            <button
                              style={isDragging ? { color: 'red' } : undefined}
                              onClick={onImageUpload}
                              {...dragProps}
                            >
                              Click here to upload image
                            </button>
                          </div>
                        )}
                      </ImageUploading>
                    </TextDiv>
                  )
                } 
              </SwiperSlide>
        </Swiper>
      </MediumDiv>
      <ConfirmDiv>
        <button onClick={() => myContext.func_reset(myContext.snapIndex)}>Reset</button>
      </ConfirmDiv>
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
    justify-content: space-between;
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
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
`

const TapItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(75% / ${props => props.w});
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
  height: 70%;
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

const ConfirmDiv = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    padding: 10px 30px;
    border: 1px solid ${props => props.theme.ThemeColor};
    background-color: ${props => props.theme.HeadIconBgColor};
    border-radius: 10px;
    font-family: 'Rajdhani-Medium';
    color: ${props => props.theme.color}
  }
`

const Selector = styled.div`
  background-color: ${props => props.theme.ToolBgColor};
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 20px;
  justify-content: flex-start;
  align-content: flex-start;
  height: 100%;
  font-family: 20px;
`

const SelectItem = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  outline: ${props => props.now !== props.me ? '2px solid white' : `4px solid ${props.theme.ThemeColor}`};
  color: white;
  background-image: url(${props => props.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
`

const SelectItemPrice = styled.div`
  text-align: center;
  color: ${props => props.theme.color};
`

const RazorDiv = styled.div`
  width: calc(100% - 60px);
  display: flex;
  background-color: ${props => props.theme.DirectIconBgColor};
  margin: 10px;
  padding: 0 20px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  font-family: 'Rajdhani-Medium';
  color: ${props => props.theme.color};
  border: ${props => props.theme.DirectIconBorder};
  & > label:nth-child(2) {
    width: 60px;
    height: 50%;
    background-color: ${props => props.flag ? props.theme.ThemeColor : '#aaa'};
    border-radius: 20px;
    position: relative;
    div {
      position: absolute;
      background-color: white;
      display: inline-block;
      height: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 20px;
      transition: all .5s;
      top: 0;
      ${props => props.flag ? 'right' : 'left'}: 1px;
    }
  }
`

const PaddleWrapper = styled.div`
  width: 100%;
`
const LDominWrapper = styled.div`
  width: 100%;
`

const LDominContainer = styled.div`
  padding: 0 10px;
  & > div:nth-child(1) {
    border: 1px solid ${props => props.theme.ThemeColor};
    & > div:nth-child(1), > div:nth-child(2) {
      & > div:nth-child(1) {
        display: flex;
        background-color: ${props => props.theme.DirectIconBgColor};
        margin: 10px;
        padding: 0 20px;
        height: 50px;
        align-items: center;
        justify-content: space-between;
        font-family: 'Rajdhani-Medium';
        color: ${props => props.theme.color};
        border: ${props => props.theme.DirectIconBorder};
        color: ${props => props.theme.color}
      }
    }
  }
`

const TextDiv = styled.div`
  margin: 10px;
  border: 1px solid ${props => props.theme.ThemeColor};
  padding: 10px;
  color: ${props => props.theme.color};
  .added-text {
    color: ${props => props.theme.color};
    width: calc(100% - 2 * 10px);
    padding: 10px;
    outline: none;
    border: ${props => props.theme.DirectIconBorder};
    background-color: ${props => props.theme.HeadIconBgColor};
    margin-bottom: 20px;
  }
  .font-type {
    color: ${props => props.theme.color};
    width: 100%;
    padding: 10px;
    outline: none;
    border: ${props => props.theme.DirectIconBorder};
    background-color: ${props => props.theme.DirectIconBgColor};
    margin-bottom: 20px;
  }
`

const FontOption = styled.option`
  width: 100%;
  padding: 10px;
  font-size: 20px;
  outline: none;
  border: ${props => props.theme.DirectIconBorder};
  margin-bottom: 20px;
  min-height: 30px;
  height: 20px;
  font-family: ${props => props.family};
`;

const UploadImg = styled.div`
  margin: 10px;
  border: 1px solid ${props => props.theme.ThemeColor};
  padding: 10px;
  color: ${props => props.theme.color};
`

export default Tools;