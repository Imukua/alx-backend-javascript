export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(Newname) {
    if (typeof Newname !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = Newname;
  }

  get name() {
    return this._name;
  }

  set length(Newlength) {
    if (typeof Newlength !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = Newlength;
  }

  get length() {
    return this._length;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      newStudents.forEach((element) => {
        if (typeof element !== 'string') {
          throw new TypeError('Each element of students must be a string');
        }
      });
      this._students = newStudents;
    } else {
      throw new Error('Students must be an array');
    }
  }

  get students() {
    return this._students;
  }
}
