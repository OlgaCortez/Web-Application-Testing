import {render} from '@testing-library/react';
import React from 'react';
import Display from './Display';

describe("<Display />", () => {
    it("renders without crashing", () => {
        render(<Display />);
    });
});