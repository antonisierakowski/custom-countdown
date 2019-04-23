import React from 'react'
import styled from 'styled-components'
import { Icon, IconButton, Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { tabletQuery, mobileQuery } from '../GlobalStyle'

const PreviewContainer = styled(Card)`
    &&& {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 1rem;
        border-top-left-radius: ${props => !props.border ? 'inherit' : '0'};
        border-top-right-radius: ${props => !props.border ? 'inherit' : '0'};
        border-bottom-left-radius: ${props => !props.border ? '0' : 'inherit'};
        border-bottom-right-radius: ${props => !props.border ? '0' : 'inherit'};
    }
`

const ActionContainer = styled(CardContent)`
    &&& {
        max-height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2rem;
        padding: 0.2rem;
    }
`

export default function PreviewGfx(props) {
    const { data, dataKey, index, setIndex, text, border} = props

    const handlePrevious = () => {
        setIndex(index - 1 < 0 ? data.length - 1 : index - 1)
    }

    const handleNext = () => {
        setIndex(index + 1 === data.length ? 0 : index + 1)
    }    

    return (
        <PreviewContainer border={border} >
            <CardMedia image={data[index][dataKey]} style={{height: '100%'}}/>
            <ActionContainer>
                <IconButton aria-label="previous" onClick={handlePrevious} size='small'>
                    <Icon fontSize='small'>navigate_before</Icon>
                </IconButton>
                <Typography style={{fontSize: '1.5rem'}} color='textSecondary'>{text}</Typography>
                <IconButton aria-label="next" onClick={handleNext} size='small'>
                    <Icon fontSize='small'>navigate_next</Icon>
                </IconButton>                    
            </ActionContainer>
        </PreviewContainer>
    )
}



// const CardMediaX = withStyles({
//     media: {
//         height: '70%',
//     },
// })(CardMedia);
  