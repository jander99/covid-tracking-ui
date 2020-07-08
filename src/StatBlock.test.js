import React from 'react';
import { render } from '@testing-library/react';
import StatBlock from './StatBlock';

test('StatBlock Renders', () => {

    const { getByText } = render(<StatBlock />)
    const jurisdiction = getByText('Jurisdiction');
    const totalInfections = getByText('Total Infections');
    const totalDeaths = getByText('Total Deaths');
    const totalPopulation = getByText('Total Population');
    const fatalityRate = getByText('Fatality Rate');

    [jurisdiction, totalInfections, totalDeaths, totalPopulation, fatalityRate].forEach((text) => {
        expect(text).toBeInTheDocument();
    });

});