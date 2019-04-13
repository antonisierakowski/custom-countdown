import React from 'react'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper'

export default function PreviewGfx(props) {
    return (
        <Paper>
            <IconButton aria-label="previous">
                <Icon>navigate_before</Icon>
            </IconButton>
            <IconButton aria-label="next">
                <Icon>navigate_next</Icon>
            </IconButton>
        </Paper>
    )
}
