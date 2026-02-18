import { students } from '@/data/content';

function StudentCard({ student }) {
  return (
    <article className="student-card">
      <img src={student.img} alt={student.name} />
      <div>
        <h3>{student.name} ({student.type} {student.years})</h3>
        <p>{student.description}</p>
      </div>
    </article>
  );
}

export default function StudentsPage() {
  return (
    <>
      <h2>Current Students</h2>
      {students.current.map((student) => <StudentCard key={student.name} student={student} />)}
      <h2>Former Students</h2>
      {students.former.map((student) => <StudentCard key={student.name} student={student} />)}
    </>
  );
}
