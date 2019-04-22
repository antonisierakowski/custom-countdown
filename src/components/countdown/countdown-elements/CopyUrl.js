import React, { useState, useEffect, useRef } from 'react'
import CopyUrlContainer from './styled/CopyUrlContainer'
import CopyUrlField from './styled/CopyUrlField'
import { IconButton, Icon, Tooltip, Snackbar } from '@material-ui/core'

export default function CopyUrl() {
    const copyUrlRef = useRef(null)
    const [ copied, setCopied ] = useState(false)
    const url = document.location.host + document.location.pathname

    let timeoutId;

    function copyToClipboard(e) {
        console.log(copyUrlRef)
        navigator.clipboard.writeText(url)
        setCopied(true);
        timeoutId = setTimeout(() => {
            setCopied(false)
        }, 1500)
        // copyUrlRef.current.select();
        // document.execCommand('copy');
        // // This is just personal preference.
        // // I prefer to not show the the whole text area selected.
        // e.target.focus();
    }

    useEffect(() => {
        return () => clearTimeout(timeoutId)
    })

    return (
        <CopyUrlContainer>
            share your countdown:
            <div>
                <CopyUrlField>{url}</CopyUrlField>
                <Tooltip title="Copy to clipboard" >
                    <IconButton ref={copyUrlRef} onClick={copyToClipboard}>
                        <Icon style={{fontSize: '2rem', color: 'white'}}>file_copy</Icon>
                    </IconButton>
                </Tooltip>
            </div>
        </CopyUrlContainer>
    )
}
