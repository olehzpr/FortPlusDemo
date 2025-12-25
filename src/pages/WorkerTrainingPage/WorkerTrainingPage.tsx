import { workerTrainingData } from "../../assets/WorkerTrainingData";
import { publicInfoData } from "../../assets/PublicInfoData";
import "./WorkerTrainingPage.css";
import { Link } from "react-router-dom";

export default function WorkerTrainingPage() {
  const license = workerTrainingData.license;
  return (
    <main className="WorkerTrainingPage">
      <article className="page-content">
        <h1 className="header">
          Ліцензія Міносвіти{" "}
          <span style={{ whiteSpace: "nowrap" }}>АГ № 582693</span>
        </h1>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1 header-text">Позиція</div>
            <div className="col col-2 header-text">Найменування навчання</div>
          </li>
          {license.map((x, i) => (
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
          Інформація про наявність у відкритому доступі на власному вебсайті
          інформації та документів, передбачених Законом України "Про освіту"
        </h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1 header-text">№ п/п</div>
            <div className="col col-2 header-text">
              Назва інформації або документа
            </div>
          </li>
          {publicInfoData.map((row, i) => (
            <li key={i} className="table-row">
              <div className="col col-1" data-label="№ п/п:">
                {i + 1}
              </div>
              <div className="col col-2 link-col" data-label="Назва:">
                {row.linkTo ? (
                  <Link to={row.linkTo} className="internal-link">
                    {row.title}
                  </Link>
                ) : row.documentPath ? (
                  <a
                    href={row.documentPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="document-link"
                  >
                    {row.title}
                  </a>
                ) : (
                  <span>{row.title}</span>
                )}
                {row.note && <div className="info-note">{row.note}</div>}
              </div>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
