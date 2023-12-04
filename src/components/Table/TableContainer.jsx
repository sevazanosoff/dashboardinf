import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSalesData } from '../../redux/salesDataSlice'
import generateMockSalesData from '../../services/mockDataGenerator'
import FilterComponent from '../Filters/FilterComponent'
import SortComponent from '../Filters/SortComponent'
import ExportButton from '../Export/ExportButton'

function TableContainer() {
	const dispatch = useDispatch()
	const salesData = useSelector(state => state.salesData.data)
	const filter = useSelector(state => state.filters.categoryFilter)
	const [sortedData, setSortedData] = useState([])
	const [exportableData, setExportableData] = useState([])

	useEffect(() => {
		const mockData = generateMockSalesData()
		dispatch(setSalesData(mockData))
	}, [dispatch])

	useEffect(() => {
		setSortedData(salesData)
	}, [salesData])

	useEffect(() => {
		const filtered = filter ? salesData.filter(item => item.category.includes(filter)) : salesData
		setSortedData(filtered)
		setExportableData(filtered)
	}, [filter, salesData])

	const onSort = sortKey => {
		const sorted = [...sortedData].sort((a, b) => {
			if (a[sortKey] < b[sortKey]) return -1
			if (a[sortKey] > b[sortKey]) return 1
			return 0
		})
		setSortedData(sorted)
		setExportableData(sorted)
	}

	return (
		<div>
			<h2>Таблица Продаж</h2>
			<SortComponent onSort={onSort} />
			<FilterComponent />
			<ExportButton data={exportableData} />
			<table>
				<thead>
					<tr>
						<th>Категория</th>
						<th>Выручка</th>
						<th>Проданные Единицы</th>
						<th>Прибыльность</th>
					</tr>
				</thead>
				<tbody>
					{sortedData.map(data => (
						<tr key={data.id}>
							<td>{data.category}</td>
							<td>{data.revenue}</td>
							<td>{data.unitsSold}</td>
							<td>{data.profitMargin}%</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default TableContainer
