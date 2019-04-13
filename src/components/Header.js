import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export default function Header() {
    return (
        <AppBar position='absolute'> 
            <HeaderContainer>
                <Typography variant='h6'>
                    Custom Countdown
                </Typography>
                Find random countdown
            </HeaderContainer>
        </AppBar>
    )
}

const HeaderContainer = styled.div`
    padding: 0.5rem 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`