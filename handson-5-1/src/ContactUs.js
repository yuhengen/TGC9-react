import React from 'react'

export default class ContactUs extends React.Component {
    state = {
        'firstname': "",
        'lastname': "",
        'enquiryType': "",
        'country': "",
        'contactBy': [],
        'ability': true
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div>
                        <label>First Name:</label>
                        <input type="text" name="firstname" value={this.state.firstname} onChange={this.updateForm} />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" name="lastname" value={this.state.lastname} onChange={this.updateForm} />
                    </div>
                    <div>
                        <label>Enquiry Type:</label>
                        <input type="radio" name="enquiryType" value="support" onChange={this.updateForm} />Support
                        <input type="radio" name="enquiryType" value="sales" onChange={this.updateForm} />Sales
                        <input type="radio" name="enquiryType" value="marketing" onChange={this.updateForm} />Marketing
                    </div>
                    <div>
                        <label>Country:</label>
                        <select name='country' value={this.state.country} onChange={this.updateForm}>
                            <option>---Select Country---</option>
                            <option value="sg">Singapore</option>
                            <option value="my">Malaysia</option>
                            <option value="th">Thailand</option>
                        </select>
                    </div>
                    <div>
                        <label>How to contact you</label>
                        <input
                            type="checkbox"
                            name="contactBy"
                            value="slow-mail"
                            onChange={this.updateCheckboxes}
                        />
                        <label>Slow Mail</label>

                        { /* this is the email checkbox */}
                        <input type="checkbox"
                            name="contactBy"
                            value="email"
                            onChange={this.updateCheckboxes}
                        />
                        <label>Email</label>

                        <input type="checkbox"
                            name="contactBy"
                            value="phone"
                            onChange={this.updateCheckboxes}
                        />
                        <label>Phone</label>
                    </div>
                    <div>
                        <button onClick={this.submitForm} disabled={this.state.ability}>Submit</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }

    updateForm = (event) => {

        if (this.state.firstname !== "") {
            this.setState({
                ability: false
            })
        } else {
            this.setState({
                ability: true
            })
        }

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateCheckboxes = event => {
        let originalArray = this.state[event.target.name];
        // check if the value of checkbox that user has clicked is in array
        if (!originalArray.includes(event.target.value)) {
            // checkbox value not in array so we add it in
            let modified = [...originalArray, event.target.value];
            this.setState({
                [event.target.name]: modified
            })
        } else {
            // checkbox is already in array, so we should remove it
            let modified = originalArray.filter((eachItem) => {
                // only keep items that does not match checkbox's value as we are going to delete it from array
                return eachItem !== event.target.value
            })
            this.setState({
                [event.target.name]: modified
            })
        }
    }

    submitForm = () => {
        alert(`${this.state.firstname} ${this.state.lastname} from ${this.state.country} requires help about ${this.state.enquiryType}`)
    }
}