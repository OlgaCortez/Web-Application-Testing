import {render} from '@testing-library/react';
import React from 'react';
import Dashboard, {addStrikePoint, addBallPoint, addHits} from './Dashboard';

describe("<Dashboard />", () => {
    it("render without crashing", () => {
        render(<Dashboard />);
    });
});

describe("<Dashboard />", () => {
    it("addStrike will add 1 to the strike", () => {
        expect(addStrikePoint(1)).toBe(2);
    });
    it("addBall will add 1 to the balls", () => {
        expect(addBallPoint(1)).toBe(2);
    });
    it("addHits will add 1 to the hits", () => {
        expect(addHits(1)).toBe(2);
    });

});

// let actual;
// let expected;

// const test = (title, cb) => {
//     try {
//         cb();
//         console.log(`✅ ${title}`);
//     } catch(err) {
//         console.error(`😡 ${title}`);
//         console.error(err);
//     }
// }

// const expect = (actual) => {
//     return {
//         toBe: (expected) => {
//             if (actual !== expected) {
//                 throw new Error(`${actual} is not equal to ${expected}`);
//             }
//         }
//     }
// }


// test('renders without crashing', () => {
//     render(<Dashboard />);
//   });
  
 
//   test('addStrike adds 1 point to the current score', () => {
//     actual = addStrikePoint(1);
//     expected = 1;
//     expect(actual).toBe(expected);
//     expect(actual).not.toBe(4);
//   });