import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

import { Student } from './student.js';

import { dataStudent } from './dataStudent.js';


const coursesTbody: HTMLElement = document.getElementById('courses')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;

//taller 2
const studentTbody: HTMLElement = document.getElementById('student')!;
//taller 2


btnfilterByName.onclick = () => applyFilterByName();

renderCoursesInTable(dataCourses);

renderStudentInTable(dataStudent);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
    courses.forEach(c => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${c.name}</td>
                             <td>${c.professor}</td>
                             <td>${c.credits}</td>`;
      coursesTbody.appendChild(trElement);
    });
  }
 
//taller 2
function renderStudentInTable(student: Student[]): void {
  student.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.codigo}</td>
                           <td>${c.cedula}</td>
                           <td>${c.edad}</td>
                           <td>${c.direccion}</td>
                           <td>${c.telefono}</td>`;
    studentTbody.appendChild(trElement);
  });
}
//taller 2
 

function applyFilterByName() { 
    let text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
    return nameKey === '' ? dataCourses : courses.filter( c => 
        c.name.match(nameKey));
}


function getTotalCredits(courses: Course[]): number {
    let totalCredits: number = 0;
    courses.forEach((course) => totalCredits = totalCredits + course.credits);
    return totalCredits;
  }

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}