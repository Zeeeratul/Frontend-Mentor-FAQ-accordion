import './App.css';
import Faq from './components/Faq'
import Images from './components/Images'

function App() {

  return (
    <div className="background">
      <div className="card">
        <Images />
        <Faq />
      </div>
    </div>
  )
}

export default App
