import React from 'react'
import styled from 'styled-components';

const IceCream = props => {
    return (
        <IceCreamProvider className='container'>
            <div className="icecream">
                <div className="flavor">
                    <div className="flavours" />
                </div>
                <div className="stick" />
            </div>
        </IceCreamProvider>
    )
}

const IceCreamProvider = styled.div`


.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #33485F;
}

.icecream > .flavor {
  position: relative;
  width: 190px;
  height: 260px;
  border-radius: 80px 80px 10px 10px;
  overflow: hidden;
}
.icecream > .flavor:after {
  content: '';
  position: absolute;
  left: 21px;
  bottom: 20px;
  width: 20px;
  height: 170px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.5);
}

.icecream > .flavor > .flavours {
  position: relative;
  top: 0%;
  left: -20%;
  width: 140%;
  height: 120%;
  background-image: linear-gradient(0deg, #f63a99 25%, #30dcf6 25%, #30dcf6 25%, #30dcf6 50%, #f2d200 50%, #f2d200 50%, #f2d200 75%, #70ca5c 75%);
  background-position: 0px 0px;
  background-repeat: repeat-y;
    animation: flavours 100s linear infinite;
    transform: rotate(155deg);
}

.icecream > .stick {
  width: 57px;
  height: 86px;
  background: #E09C5F;
  border-radius: 0 0 25px 25px;
  display: block;
  margin: 0 auto;
}
.icecream > .stick:after {
  display: block;
  content: '';
  width: 100%;
  height: 24px;
  background: #8D613B;
}

@keyframes flavours {
  to {
    background-position: 0 -1000vh;
  }
}

`

export default IceCream