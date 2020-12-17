import React from 'react'
import NumberBox from './components/NumberBox.js'
import ImageBox from './components/ImageBox.js'
import Timer from './components/Timer.js'

function App() {
    return (
        <React.Fragment>
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
                <NumberBox startingNumber={69} />
                <ImageBox image1={require('./giyu-icon.png').default} image2={require('./kyojuro-icon.jpg').default} />
                <Timer />
            </div>
        </React.Fragment>
    );
}

export default App;
