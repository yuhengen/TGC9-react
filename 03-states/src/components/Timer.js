import React from 'react'

export default class Timer extends React.Component {
    state = {
        timeLeft: 10
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>{this.state.timeLeft} seconds left...</h1>
                </div>
                <div>
                    <button onClick={this.start}>Start</button>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </React.Fragment>
        )
    }

    start = () => {
        if (this.state.timeLeft > 0) {
            setInterval(() => {
                this.setState({
                    timeLeft: this.state.timeLeft - 1
                })
            }, 1000)
        } else {
            clearInterval(this.state.timeLeft)
        }
    }

    reset = () => {
        this.setState({
            timeLeft: this.state.timeLeft = 10
        })
    }

}