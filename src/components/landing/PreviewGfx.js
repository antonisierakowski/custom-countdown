import React from 'react'
import styled from 'styled-components'
import { Icon, IconButton, Card, CardMedia, CardContent, Typography } from '@material-ui/core'

const PreviewContainer = styled(Card)`
    &&& {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 1rem;
        border-radius: inherit;
        /* box-sizing: content-box; */
/*   
        transition: border-color 0.3s;
        &:hover {
            
            border-color: white;
        } */
    }
`

const ActionContainer = styled(CardContent)`
    &&& {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2rem;
        padding: 0.2rem;
    }
`

export default function PreviewGfx(props) {
    const { data, dataKey, index, setIndex, text} = props

    const handlePrevious = () => {
        setIndex(index - 1 < 0 ? data.length - 1 : index - 1)
    }

    const handleNext = () => {
        setIndex(index + 1 === data.length ? 0 : index + 1)
    }    

    return (
        <PreviewContainer >
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
  