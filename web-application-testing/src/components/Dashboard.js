import React, {useState} from 'react';
import Display from './Display';

export const addStrikePoint = currentStrikePoint => {
    return currentStrikePoint + 1;
};

export const addBallPoint = currentBallPoint => {
    return currentBallPoint + 1;
};

export const addHits = currentHits => {
    return currentHits + 1;
};

const Dashboard = () => {
    const [strikePoint, setStrikePoint] = useState(0);
    const [ballPoint, setBallPoint] = useState(0);
    const [hits, setHits] = useState(0);

    function playerFoul() {
        if(strikePoint <= 1) {
            return setStrikePoint(addStrikePoint(strikePoint));
        }
    }

    function playerStrike() {
        setStrikePoint(addStrikePoint(strikePoint));
        if (strikePoint >= 3) {
            return setStrikePoint(0);
        }
    }

    function playerBall() {
        setBallPoint(addBallPoint(ballPoint));
        if (ballPoint >= 4) {
            return setBallPoint(0);
        }
    }

    function playerHits() {
        setStrikePoint(0);
        setBallPoint(0);
        setHits(addHits(hits));
    }

    return (
        <div>
            <Display 
            hits={hits} 
            ballPoint={ballPoint} 
            strike={strikePoint} 
            />

            <h1>Game Dashboard</h1>

            <div>
                <button onClick={playerStrike}>Strike</button>

                <button onClick={playerBall}>Ball</button>

                <button onClick={playerHits}>Hit</button>

                <button onClick={playerFoul}>Foul</button>
            </div>
        </div>
    )

};

export default Dashboard;
