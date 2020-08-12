var studentsGroupA =[
    {
        categoryId: "group A",
        id: 1,
        name: "John Smith",
        mark: 78,
        course: "Math"
    },
    {
        categoryId: "group A",
        id: 2,
        name: "Felix Jackson",
        mark: 65,
        course: "Langulage"
    },
    {
        categoryId: "group A",
        id: 3,
        name: "Chantelle Hasan",
        mark: 12,
        course: "Phisics"
    },
    {
        categoryId: "group A",
        id: 4,
        name: "Joel Francis",
        mark: 56,
        course: "Phisics"
    },
    {
        categoryId: "group A",
        id: 5,
        name: "Justin Francis",
        mark: 67,
        course: "Astronomy"
    },
    {
        categoryId: "group A",
        id: 6,
        name: "Carlos Oskar",
        mark: 92,
        course: "Phisics"
    },
    {
        categoryId: "group A",
        id: 7,
        name: "Francis Lucas",
        mark: 95,
        course: "Language"
    },
    {
        categoryId: "group A",
        id: 8,
        name: "Sonny Carys",
        mark: 98,
        course: "Astronomy"
    }
];
var studentsGroupB = [
    {
        categoryId: "group B",
        id: 1,
        name: "Cleo Seth",
        mark: 23,
        course: "Math"
    },
    {
        categoryId: "group B",
        id: 2,
        name: "Hugo Francis",
        mark: 56,
        course: "Langulage"
    },
    {
        categoryId: "group B",
        id: 3,
        name: "Mary Brett",
        mark: 90,
        course: "Phisics"
    },
    {
        categoryId: "group B",
        id: 100,
        name: "Sana Jenna",
        mark: 56,
        course: "Phisics"
    },
    {
        categoryId: "group B",
        id: 5,
        name: "Victoria Willard",
        mark: 67,
        course: "Astronomy"
    },
    {
        categoryId: "group B",
        id: 6,
        name: "Tomas Dale",
        mark: 74,
        course: "Phisics"
    },
    {
        categoryId: "group B",
        id: 7,
        name: "Nathaniel Rowan",
        mark: 12,
        course: "Language"
    },
    {
        categoryId: "group B",
        id: 8,
        name: "Anne Marshall",
        mark: 67,
        course: "Astronomy"
    }
];

var goodPoint = 89;
var normPoints = 65;
    
var allStudents =initStudentCount(studentsGroupA,studentsGroupB);
console.log(allStudents);

var sortStudents =findStudentsMark(allStudents);
console.log(sortStudents);
var displayStudents = displeyInfoStudentsSort(sortStudents);


function initStudentCount(studentsGroupA,studentsGroupB)
{            
    var studentsArray=[];
    studentsArray=[].concat(...arguments);
    return studentsArray;
}

function findStudentsMark(students)
{
    var goodStudents=[], normStudents = [], badStudents= [];
    for(let infoStudents of allStudents)
    {
        if(infoStudents.mark>=goodPoint)
        {
            goodStudents.push(infoStudents);           
        }
        else if(infoStudents.mark>=normPoints && infoStudents.mark<goodPoint)
        {
            normStudents.push(infoStudents);          
        }
        else
        {
            badStudents.push(infoStudents);            
        }
    } 
    return [].concat([goodStudents], [normStudents], [badStudents]);  
}

function displeyInfoStudentsSort (infoSortStudents)
{
    var userLIstDisplay = document.querySelector("#user-list-display");
    for(let i = 0; i <infoSortStudents.length; i++)
    {
        var rowHeader =  createElement("h1", "user-header", `<br> ${
            (i == 0)? "Good Students A+" :
            (i == 1)? "Normal Students B" : "Bad Students C"}`)
        
        let classDisplay = (i == 0)? "green-list" : (i == 1)? "yellow-list" : "red-list";
        userLIstDisplay.appendChild(rowHeader);
        for(let j = 0; j < infoSortStudents[i].length; j++)
        {
            let currentStudentInfo = infoSortStudents[i][j]
            let innerText = `
                <div>
                    ${currentStudentInfo.name} from ${currentStudentInfo.categoryId}
                    <p><mark>${currentStudentInfo.mark}</mark> <span>${currentStudentInfo.course}</span></p>
                </div>`;
            
            let newStudentElement = createElement("li", `student-card ${classDisplay}`, innerText);
            userLIstDisplay.appendChild(newStudentElement);
        }        
    }
}

function createElement(tag, className, innerText){
    var newObject = document.createElement(tag);
    newObject.className = (className)? className : false;
    newObject.innerHTML = (innerText)? innerText : false;

    return newObject
}
