import React from 'react'

export default function BorderedImageFrame(props) {
    return (<img src={props.images} alt="Giyu" style={{
        'border': '4px red solid'
    }} />)
}