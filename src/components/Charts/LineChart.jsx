import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import generateMockSalesData from '../../services/mockDataGenerator'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

function LineChart() {
	const mockData = generateMockSalesData()

	const data = {
		labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
		datasets: [
			{
				label: 'Тренд продаж',
				data: mockData.map(item => item.revenue),
				fill: false,
				backgroundColor: 'rgb(75, 192, 192)',
				borderColor: 'rgba(75, 192, 192, 0.2)'
			}
		]
	}

	return (
		<div className='chart-container'>
			<h2>Линейный График Продаж</h2>
			<Line data={data} />
		</div>
	)
}

export default LineChart
