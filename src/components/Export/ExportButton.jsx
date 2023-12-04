import React from 'react'
import { CSVLink } from 'react-csv'

function ExportButton({ data }) {
	return (
		<CSVLink data={data} filename={'sales-data.csv'} className='export-button'>
			Экспорт в CSV
		</CSVLink>
	)
}

export default ExportButton
