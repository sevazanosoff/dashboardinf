import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategoryFilter } from '../../redux/filtersSlice'

function FilterComponent() {
	const dispatch = useDispatch()

	const handleFilterChange = e => {
		dispatch(setCategoryFilter(e.target.value))
	}

	return (
		<div>
			<input type='text' placeholder='Фильтр по категории' onChange={handleFilterChange} />
		</div>
	)
}

export default FilterComponent
