import StudentCard from './StudentCard';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Experiment 7: Student Cards</h1>
      <StudentCard name="Ajay" marks="85" grade="A" />
      <StudentCard name="Vijay" marks="78" grade="B" />
      <StudentCard name="Sanjay" marks="92" grade="A+" />

    </div>
  );
}
export default App;