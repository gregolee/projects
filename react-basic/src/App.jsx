import React from 'react';
import ReactDOM from 'react-dom';

import Board from './Board.jsx';
//import Toggle from './Toggle.jsx';
//import Clock from './Clock.jsx';

/*
function App() {
    return (
        <div>
            <Clock name="Misuk"/>
            <Clock name="Jaeyoung"/>
            <Clock name="Jaemin"/>
            <Toggle />
        </div>
    )
}
*/
function App() {
    return (
        <div>
            <Board />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)

export default App;