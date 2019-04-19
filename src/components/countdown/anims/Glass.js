import React from 'react'
import styled from 'styled-components';

const Glass = props => {
    return (
        <GlassProvider>
            <div className="glass"/>
            <div className="stem"/>
            <div className="base"/>
        </GlassProvider>
    )
}

const GlassProvider = styled.div`
    .glass {
        position: relative;
        margin: 0 auto;
        height: 12rem;
        width: 10rem;
        border-radius: 0 0 5.5rem 5.5rem;
        padding-top: 5rem;
        box-sizing: border-box;
        background-color: rgba(0,222,255, 0.3);
    }
    .glass::after {
        position: absolute;
        bottom: 0;

        content: "";
        width: 10rem;
        height: 5rem;
        border-radius: 0 0 5rem 5rem;
        display:block;
        z-index: 2;
        background-color: rgba(255,0,0, 0.5);
    }
    .stem {
        margin: 0 auto;
        height: 7rem;
        width: 1rem;
        background-color: rgba(0,222,255, 0.3);
        border-bottom: 0.2rem solid rgb(0,155.4,178.5) ;
        border-radius: 0 0 0.5rem 0.5rem;
    }
    .base {
        margin: 0 auto;
        margin-top: -0.6rem;
        width: 10rem;
        height: 2.5rem;
        border-radius: 50%;
        background-color: rgba(0,222,255, 0.3);
    }
`

export default Glass