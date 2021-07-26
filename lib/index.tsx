import React from 'react';
import ReactDOM  from 'react-dom';
import Icon from './Icon'

const fn: React.MouseEventHandler = (e) => {
    console.log(e.target);
}

ReactDOM.render(
    <div>
        <Icon name="forward" 
            onClick={fn}
            onMouseEnter={fn}
            onMouseLeave={fn}
        />
    </div>
    , document.querySelector("#root"));
