import Card from "../components/Card";
import './MainPage.css'

export default function MainPage() {
  return (
    <>
      <div className="card-layout-container">
        <div className="card-layout">
          <Card 
            text="НАВЧАННЯ З ПИТАНЬ ОХОРОНИ ПРАЦІ" 
            link="/occupational-health" 
            img='./OccupationalHealth_50.webp'
            alt='НАВЧАННЯ З ПИТАНЬ ОХОРОНИ ПРАЦІ'
            description="Докладніше / онлайн навчання"/>
          <Card 
            text="НАВЧАННЯ ЗА ПРОФЕСІЯМИ" 
            link="/worker-training" 
            img='./WorkerTraining_50_1_50.webp'
            alt='НАВЧАННЯ ЗА ПРОФЕСІЯМИ'
            description="Докладніше / онлайн навчання"/>
          <Card 
            text="ГАЗОВА МАЙСТЕРНЯ" 
            link="/workshop" 
            img='./Workshop_2_50.webp'
            alt='ГАЗОВА МАЙСТЕРНЯ'
            description="Послуги"/>
          <Card 
            text="ДІАГНОСТИКА АВТОМОБІЛІВ" 
            link="/car-diagnostics" 
            img='./CarDiagnostics_1_1920x1280.webp'
            alt='ДІАГНОСТИКА АВТОМОБІЛІВ'
            description="Послуги"/>
        </div>
      </div>
    </>
  )
}
