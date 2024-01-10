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
            img='./OccupationalHealth.jpg'
            alt='НАВЧАННЯ З ПИТАНЬ ОХОРОНИ ПРАЦІ'
            description="Докладніше / онлайн навчання"/>
          <Card 
            text="НАВЧАННЯ ЗА ПРОФЕСІЯМИ" 
            link="/worker-training" 
            img='./WorkerTraining.jpg'
            alt='НАВЧАННЯ ЗА ПРОФЕСІЯМИ'
            description="Докладніше / онлайн навчання"/>
          <Card 
            text="МАЙСТЕРНЯ" 
            link="/workshop" 
            img='./Workshop.jpg'
            alt='МАЙСТЕРНЯ'
            description="Послуги"/>
          <Card 
            text="ДІАГНОСТИКА АВТОМОБІЛІВ" 
            link="/car-diagnostics" 
            img='./CarDiagnostics.jpg'
            alt='ДІАГНОСТИКА АВТОМОБІЛІВ'
            description="Послуги"/>
        </div>
      </div>
    </>
  )
}
