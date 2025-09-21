// @ts-ignore
import React from 'react';
import AdminDashboard from "../admin/AdminDashboard.tsx";
import {render} from "@testing-library/react";

it('renders according to snapshot', () => {
    const component = render(<AdminDashboard />);
    expect(component.baseElement).toMatchSnapshot();
});