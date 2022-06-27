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
    <Wrapper className="container" display={myContext.isLogo} sideflag={myContext.sideflag}>
      {
				myContext.images.length !== 0 ? (
					<img class="target" src={myContext.images[0]['data_url']} style={{width: "200px", zIndex:"300"}}></img>
				) : (() => {})()
			}
			{
				myContext.isLogo && myContext.images.length > 0 && myContext.sideflag && myContext.snapIndex === 16 ?
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
	display: ${props => props.display ? 'flex' : 'none'};
	transition: all 1s;
	transform: ${props => !props.sideflag ? 'scale(0.3)' : 'scale(1)'}
	/* top: ${props => !props.sideflag ? '0' : '100px'};
	left: ${props => !props.sideflag ? '0' : '100px'};
	top: ${props => !props.sideflag ? '64.5%' : '30%'};
	transform: ${props => !props.sideflag ? 'scale(0.3)' : 'scale(1)'}; */
`