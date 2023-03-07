let course1={
    code: 'ACIT 1620' ,
    name: 'Web Fundamental Technologies',
}
let course2={
    code: 'ACIT 1420' ,
    name: 'Introduction to System Administration',
}
let course3={
    code: 'ACIT 1630',
    name: 'Database Systems',
}
let courseList=[course1, course2, course3];
let user;
do{
    user=prompt('What is course number?');
}
while(isNaN(user)===true || user.length!==4);
let found=false;
for(let i=0;i<courseList.length;i++){
    let course_code_number = courseList[i]['code'];
    if (course_code_number.includes(user)==true){
        console.log('Yes I am taking the course ' + courseList[i]['code']);
        found=true;
        break
    }
}
if(found==false){
    let course4={
        code: 'ACIT '+ user,
        name: null,
        }
    courseList.push(course4);
    console.log(courseList);
    }

