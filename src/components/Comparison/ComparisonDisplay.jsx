import React from 'react'
import { useSelector } from 'react-redux'

function ComparisonDisplay() {
	const { product1, product2 } = useSelector(state => state.comparison)

	if (!product1 || !product2) {
		return <p>Выберите продукты для сравнения.</p>
	}

	return (
		<div>
			<h3>Результаты Сравнения</h3>
			<p>
				{product1.category}: {product1.revenue} (выручка)
			</p>
			<p>
				{product2.category}: {product2.revenue} (выручка)
			</p>
			<p>
				Разница в выручке:
				{Math.abs(product1.revenue - product2.revenue)}
			</p>
		</div>
	)
}

export default ComparisonDisplay
