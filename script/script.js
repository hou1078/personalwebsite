
let course1={
    code: 'ACIT 1420' ,
    name: 'Introduction to System Administration',
}
let course2 ={
    code: 'ACIT 1620' ,
    name: 'Web Fundamental Technologies',
}
let course3={
    code: 'ACIT 1630',
    name: 'Database Systems',
}
let courseList=[course1, course2, course3];

function createCourseArray() {
  const courses = document.querySelectorAll('li a');
  const courseArray = [];
  courses.forEach((course) => {
    const code = course.textContent.split(' - ')[0];
    const date = course.nextElementSibling.textContent;
    const courseObjective = { code: code, date: date };
    courseArray.push(courseObjective);
  });
  return courseArray;
}

function findCourse(courseList) {
  let user;
  do {
    user = prompt('Please enter a 4-digit course number:');
  } while (isNaN(user) || user.length !== 4);

  let found = false;
  for (let i = 0; i < courseList.length; i++) {
    const code = courseList[i].code.split(' ')[1];
    if (code === user) {
      found = true;
      const courseEl = document.querySelectorAll('li')[i];
      courseEl.style.backgroundColor = 'green';
      break;
    }
  }

  if (!found) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = `ACIT ${user} - N/A`;
    li.appendChild(a);
    const date = document.createElement('p');
    date.textContent = 'Fall 2020';
    li.appendChild(date);
    ul.appendChild(li);
  }
}

findCourse(courseList)