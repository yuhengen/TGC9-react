import React from 'react';

export default class BookingForm extends React.Component {
    state = {
        'name': "",
        'age': "",
        'classes': []
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Name</label>
                    <input type="text" name="name"
                        value={
                            this.state.name
                        }
                        onChange={
                            this.updateForm
                        }/>
                </div>
                <div>
                    <label>Age</label>
                    <input type="radio" name="age" value="12to18"
                        onChange={
                            this.updateForm
                        }
                        checked={
                            this.state.age ==="12to18"
                        }/>12 ~ 18
                    <input type="radio" name="age" value="19to25"
                        onChange={
                            this.updateForm
                        }
                        checked={
                            this.state.age ==="19to25"
                        }/>19 ~ 25
                    <input type="radio" name="age" value="25above"
                        onChange={
                            this.updateForm
                        }
                        checked={
                            this.state.age ==="25above"
                        }/>25 ++
                </div>
                <div>
                    <label>Classes</label>
                    <input type="checkbox" name="classes" value="yoga"
                        onChange={
                            this.updateCheckboxes
                        }
                        checked={
                            this.state.classes.includes('yoga')
                        }/>Yoga
                    <input type="checkbox" name="classes" value="wrestling"
                        onChange={
                            this.updateCheckboxes
                        }
                        checked={
                            this.state.classes.includes('wrestling')
                        }/>Wrestling
                    <input type="checkbox" name="classes" value="muaythai"
                        onChange={
                            this.updateCheckboxes
                        }
                        checked={
                            this.state.classes.includes('muaythai')
                        }/>Muay Thai
                </div>
            </React.Fragment>
        );
    }

    updateCheckboxes = event => {
        if (!this.state.classes.includes(event.target.value)) {
            let copy = [
                ...this.state.classes,
                event.target.value
            ]
            this.setState({'classes': copy})
        } else {
            let copy = this.state.classes.filter((eachClass) => {
                return eachClass !== event.target.value
            })
            this.setState({'classes': copy})
        }

        // METHOD 1 - Add class to array
        // let copy = [...this.state.classes];

        // copy.push(event.target.value);

        // this.setState({'classes': copy})

        // METHOD 2 - Super short and professional way
        // this.setState({
        //     classes: [
        //         ...this.state.classes,
        //         event.target.value
        //     ]
        // })
    }

    updateForm = event => {
        this.setState({[event.target.name]: event.target.value})
    }
}
