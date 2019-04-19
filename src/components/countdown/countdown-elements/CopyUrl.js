import React, { useRef } from 'react'
import CopyUrlContainer from './styled/CopyUrlContainer'
// import { Card } from '@material-ui/core'

export default function CopyUrl() {
    const copyUrlRef = useRef(null)

    function copyToClipboard(e) {
        console.log(copyUrlRef)
        // copyUrlRef.current.select();
        // document.execCommand('copy');
        // // This is just personal preference.
        // // I prefer to not show the the whole text area selected.
        // e.target.focus();
    }

    const url = document.location.host + document.location.pathname;
    return (
        <CopyUrlContainer ref={copyUrlRef} onClick={() => navigator.clipboard.writeText(url)}>
            {url}
        </CopyUrlContainer>
    )
}
