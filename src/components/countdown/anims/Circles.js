import React from 'react'
import styled from 'styled-components';

const Circles = props => {
	return (
		<CirclesProvider>
			<div className='circles-container'>
				<div className="circle" />
				<div className="circle-2" />
				<div className="circle-3" />
				<div className="circle-4" />
				<div className="circle-5" />
				<div className="circle-6" />
				<div className="circle-7" />
				<div className="circle-8" />
				<div className="circle-9" />
				<div className="circle-10" />
			</div>
		</CirclesProvider>
	)
}

const CirclesProvider = styled.div`

.circles-container {
	position: relative;
	top: -7rem;
}

.circle {
  width: 0.5rem;
  height: 15rem;
  background: #93D4F6;
  border-radius: 5rem;
  position: absolute;
  animation: move 1s linear infinite;
  top:50%;
  left: 50%;
}

.circle-2 {
	width: 0.5rem;
  height: 15rem;
  background: #D6FCFF;
  border-radius: 5rem;
  position: absolute;
  animation: move 1.2s linear infinite;
  top:50%;
  left: 50%;
}

.circle-3 {
	width: 0.5rem;
  height: 15rem;
  background: #D3ECE1;
  border-radius: 5rem;
  position: absolute;
  animation: move 1.1s linear infinite;
  top:50%;
  left: 50%;
}

.circle-4 {
	width: 0.5rem;
  height: 15rem;
  background: #F2E3C6;
  border-radius: 5rem;
  position: absolute;
  animation: move 1.4s linear infinite;
  top:50%;
  left: 50%;
}

.circle-4 {
	width: 0.5rem;
  height: 15rem;
  background: #F2E3C6;
  border-radius: 5rem;
  position: absolute;
  animation: move 1.4s linear infinite;
  top:50%;
  left: 50%;
}

.circle-5 {
	width: 0.5rem;
  height: 15rem;
  background: #EED2E8;
  border-radius: 5rem;
  position: absolute;
  animation: move 1.5s linear infinite;
  top:50%;
  left: 50%;
}

.circle-6 {
	width: 0.5rem;
  height: 15rem;
  background: #B9F6E9;
  border-radius: 5rem;
  position: absolute;
  animation: move 1.6s linear infinite;
  top:50%;
  left: 50%;
}

.circle-7 {
	width: 0.5rem;
  height: 15rem;
  background: #F2E3C6;
  border-radius: 5rem;
  position: absolute;
  animation: move 1.7s linear infinite;
  top:50%;
  left: 50%;
}

.circle-8 {
	width: 0.5rem;
  height: 15rem;
  background: #F8A89D;
  border-radius: 5rem;
  position: absolute;
  animation: move 1.8s linear infinite;
  top:50%;
  left: 50%;
}
.circle-9 {
	width: 0.5rem;
  height: 15rem;
  background: #539770;
  border-radius: 5rem;
  position: absolute;
  animation: move 1.9s linear infinite;
  top:50%;
  left: 50%;
}
.circle-10 {
	width: 0.5rem;
	height: 15rem;
	background: #FEDECF;
	border-radius: 0rem;
	position: absolute;
	animation: move 2.0s linear infinite;
	top:50%;
	left: 50%;
}

@keyframes move {
  from {
	transform: rotate(0deg) 
			   translate(-10rem)
			   rotate(0deg)
	
  }
  to {
		transform: rotate(360deg) 
			   translate(-10rem)
			   rotate(360deg)
  }
}
`

export default Circles