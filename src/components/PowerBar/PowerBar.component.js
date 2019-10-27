import React from 'react';
import { Polar } from 'react-chartjs-2';

const PowerBar = ({powerstats}) => {
    const { intelligence, strength, speed, durability, power, combat } = powerstats;
	const data = {
        labels: ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'],
        datasets: [{
            label: 'Power Stats',
            data: [intelligence, strength, speed, durability, power, combat],
            backgroundColor: [
                'rgba(16, 137, 177, 0.7)',
                'rgba(239, 72, 111, 0.7)',
                'rgba(255, 209, 102, 0.7)',
                'rgba(5, 214, 158, 0.7)',
                'rgba(240, 0, 56, 0.7)',
                'rgba(7, 58, 75, 0.7)'
            ],
            borderColor: [
                '#118AB2',
                '#EF476F',
                '#FFD166',
                '#06D6A0',
                '#EF0037',
                '#073B4C'
            ],
            borderWidth: 1
        }]
    };

    return (
		<Polar data={data} width={180} legend={{display: false}} />
    );
	
};

export default PowerBar;