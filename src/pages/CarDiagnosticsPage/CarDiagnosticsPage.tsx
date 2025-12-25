import { carDiagnosticsData } from "../../assets/CarDiagnosticsData";
import SEO from "../../components/SEO/SEO";
import "./CarDiagnosticsPage.css";

export default function CarDiagnosticsPage() {
  const rows = carDiagnosticsData.rows;
  return (
    <main className="CarDiagnosticsPage">
      <SEO
        title="Діагностика автомобілів"
        description="Професійна діагностика автомобілів у Полтаві: комп'ютерна діагностика, перевірка технічного стану, підготовка до техогляду. Сучасне обладнання та досвідчені фахівці."
        keywords="діагностика автомобілів Полтава, комп'ютерна діагностика авто, техогляд Полтава, діагностика двигуна, перевірка авто"
        canonical="/car-diagnostics"
        ogImage="/CarDiagnostics_1_1920x1280.webp"
      />
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
