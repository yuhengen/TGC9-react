import React from 'react'
// import axios from 'axios'

export default class RestaurantBooking extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        seating: "",
        smoking: "",
        appetizer: []
    }

    typeOfSeating = [
        {
            'id': 1,
            'value': "outdoors",
            'title': "Outdoors"
        }, {
            'id': 2,
            'value': "indoors",
            'title': "Indoors"
        }, {
            'id': 3,
            'value': "vip-indoors",
            'title': "VIP Indoors"
        }
    ]

    smokingSeats = [
        {
            'id': 1,
            'value': 'smoking',
            'title': 'Smoking Table'
        }, {
            'id': 2,
            'value': 'non-smoking',
            'title': 'Non-Smoking Table'
        }
    ]

    appetizers = [
        {
            'id': 1,
            'value': 'raw-fish',
            'title': 'Raw Fishes'
        }, {
            'id': 2,
            'value': 'salad',
            'title': 'Salad'
        }, {
            'id': 3,
            'value': 'cuttlefish',
            'title': 'Fried Cuttlefish'
        }, {
            'id': 4,
            'value': 'peanuts',
            'title': 'Peanuts'
        }
    ]

    renderSelectSeating() {
        let jsx = [];
        for (let seatType of this.typeOfSeating) {
            jsx.push(
                <React.Fragment>
                    <input type="radio"
                        value={
                            seatType.value
                        }
                        onChange={
                            this.updateFormField
                        }
                        name="seating"
                        checked={
                            this.state.seating === seatType.value
                        } /><label> {
                            seatType.title
                        } </label>
                </React.Fragment>
            )
        }
        return jsx
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>First Name:
                    </label>
                    <input type="text" name="firstName"
                        value={
                            this.state.firstName
                        }
                        onChange={
                            this.updateFormField
                        } />
                </div>
                <div>
                    <label>Last Name:
                    </label>
                    <input type="text" name="lastName"
                        value={
                            this.state.lastName
                        }
                        onChange={
                            this.updateFormField
                        } />
                </div>
                <div>
                    <label>
                        Seating:
                    </label>
                    {
                        this.renderSelectSeating()
                    } </div>
                <div>
                    <label>
                        Smoking Table:
                    </label>
                    <select name="smoking"
                        value={
                            this.state.smoking
                        }
                        onChange={
                            this.updateFormField
                        }>
                        {
                            this.smokingSeats.map((s, index) => <option value={
                                s.value
                            }
                                key={index}>
                                {
                                    s.title
                                }</option>)
                        } </select>
                </div>
                <div>
                    <label>Appetizers:
                    </label>
                    {
                        this.appetizers.map((a, index) => {
                            return (
                                <React.Fragment>
                                    <input type="checkbox" name="appetizer"
                                        value={
                                            a.value
                                        }
                                        onChange={
                                            this.updateAppetizer
                                        }
                                        checked={
                                            this.state.appetizer.includes(a.value)
                                        } /><label>{
                                            a.title
                                        }</label>
                                </React.Fragment>
                            )
                        })
                    } </div>
                <button onClick={
                    this.submitForm
                }>Submit</button>
            </React.Fragment>
        )
    }

    updateFormField = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    updateAppetizer = evt => {

        if (!this.state[evt.target.name].includes(evt.target.value)) {
            let copy = [
                ...this.state[evt.target.name],
                evt.target.value
            ]
            this.setState({ [evt.target.name]: copy })
        } else {
            let copy = this.state[evt.target.name].filter(eachItem => {
                return eachItem !== evt.target.value;
            })
            this.setState({ [evt.target.name]: copy })
        }
    }

    submitForm = () => {
        alert(`${this.state.firstName
            } ${
            this.state.lastName
            } has booked a ${
            this.state.smoking
            }, ${
            this.state.seating
            } table`)
    }
}
