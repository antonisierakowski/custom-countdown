import React, { useState, useEffect } from 'react'
import CopyUrlContainer from './styled/CopyUrlContainer'
import CopyUrlField from './styled/CopyUrlField'
import { IconButton, Icon, Tooltip } from '@material-ui/core'

export default function CopyUrl() {
    const [ isCopied, setIsCopied ] = useState(false)

    const url = document.location.host + document.location.pathname

    function handleCopy() {
        const textField = document.createElement('textarea')
        textField.innerText = url;
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 800)
    }

 


    return (
        <CopyUrlContainer className='animated fadeInUp fast'>
            share your countdown:
            <div>
                <CopyUrlField>
                    <span className={isCopied ? 'animated rubberBand fast' : ''}>
                        {url}
                    </span>
                </CopyUrlField>
                <Tooltip title="Copy to clipboard" >
                    <IconButton onClick={handleCopy}>
                        <Icon style={{fontSize: '2rem', color: 'white'}}>file_copy</Icon>
                    </IconButton>
                </Tooltip>
            </div>
        </CopyUrlContainer>
    )
}
