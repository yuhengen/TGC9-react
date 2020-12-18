import React from 'react'

// all class-based components extending from React must have a render function
export default class NumberBox extends React.Component {
    state = {
        number: this.props.startingNumber
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
                    <h1 style={{'backgroundColor': this.state.number%2===0 ? 'red' : 'green'}}>{this.state.number}</h1>
                    <div>
                        <button onClick={this.increment}>Add 1</button>
                        <button onClick={this.decrement}>Minus 1</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    // must use arrow functions for event callbacks
    increment = () => {
        // the only way to change variable in state is to use .setState function
        // this is an Async function
        this.setState({
            number: this.state.number + 1
        })
    }

    decrement = () => {
        this.setState({
            number: this.state.number - 1
        })
    }
}