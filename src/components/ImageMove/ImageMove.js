import * as React from "react";
import Moveable from "react-moveable";
import styled from "styled-components";
import AppContext from "../../context/context";

export default function ImageMove() {
	const myContext = React.useContext(AppContext);
  const [target, setTarget] = React.useState();
  const [frame] = React.useState({
    translate: [0, 0],
    rotate: 0
  });
  const moveableRef = React.useRef();
  React.useEffect(() => {
    const target = document.querySelector('.target');
		if (target !== null) {
			setTarget(target);
	
			target.addEventListener("load", () => {
				setTimeout(() => {
					moveableRef.current.updateRect();
				}, 2000);
			});
		}
  }, [myContext.images]);
  return (
    <Wrapper display={myContext.isLogo} sideflag={myContext.sideflag}>
      {
				myContext.images.length !== 0 ? (
					<img id="imagemove" src={myContext.images[0]['data_url']} style={{width: "100%", height: "100%", zIndex:"300"}} className="target"></img>
				) : (() => {})()
			}
			{
				myContext.isLogo && myContext.images.length > 0 && myContext.sideflag && myContext.imgStatus ?
					<Moveable
						ref={moveableRef}
						target={target}
						draggable={true}
						throttleDrag={0}
						resizable={true}
						throttleResize={0}
						rotatable={true}
						rotationPosition={"top"}
						throttleRotate={0}
						origin={false}
						keepRatio={true}
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
						renderDirections={["nw", "ne", "se", "sw"]}
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
	display: ${props => props.display ? 'flex' : 'none'};
	transition: all 1s;
	width: 100%;
	height: 100%;
	.moveable-control-box {
		position: fixed !important;
		top: unset;
		left: unset;
	}
	img {
		cursor: grab;
	}
`