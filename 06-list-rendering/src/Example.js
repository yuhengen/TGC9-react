import React from 'react'

export default class Example extends React.Component {
    state = {
        fruits: ['Apple', 'Banana', 'Orange', 'Durian']
    }

    renderFruits() {
        let jsx = [];

        for (let f of this.state.fruits) {
            jsx.push (
                <li key={f}>
                    {f}</li>
            )
        }
        return jsx;
    }

    render() {
        return (
            <React.Fragment>
                <h1>Method 1</h1>
                {
                this.renderFruits()
            }
                <h1>Method 2</h1>
                {
                this.state.fruits.map((f, index) => {
                    return <li key={index}>
                        {f}</li>
            })
            }
                <h1>Method 3</h1>
                {
                this.state.fruits.map((f, index) => <li key={index}>
                    {f}</li>)
            } </React.Fragment>
        )
    }
}
