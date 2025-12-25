import { occupationalHealthData } from "../../assets/OccupationalHealthData";
import "./OccupationalHealthPage.css";

export default function OccupationalHealthPage() {
  const rows = occupationalHealthData.rows;
  const linkRegPattern = /\([^[]*\)\[[^(]*\]/gm;
  function splitLinks(s: string): string[] {
    const matches = [...s.matchAll(linkRegPattern)].map((x) => x[0]);
    let matchIndex = 0;
    const arr: string[] = [];
    s.split(linkRegPattern).map((x) => {
      if (x !== "") arr.push(x);
      if (matchIndex < matches.length) arr.push(matches[matchIndex++]);
    });
    return arr;
  }

  return (
    <main className="OccupationalHealthPage">
      <article className="page-content">
        <h1 className="header">Навчання з питань охорони праці</h1>
        <a
          href="/documents/Вартість_навчання НПАОП.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cost-button"
        >
          Вартість навчання
        </a>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1 header-text">Позиція</div>
            <div className="col col-2 header-text">Найменування навчання</div>
          </li>
          {rows.map((x, i) => (
            <li key={i} className="table-row">
              <div className="col col-1" data-label="Номер:">
                {i + 1}
              </div>
              <div className="col col-2 link-col" data-label="Назва:">
                {splitLinks(x).map((substr, index) =>
                  linkRegPattern.test(substr) ? (
                    <a
                      key={i.toString() + index.toString()}
                      title={
                        "Детальніше про " +
                        substr.match(/(?<=\().*(?=\)\[.*\])/)![0]
                      }
                      className={`additional-resource-link ${
                        substr.match(/(?<=\)\[).*(?=\])/)![0] == ""
                          ? "empty-link"
                          : ""
                      }`}
                      href={substr.match(/(?<=\)\[).*(?=\])/)![0]}
                      target="_blank"
                    >
                      {substr.match(/(?<=\().*(?=\)\[.*\])/)![0]}
                    </a>
                  ) : (
                    substr
                  )
                )}
              </div>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
