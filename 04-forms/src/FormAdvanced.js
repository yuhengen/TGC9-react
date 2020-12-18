import React from 'react'

export default class FormAdvanced extends React.Component {
    state = {
        'name': "",
        'email': "",
        'color': "",
        'favtime': "",
        'fruits': [],
        'country': "",
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.updateForm} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.updateForm} />
                </div>
                <div>
                    <label>Favorite Color</label>
                    <input type="radio" name="color" value="red" onChange={this.updateForm} checked={this.state.color === 'red'} />Red
                    <input type="radio" name="color" value="green" onChange={this.updateForm} checked={this.state.color === 'green'} />Green
                    <input type="radio" name="color" value="blue" onChange={this.updateForm} checked={this.state.color === 'blue'} />Blue
                </div>
                <div>
                    <label>Favorite time of the day</label>
                    <input type="radio" name="favtime" value="morning" onChange={this.updateForm} checked={this.state.favtime === 'morning'} />Morning
                    <input type="radio" name="favtime" value="afternoon" onChange={this.updateForm} checked={this.state.favtime === 'afternoon'} />Afternoon
                    <input type="radio" name="favtime" value="night" onChange={this.updateForm} checked={this.state.favtime === 'night'} />Night
                </div>
                <div>
                    <label>Favorite Fruits</label>
                    <input type="checkbox" name="fruits" value="apple" onChange={this.updateFruits} checked={this.state.fruits.includes('apple')} />Apple
                    <input type="checkbox" name="fruits" value="orange" onChange={this.updateFruits} checked={this.state.fruits.includes('orange')} />Orange
                    <input type="checkbox" name="fruits" value="pear" onChange={this.updateFruits} checked={this.state.fruits.includes('pear')} />Pear
                </div>
                <div>
                    <label>Country</label>
                    <select name="country" onChange={this.updateForm} value={this.state.country}>
                        <option value="sg">Singapore</option>
                        <option value="my">Malaysia</option>
                        <option value="th">Thailand</option>
                    </select>
                </div>
            </React.Fragment>
        );
    }

    updateFruits = event => {
        // let copy = [...this.state.fruits, event.target.value]
        if (!this.state.fruits.includes(event.target.value)) {
            let copy = [...this.state.fruits, event.target.value]
            this.setState({
                'fruits': copy
            })
        } else {
            // if user clicks a checkbox when its value is already in array, we have to remove it
            let copy = this.state.fruits.filter((eachFruit) => {
                // only keep the fruits that does not match what i want to delete
                return eachFruit !== event.target.value
            })
            this.setState({
                'fruits': copy
            })
        }
    }

    updateForm = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
}