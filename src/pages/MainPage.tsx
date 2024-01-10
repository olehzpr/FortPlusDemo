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
            img='/OccupationalHealth.jpg'
            description="Докладніше / онлайн навчання"/>
          <Card 
            text="НАВЧАННЯ ЗА ПРОФЕСІЯМИ" 
            link="/worker-training" 
            img='/WorkerTraining.jpg'
            description="Докладніше / онлайн навчання"/>
          <Card 
            text="МАЙСТЕРНЯ" 
            link="/workshop" 
            img='/Workshop.jpg'
            description="Послуги"/>
          <Card 
            text="ДІАГНОСТИКА АВТОМОБІЛІВ" 
            link="/car-diagnostics" 
            img='/CarDiagnostics.jpg'
            description="Послуги"/>
        </div>
      </div>
    </>
  )
}
