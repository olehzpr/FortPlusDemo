// import React from 'react'
import data from '../assets/OccupationalHealthData.json'
import "./OccupationalHealthPage.css"

export default function OccupationalHealthPage() {
  const rows = data.rows;

  return (
    <div className='OccupationalHealthPage'>
      <div className='page-content'>
        <div className='header'>
          Навчання з питань охорони праці
        </div>
        <ul className='responsive-table'>
          <li className='table-header'>
            <div className='col col-1'>Номер</div>
            <div className='col col-2'>Найменування навчання</div>
          </li>    
          {rows.map((x, i) => (
            <li key={i} className='table-row'>
              <div className='col col-1' data-label="Номер:">{i + 1}</div>
              <div className='col col-2' data-label="Назва:">{x}</div>
            </li>    
          ))}
        </ul>
      </div>
    </div>
  )
}
