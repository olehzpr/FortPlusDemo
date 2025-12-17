import Card from "../../components/Card/Card";
import "./MainPage.css";

export default function MainPage() {
  return (
    <main>
      <h1 style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
        ТОВ Форт Плюс - Навчання з охорони праці та професіям, газова майстерня, діагностика автомобілів у Полтаві
      </h1>
      <section className="card-layout-container" aria-label="Послуги та напрями навчання">
        <div className="card-layout">
          <Card
            text="НАВЧАННЯ З ПИТАНЬ ОХОРОНИ ПРАЦІ"
            link="/occupational-health"
            img="./OccupationalHealth_50.webp"
            alt="Навчання з питань охорони праці - сертифіковані курси в Полтаві"
            description="Докладніше / онлайн навчання"
          />
          <Card
            text="НАВЧАННЯ ЗА ПРОФЕСІЯМИ"
            link="/worker-training"
            img="./WorkerTraining_50_1_50.webp"
            alt="Навчання за професіями - кранівник, електрозварник, оператор котельні в Полтаві"
            description="Докладніше / онлайн навчання"
          />
          <Card
            text="ГАЗОВА МАЙСТЕРНЯ"
            link="/workshop"
            img="./Workshop_2_50.webp"
            alt="Газова майстерня - встановлення та обслуговування ГБО в Полтаві"
            description="Послуги"
          />
          <Card
            text="ДІАГНОСТИКА АВТОМОБІЛІВ"
            link="/car-diagnostics"
            img="./CarDiagnostics_1_1920x1280.webp"
            alt="Діагностика автомобілів - професійна діагностика та сертифікація авто в Полтаві"
            description="Послуги"
          />
        </div>
      </section>
    </main>
  );
}
