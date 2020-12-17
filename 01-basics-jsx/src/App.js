import React from 'react'
import giyu from './giyu-icon.png'
import './style.css'

function App() {
    return (
        <React.Fragment>
            <div>
                <h1>Hello World</h1>
                <p style={{
                    'color': 'yellow',
                    'fontSize': '30px'
                }}>My name is potato~</p>
                <p>3+3={3 + 3}</p>
                <img src={giyu} alt="giyu" />
                <img src={require("./giyu-icon.png").default} alt="giyu" />
            </div>
        </React.Fragment>
    )
}

export default App;
