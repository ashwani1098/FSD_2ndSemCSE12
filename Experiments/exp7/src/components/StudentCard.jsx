import './studentCard.css'


function StudentCard({name, marks, grade}) {

  return (
   <div className="student-card">
        <p className='student-name'>{name}</p>
        <p>Marks: {marks}</p>
        <p>Grade: {grade}</p>
    </div>
  )
}

export default StudentCard
