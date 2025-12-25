import { carDiagnosticsData } from "../../assets/CarDiagnosticsData";
import "./CarDiagnosticsPage.css";

export default function CarDiagnosticsPage() {
  const rows = carDiagnosticsData.rows;
  return (
    <main className="CarDiagnosticsPage">
      <article className="page-content">
        <h1 className="header">Діагностика автомобілів</h1>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1 header-text">Позиція</div>
            <div className="col col-2 header-text">Найменування послуги</div>
          </li>
          {rows.map((x, i) => (
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
