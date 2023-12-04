import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import generateMockSalesData from '../../services/mockDataGenerator'

ChartJS.register(ArcElement, Tooltip, Legend)

function PieChart() {
	const mockData = generateMockSalesData()

	const data = {
		labels: mockData.map(item => item.category),
		datasets: [
			{
				label: 'Продажи по Категориям',
				data: mockData.map(item => item.revenue),
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)'
				],
				borderWidth: 1
			}
		]
	}

	return (
		<div className='chart-container'>
			<h2>Круговой График Распределения Продаж</h2>
			<Pie data={data} />
		</div>
	)
}

export default PieChart
