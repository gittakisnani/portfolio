import { useState } from 'react'
import { FiltersType } from './Works'

interface Filter { 
    id: string, 
    text: FiltersType, 
    filters: FiltersType[]
    handleFilters: (value: FiltersType) => void
}

const Filters = ({ id, text, filters, handleFilters} : Filter ) => {
    const [checked, setChecked] = useState(filters.includes(text));

    const handleCheck = () => {
        setChecked(!checked)
        handleFilters(text)
    }


  return (
    <label htmlFor={id} className='filters_label'>
        <input 
            type="checkbox" 
            checked={checked}
            onChange={handleCheck}
            id={id}
        />
        {text}
    </label>
  )
}