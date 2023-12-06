import getListStudents from './0-get_list_students';
import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum() {
  const List = getListStudents();
  const id = getListStudentIds(List);
  const sum = id.reduce((accumulator, currentId) => accumulator + currentId, 0);

  return sum;
}
