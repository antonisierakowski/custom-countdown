import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Typography, Button } from '@material-ui/core'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (

            <HeaderContainer >
                <Typography variant='h6'>
                    <NavLink to='/'>Custom Countdown</NavLink>
                </Typography>
            </HeaderContainer>

    )
}

const HeaderContainer = styled(AppBar)`
    &&& {
        padding: 0.5rem 6rem;
        position: fixed;
        /* bottom: 0; */
        /* top: auto; */
    }

`