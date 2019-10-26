import React from 'react';
import { Polar } from 'react-chartjs-2';

const PowerBar = ({powerstats}) => {
	const data = {
        labels: ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'],
        datasets: [{
            label: 'Power Stats',
            data: [powerstats.intelligence, powerstats.strength, powerstats.speed, powerstats.durability, powerstats.power, powerstats.combat],
            backgroundColor: [
                '#118AB2',
                '#EF476F',
                '#FFD166',
                '#06D6A0',
                '#EF0037',
                '#073B4C'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    };

    return (
		<Polar data={data} width={180} legend={{display: false}} />
    );
	
};

export default PowerBar;