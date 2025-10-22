// @ts-ignore
import React from 'react';
import AdminDashboard from "../AdminDashboard";
import {render} from "@testing-library/react";

it('renders according to snapshot', () => {
    const component = render(<AdminDashboard />);
    expect(component.baseElement).toMatchSnapshot();
});