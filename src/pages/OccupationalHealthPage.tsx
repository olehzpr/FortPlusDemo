// import React from 'react'
import data from '../assets/OccupationalHealthData.json'
import ScrollArrow from '../components/ScrollArrow';
import "./OccupationalHealthPage.css"

export default function OccupationalHealthPage() {
  const rows = data.rows;
  const linkRegPattern = /\([^[]*\)\[[^(]*\]/gm;
  function splitLinks(s:string) : string[]{
    const matches = [...s.matchAll(linkRegPattern)].map(x => x[0])
    let matchIndex = 0
    const arr: string[] = []
    s.split(linkRegPattern).map(x => {
      if(x !== '') arr.push(x)
      if(matchIndex < matches.length) arr.push(matches[matchIndex++])
    })
    return arr
  }

  return (
    <div className='OccupationalHealthPage'>
      <ScrollArrow></ScrollArrow>
      <div className='page-content'>
        <div className='header'>
          Навчання з питань охорони праці
        </div>
        <ul className='responsive-table'>
          <li className='table-header'>
            <div className='col col-1'>Позиція</div>
            <div className='col col-2'>Найменування навчання</div>
          </li>    
          {rows.map((x, i) => (
            <li key={i} className='table-row'>
              <div className='col col-1' data-label="Номер:">{i + 1}</div>
              <div className='col col-2 link-col' data-label="Назва:">
                {splitLinks(x).map((substr, index) => (
                  linkRegPattern.test(substr) ? (
                        <a key={i.toString() + index.toString()} 
                        title={'Детальніше про ' + substr.match(/(?<=\().*(?=\)\[.*\])/)![0]} 
                        className={`additional-resource-link ${substr.match(/(?<=\)\[).*(?=\])/)![0] == ''? 'empty-link' : ""}`}
                        href={substr.match(/(?<=\)\[).*(?=\])/)![0]}
                        target="_blank">
                        {substr.match(/(?<=\().*(?=\)\[.*\])/)![0]}
                        </a>
                   ) : (
                   substr
                   )
                ))}
              </div>
            </li>    
          ))}
        </ul>
      </div>
    </div>
  )
}
