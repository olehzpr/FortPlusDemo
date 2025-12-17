import { carDiagnosticsData } from "../../assets/CarDiagnosticsData";
import ScrollArrow from "../../components/ScrollArrow/ScrollArrow";
import "./CarDiagnosticsPage.css";

export default function CarDiagnosticsPage() {
  const rows = carDiagnosticsData.rows;
  return (
    <div className="CarDiagnosticsPage">
      <ScrollArrow></ScrollArrow>
      <div className="page-content">
        <div className="header">Діагностика автомобілів</div>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Позиція</div>
            <div className="col col-2">Найменування послиги</div>
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
      </div>
    </div>
  );
}
