import { workshopData } from "../../assets/WorkshopData";
import SEO from "../../components/SEO/SEO";
import "./WorkshopPage.css";

export default function WorkshopPage() {
  const equipment = workshopData.equipment;
  const service = workshopData.service;
  const testing = workshopData.testing;
  const repair = workshopData.repair;
  return (
    <main className="WorkshopPage">
      <SEO
        title="Газова майстерня"
        description="Газова майстерня в Полтаві: встановлення та обслуговування ГБО, випробування газових балонів, технічне обслуговування газобалонного обладнання. Сертифікація ГБО."
        keywords="ГБО Полтава, встановлення ГБО, газобалонне обладнання, випробування балонів, ремонт ГБО, сертифікація ГБО"
        canonical="/workshop"
        ogImage="/Workshop_2_50.webp"
      />
      <article className="page-content">
        <h1 className="header">
          Встановлення газобалонного обладнання на автомобілі
        </h1>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1 header-text">Позиція</div>
            <div className="col col-2 header-text">Найменування послуги</div>
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
        <h2 className="header">
          Технічне обслуговування, ремонт газобалонного обладнання
        </h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1 header-text">Позиція</div>
            <div className="col col-2 header-text">Найменування послуги</div>
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
        <h2 className="header">
          Випробування газових балонів, наливних рукавів, клапанів
        </h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1 header-text">Позиція</div>
            <div className="col col-2 header-text">Найменування послуги</div>
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
        <h2 className="header">ТО та Ремонт автомобілів</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1 header-text">Позиція</div>
            <div className="col col-2 header-text">Найменування послуги</div>
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
      </article>
    </main>
  );
}
