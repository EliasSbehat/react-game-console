import * as React from "react";
import Moveable from "react-moveable";
import styled from "styled-components";
import AppContext from "../../context/context";

export default function TextMove() {
	const myContext = React.useContext(AppContext);
  const [target, setTarget] = React.useState();
  const [frame] = React.useState({
    translate: [0, 0],
    rotate: 0
  });
  const moveableRef1 = React.useRef();
  React.useEffect(() => {
    const target = document.querySelector('.target1');
		if (target !== null) {
			setTarget(target);
	
			target.addEventListener("load", () => {
				setTimeout(() => {
					moveableRef1.current.updateRect();
				}, 2000);
			});
		}
  }, [myContext.fontSize]);
  return (
    <Wrapper className="container1" display={myContext.isText} sideflag={myContext.sideflag} ff={myContext.fontFamiles[myContext.familyId].family} tc={myContext.textColor} ts={myContext.fontSize+"px "}>
      {
        <h1 class="target1" style={{width: "200px", zIndex:"300"}}>
          {
            myContext.textVal
          }
        </h1>
			}
			{
				myContext.isText && myContext.sideflag && myContext.snapIndex === 15 && myContext.textVal.length > 0 ?
					<Moveable
						ref={moveableRef1}
						target={target}
						draggable={true}
						throttleDrag={0}
						resizable={true}
						throttleResize={0}
						rotatable={true}
            origin={false}
						rotationPosition={"top"}
						throttleRotate={0}
						onDragStart={({ set }) => {
							set(frame.translate);
						}}
						onDrag={({ beforeTranslate }) => {
							frame.translate = beforeTranslate;
						}}
						onResizeStart={({ setOrigin, dragStart }) => {
							setOrigin(["%", "%"]);
							dragStart && dragStart.set(frame.translate);
						}}
						onResize={({ target, width, height, drag }) => {
							frame.translate = drag.beforeTranslate;
							target.style.width = `${width}px`;
							target.style.height = `${height}px`;
						}}
						onRotateStart={({ set }) => {
							set(frame.rotate);
						}}
						onRotate={({ beforeRotate }) => {
							frame.rotate = beforeRotate;
						}}
						onRender={({ target }) => {
							target.style.transform = `translate(${frame.translate[0]}px, ${
								frame.translate[1]
							}px) rotate(${frame.rotate}deg)`;
						}}
					/>
				: (() => {})()
			}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  word-break: break-all;
  z-index: 100;
  word-break: keep-all;
  text-align: center;
	display: ${props => props.display ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
	transition: all 1s;
	transform: ${props => !props.sideflag ? 'scale(0.3)' : 'scale(1)'};
	/* top: ${props => !props.sideflag ? '64.5%' : '30%'}; */
	top: ${props => !props.sideflag ? '0' : '100px'};
	/* left: 100px; */
  h1 {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.ts};
    font-family: ${props => props.ff};
    color: ${props => props.tc};
  }
`