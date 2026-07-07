enum CourseStatus {
  Open = "Open",
  Closed = "Closed",
  Full = "Full"
}

interface Student {
  id: number;
  name: string;
}

interface Course {
  title: string;
  code: string;
  status: CourseStatus;
  students: Student[];
}

function enroll(student: Student, course: Course): void {
  if (course.status === CourseStatus.Open) {
    course.students.push(student);
    console.log(`Successfully enrolled ${student.name} in ${course.title}.`);
  } else {
    console.log(`Cannot enroll ${student.name}. The course ${course.title} is ${course.status}.`);
  }
}

const course1: Course = {
  title: "Introduction to TypeScript",
  code: "TS101",
  status: CourseStatus.Open,
  students: []
};

const student1: Student = { id: 65001, name: "Noi" };

enroll(student1, course1);
console.log(course1);