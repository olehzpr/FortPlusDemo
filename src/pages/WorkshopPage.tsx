import data from '../assets/WorkshopData.json'
import ScrollArrow from '../components/ScrollArrow';
import "./WorkshopPage.css"

export default function WorkshopPage() {
  const rows = data.rows;

  return (
    <div className='WorkshopPage'>
      <ScrollArrow></ScrollArrow>
      <div className='page-content'>
        <div className='header'>
          Газова майстерня
        </div>
        <ul className='responsive-table'>
          <li className='table-header'>
            <div className='col col-1'>Позиція</div>
            <div className='col col-2'>Найменування послуги</div>
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
