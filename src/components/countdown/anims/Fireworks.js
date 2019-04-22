import React from 'react'
import styled from 'styled-components';

const Fireworks = props => {

	return (
		<FireworksProvider>
			<div className="pyro">
				<div className="before"/>
				<div className="after"/>
			</div>
		</FireworksProvider>
	)
}

const FireworksProvider = styled.div`
	
.pyro > .before, .pyro > .after {
  /* position: absolute; */
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
}

.pyro > .after {
  animation-delay: 1.25s, 1.25s, 1.25s;
  animation-duration: 1.25s, 1.25s, 6.25s;
}

@keyframes bang {
  to {
    box-shadow: 93px -329.6666666667px #7300ff, 230px -61.6666666667px #004dff, 248px 19.3333333333px #00ff73, -185px -141.6666666667px #ff7300, 180px -281.6666666667px #51ff00, 65px -277.6666666667px #0d00ff, 136px -203.6666666667px #73ff00, -99px -31.6666666667px #00ff04, 41px -54.6666666667px #2bff00, -184px -114.6666666667px #00ff84, 0px -191.6666666667px #00ffd5, -34px -1.6666666667px #ff001e, 79px -137.6666666667px #00ffbb, -113px 45.3333333333px #ff9500, 229px -61.6666666667px #fb00ff, 102px -80.6666666667px #ff00d0, -188px -79.6666666667px #00ff62, -113px -111.6666666667px #ff0066, -134px -88.6666666667px #66ff00, -52px 75.3333333333px #d9ff00, -66px -73.6666666667px #0051ff, -189px -348.6666666667px #2600ff, -61px -322.6666666667px #0062ff, -7px -266.6666666667px #00eaff, -135px -167.6666666667px #aaff00, -216px -274.6666666667px #11ff00, 170px -385.6666666667px #ff0040, -173px -115.6666666667px #00ff95, -156px -125.6666666667px #5900ff, -95px 69.3333333333px #ff7300, -27px 73.3333333333px #1500ff, -184px -25.6666666667px #ff0033, -30px -312.6666666667px #9100ff, -206px -36.6666666667px #00ff8c, -68px -344.6666666667px #ff002f, -189px -169.6666666667px #00ff6f, -228px -375.6666666667px #9500ff, 200px -181.6666666667px #11ff00, -26px -177.6666666667px #006aff, -234px -58.6666666667px #ff2f00, 99px -238.6666666667px #ff0062, -65px -269.6666666667px #e1ff00, 30px 18.3333333333px #00ffee, 79px 1.3333333333px #ffae00, -245px -263.6666666667px #0d00ff, 107px -192.6666666667px #0095ff, -140px -113.6666666667px #00ff26, 30px -243.6666666667px #ffbb00, 30px -101.6666666667px #0066ff, -86px 41.3333333333px #ff1e00, -75px -330.6666666667px #ff0055;
  }
}

@keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}

@keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}

`

export default Fireworks



