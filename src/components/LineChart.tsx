import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useRef } from 'react';

interface LineChartData {
	labels: string[];
	datasets: { data: number[] }[];
}

interface LineChartProps {
	lineChartData: LineChartData;
	height?: string;
	width?: string;
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function LineChart({ lineChartData, height, width }: LineChartProps) {

    return (
		<Line
			options={{
				maintainAspectRatio: false,
				responsive: true,
				plugins: {
					legend: {
						display: true,
						position: 'bottom',
						labels: {
							color: '#636b74',
							font: {
								size: 12,
								family: 'Inter, sans-serif',
								weight: 'bold',
							},
						},
					},
					title: {
						display: true,
						text: 'Persentase Stunting 12 Bulan Terakhir',
						color: '#0b6bcb',
						font: {
							size: 20,
							family: 'Arial',
							weight: 700,
						},
						padding: {
							top: 10,
							bottom: 10,
						},
					},
					tooltip: {
						backgroundColor: '#fff',
						titleColor: '#0b6bcb',
						bodyColor: '#171a1c', // custblack
						borderColor: '#e5e7eb',
						borderWidth: 1,
						cornerRadius: 4,
						titleFont: {
							size: 14,
							weight: 'bold',
						},
						bodyFont: {
							size: 12,
						},
						padding: 8,
					},
				},
				scales: {
					x: {
						grid: {
							display: false,
						},
					},
				},
			}}
			data={{
				labels: lineChartData.labels,
				datasets: [
					{
						label: 'Persentase Stunting',
						data: lineChartData.datasets[0].data,
						borderColor: '#0b6bcb',
						backgroundColor: 'rgba(11, 107, 203, 0.1)',
						pointBackgroundColor: '#0b6bcb',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: '#0b6bcb',
						pointRadius: 6,
						tension: 0.2,
						borderWidth: 3,
					},
				],
			}}
			style={{
				width: width || '100%',
				height: height || '100%',
			}}
		/>
	);
}