import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { tabletQuery, mobileQuery } from './GlobalStyle'

export default function Header() {
    return (
        <HeaderContainer className='animated fadeIn slow'>
            <Typography variant='h6' color='inherit'>
                <NavLink to={'/'}>Custom Countdown</NavLink>
            </Typography>
            <Typography variant='h5' color='inherit'>
                <a href='https://github.com/antonisierakowski'><i className="fab fa-github" /></a>
                <a href='https://www.linkedin.com/in/antoni-sierakowski/'><i style={{marginLeft: '1rem'}} className="fab fa-linkedin" /></a>
            </Typography>
        </HeaderContainer>

    )
}

const HeaderContainer = styled.div`
    &&& {
        padding: 0.5rem 6rem;
        @media (max-width: ${tabletQuery}) and (min-width: ${mobileQuery}) { padding: 0.5rem 5rem; }
        @media (max-width: ${mobileQuery}) { padding: 0.5rem 3rem; background: rgba(1,1,1,0.2); }
        @media (max-height: 400px) and (orientation: landscape) { background: rgba(1,1,1,0.2); }
        position: fixed;
        top: 0;
        width: 100%;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`