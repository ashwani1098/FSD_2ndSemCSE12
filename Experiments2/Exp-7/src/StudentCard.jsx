// function StudentCard(props) {
//   return (
//     <div className="StudentCard">
//       <h2>Student Name: {props.name}</h2>
//       <p>Marks: {props.marks}</p>
//       <p>Grade: {props.grade}</p>
//     </div>
//   );
// }
import "./StudentCard.css";
function StudentCard({name, marks, grade}) {
  return (
    <div className="StudentCard">
      <h2>Student Name: {name}</h2>
      <p>Marks: {marks}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}
export default StudentCard;