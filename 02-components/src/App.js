import React from 'react';

function sayHello() {
    return "Hello!"
}

function sayGoodbye() {
    return <p>Time to say goodbye~</p>
}

// 1. is a function
// 2. first alphabet is uppercase
// 3. return jsx
function BorderedImageFrame() {
    return <img src={require('./giyu-icon.png').default} alt="Giyu" style={{
        'border': '4px red solid'
    }} />
}

function App() {
    return (
        <React.Fragment>
            <h1>{sayHello()}</h1>
            {sayGoodbye()}
            <BorderedImageFrame />
        </React.Fragment>
    );
}

export default App;
