import './App.css'
import StudentCard from './components/studentCard'

function App() {

  return (
   <div className="App">
    <h1>Student Cards</h1>
    <div className="student-cards">
      <StudentCard name="John Doe" marks={85} grade="A" />
      <StudentCard name="Jane Smith" marks={90} grade="A+" />
      <StudentCard name="Bob Johnson" marks={75} grade="B" />
    </div>
   </div>
  )
}

export default App
