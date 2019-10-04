import React from 'react';

function Display(props) {
    return (
        <div>
            <h1>Score Board</h1>
            <h3>Hits: {props.hits}</h3>
            <h3>Balls: {props.ballPoint}</h3>
            <h3>Strike: {props.strike}</h3>
        </div>
    )
};

export default Display;