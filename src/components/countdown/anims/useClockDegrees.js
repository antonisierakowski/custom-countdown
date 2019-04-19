import React from 'react'
import styled from 'styled-components';
import useClockDegrees from '../../hooks/useClockDegrees'

const Clock = props => {
    const { hourDeg, minuteDeg, secondDeg} = useClockDegrees();

    return (
        <ClockProvider
            hourDeg={hourDeg}
            minuteDeg={minuteDeg}
            secondDeg={secondDeg}
        >
            <div className="circle">
                <div className="face">
                    <div className="hour"/>
                    <div className="minute"/>
                    <div className="second"/>
                </div>
            </div>
        </ClockProvider>
    )
}

const ClockProvider = styled.div`
    .circle {
        width: 180px;
        height: 180px;
        margin: 0 auto;
        position: relative;
        border: 8px solid white;
        border-radius: 50%;
    
    .face {
        width: 100%;
        height: 100%;

        &:after {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 12px;
            height: 12px;
            margin: -6px 0 0 -6px;
            background: white;
            border-radius: 6px;
            content: "";
            display: block;
        }

        .hour, .minute, .second {
            width: 0;
            height: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            background: white;
            border-radius: 4px 0 0 4px;
        }

        .minute, .second {
            transform-origin: 50% 100%;
        }

        .hour {
            margin: -4px 0 -4px -25%;
            padding: 4px 0 4px 25%;
            transform-origin: 100% 50%;
            transform: rotate(${props => props.hourDeg}deg);
        }

        .minute {
            margin: -40% -3px 0;
            padding: 40% 3px 0;
            transform: rotate(${props => props.minuteDeg}deg);
        }

        .second {
            margin: -40% -1px 0 0;
            padding: 40% 1px 0;
            transform: rotate(${props => props.secondDeg}deg);
        }
    }
}
`

export default Clock



