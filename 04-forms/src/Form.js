import React from 'react'

export default class Form extends React.Component {
    state = {
        'name': "",
        'email': "",
        'color': "",
        'favtime': "",
        'fruit': []
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={this.updateName} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={this.state.email} onChange={this.updateEmail} />
                </div>
                <div>
                    <label>Favorite Color</label>
                    <input type="radio" name="color" value="red" onChange={this.updateColor} />Red
                    <input type="radio" name="color" value="green" onChange={this.updateColor} />Green
                    <input type="radio" name="color" value="blue" onChange={this.updateColor} />Blue
                </div>
                <div>
                    <label>Favorite time of the day</label>
                    <input type="radio" name="favtime" value="morning" onChange={this.updateFavtime} />Morning
                    <input type="radio" name="favtime" value="afternoon" onChange={this.updateFavtime} />Afternoon
                    <input type="radio" name="favtime" value="night" onChange={this.updateFavtime} />Night
                </div>
            </React.Fragment>
        );
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    updateColor = (event) => {
        this.setState({
            color: event.target.value
        })
    }

    updateFavtime = (event) => {
        this.setState({
            favtime: event.target.value
        })
    }
}