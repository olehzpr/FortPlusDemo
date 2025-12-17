import { workerTrainingData } from "../../assets/WorkerTrainingData";
import ScrollArrow from "../../components/ScrollArrow/ScrollArrow";
import "./WorkerTrainingPage.css";

export default function WorkerTrainingPage() {
  const license = workerTrainingData.license;
  const courses = workerTrainingData.courses;
  return (
    <div className="WorkerTrainingPage">
      <div className="page-content">
        <ScrollArrow></ScrollArrow>
        <div className="header">
          Ліцензія Міносвіти{" "}
          <span style={{ whiteSpace: "nowrap" }}>АГ № 582693</span>
        </div>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Позиція</div>
            <div className="col col-2">Найменування навчання</div>
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

        <div className="header">
          Курси цільового призначення для навчання робітників за професіями
        </div>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Номер</div>
            <div className="col col-2">Найменування навчання</div>
          </li>
          {courses.map((x, i) => (
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
