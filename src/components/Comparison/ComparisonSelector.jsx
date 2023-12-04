import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setComparisonProducts } from '../../redux/comparisonSlice'
import ComparisonDisplay from './ComparisonDisplay'
import generateMockSalesData from '../../services/mockDataGenerator'

function ComparisonSelector() {
	const dispatch = useDispatch()
	const mockData = generateMockSalesData()
	const [selectedCategory1, setSelectedCategory1] = useState('')
	const [selectedCategory2, setSelectedCategory2] = useState('')

	const handleComparison = () => {
		const product1 = mockData.find(product => product.category === selectedCategory1)
		const product2 = mockData.find(product => product.category === selectedCategory2)

		dispatch(setComparisonProducts({ product1, product2 }))
	}
	return (
		<div>
			<h2>Сравнение Продуктов</h2>
			<select onChange={e => setSelectedCategory1(e.target.value)} value={selectedCategory1}>
				<option value=''>Выберите категорию</option>
				{mockData.map(product => (
					<option key={product.id} value={product.category}>
						{product.category}
					</option>
				))}
			</select>
			<select onChange={e => setSelectedCategory2(e.target.value)} value={selectedCategory2}>
				{' '}
				<option value=''>Выберите категорию</option>
				{mockData.map(product => (
					<option key={product.id} value={product.category}>
						{product.category}
					</option>
				))}
			</select>
			<button onClick={handleComparison}>Сравнить</button>
			<ComparisonDisplay />
		</div>
	)
}

export default ComparisonSelector
