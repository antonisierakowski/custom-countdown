import React from 'react'
import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper'

const PreviewContainer = styled(Paper)`
    &&& {
        width: 30rem;
        height: 15rem;
        background-size: cover;
        background-position: center center;
        
    }
`

export default function PreviewGfx(props) {
    const { data, index, setIndex } = props

    const background = {
        backgroundImage: `url(${data[index].url})`,
    }

    const handlePrevious = () => {
        setIndex(index - 1 < 0 ? data.length - 1 : index - 1)
    }

    const handleNext = () => {
        setIndex(index + 1 == data.length ? 0 : index + 1)
    }

    return (
        <PreviewContainer style={background}>
            <IconButton aria-label="previous" onClick={handlePrevious}>
                <Icon>navigate_before</Icon>
            </IconButton>
            <IconButton aria-label="next" onClick={handleNext}>
                <Icon>navigate_next</Icon>
            </IconButton>
        </PreviewContainer>
    )
}