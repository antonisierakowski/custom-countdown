import React from 'react'

export default function CopyUrl() {
    return (
        <div>
            {document.location.host + document.location.pathname}
        </div>
    )
}
