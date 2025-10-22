// @ts-ignore
import React from 'react';
import {render} from "@testing-library/react";
import TherapistDashboard from "../TherapistDashboard.tsx";

it('renders according to snapshot', () => {
    const component = render(<TherapistDashboard />);
    expect(component.baseElement).toMatchSnapshot();
});