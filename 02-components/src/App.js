import React from 'react';
import BorderedImageFrame from './BorderedImageFrame.js';
import SumOfTwo from './SumOfTwo.js'

function sayHello() {
    return "Hello!"
}

function sayGoodbye() {
    return <p>Time to say goodbye~</p>
}

function Alert(props) {
    return (<div className="alert" style={{
        'backgroundColor': props.bgColor,
        'margin': '10px',
        'padding': '10px'
    }}>
        <span>{props.message}</span>
    </div>)
}

// 1. is a function
// 2. first alphabet is uppercase
// 3. return jsx

function App() {
    return (
        <React.Fragment>
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
                <h1>{sayHello()}</h1>
                {sayGoodbye()}
                <Alert message="Hello there!" bgColor="grey" />
                <BorderedImageFrame images={require("./giyu-icon.png").default} />
                <SumOfTwo integer1={11} integer2={4} />
            </div>
        </React.Fragment>
    );
}

export default App;
