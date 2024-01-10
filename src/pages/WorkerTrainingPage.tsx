// import React from 'react'
import data from '../assets/WorkerTrainingData.json'
import './WorkerTrainingPage.css'

export default function WorkerTrainingPage() {
  const license = data.license;
  const courses = data.courses;
  return (
    <div className='WorkerTrainingPage'>
      <div className='page-content'>
        <div className='header'>
        Ліцензія Міносвіти АГ № 582693
        </div>
        <ul className='responsive-table'>
          <li className='table-header'>
            <div className='col col-1'>Номер</div>
            <div className='col col-2'>Найменування навчання</div>
          </li>    
          {license.map((x, i) => (
            <li key={i} className='table-row'>
              <div className='col col-1' data-label="Номер:">{i + 1}</div>
              <div className='col col-2' data-label="Назва:">{x}</div>
            </li>    
          ))}
        </ul>
        
        <div className='header'>
        Курси цільового призначення для навчання робітників за професіями
        </div>
        <ul className='responsive-table'>
          <li className='table-header'>
            <div className='col col-1'>Номер</div>
            <div className='col col-2'>Найменування навчання</div>
          </li>    
          {courses.map((x, i) => (
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
