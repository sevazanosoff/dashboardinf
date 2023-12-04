import React from 'react'

function TableRow({ data }) {
	return (
		<tr>
			<td>{data.category}</td>
			<td>{data.revenue}</td>
			<td>{data.unitsSold}</td>
			<td>{data.profitMargin}%</td>
		</tr>
	)
}

export default TableRow
