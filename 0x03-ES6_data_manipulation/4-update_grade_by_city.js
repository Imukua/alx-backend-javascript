export default function updateStudentGradeByCity(arr, city, newGrades) {
    const updated = arr.filter((student) => student.location === city)
      .map((student) => {
        const grade = newGrades.find((grd) => grd.studentId === student.id);
  
        return { ...student, grade: (grade && grade.grade) || 'N/A' };
      });
  
    return updated;
  }
  