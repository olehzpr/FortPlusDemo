import data from "../../assets/WorkshopData.json";
import ScrollArrow from "../../components/ScrollArrow/ScrollArrow";
import "./WorkshopPage.css";

export default function WorkshopPage() {
  const equipment = data.equipment;
  const service = data.service;
  const testing = data.testing;
  const repair = data.repair;
  return (
    <div className="WorkshopPage">
      <ScrollArrow></ScrollArrow>
      <div className="page-content">
        <div className="header">
          Встановлення газобалонного обладнання на автомобілі
        </div>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Позиція</div>
            <div className="col col-2">Найменування послуги</div>
          </li>
          {equipment.map((x, i) => (
            <li key={i} className="table-row">
              <div className="col col-1" data-label="Номер:">
                {i + 1}
              </div>
              <div className="col col-2" data-label="Назва:">
                {x}
              </div>
            </li>
          ))}
        </ul>
        <div className="header">
          Технічне обслуговування, ремонт газобалонного обладнання
        </div>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Позиція</div>
            <div className="col col-2">Найменування послуги</div>
          </li>
          {service.map((x, i) => (
            <li key={i} className="table-row">
              <div className="col col-1" data-label="Номер:">
                {i + 1}
              </div>
              <div className="col col-2" data-label="Назва:">
                {x}
              </div>
            </li>
          ))}
        </ul>
        <div className="header">
          Випробування газових балонів, наливних рукавів, клапанів
        </div>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Позиція</div>
            <div className="col col-2">Найменування послуги</div>
          </li>
          {testing.map((x, i) => (
            <li key={i} className="table-row">
              <div className="col col-1" data-label="Номер:">
                {i + 1}
              </div>
              <div className="col col-2" data-label="Назва:">
                {x}
              </div>
            </li>
          ))}
        </ul>
        <div className="header">ТО та Ремонт автомобілів</div>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Позиція</div>
            <div className="col col-2">Найменування послуги</div>
          </li>
          {repair.map((x, i) => (
            <li key={i} className="table-row">
              <div className="col col-1" data-label="Номер:">
                {i + 1}
              </div>
              <div className="col col-2" data-label="Назва:">
                {x}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
