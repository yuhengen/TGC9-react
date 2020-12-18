import React from 'react'

export default class ImageBox extends React.Component {
    state = {
        images: this.props.image1,
        which_image: 1
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
                    <h1>Now showing: Image {this.state.which_image}</h1>
                    <img src={this.state.images} alt="Hero Icon"/>
                    <button onClick={this.switchImage}>Switch</button>
                </div>
            </React.Fragment>
        )
    }

    switchImage = () => {
        if (this.state.which_image === 1) {
            this.setState({
                images: this.props.image2,
                which_image: 2
            })
        } else {
            this.setState({
                images: this.props.image1,
                which_image: 1
            })
        }
    }
}