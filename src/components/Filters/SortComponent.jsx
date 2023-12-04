import React from 'react'

function SortComponent({ onSort }) {
	return (
		<div>
			<button onClick={() => onSort('category')}>По Категории</button>
			<button onClick={() => onSort('revenue')}>По Выручке</button>
			<button onClick={() => onSort('unitsSold')}>По Проданным Единицам</button>
			<button onClick={() => onSort('profitMargin')}>По Прибыльности</button>
		</div>
	)
}

export default SortComponent
