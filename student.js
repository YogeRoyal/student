// revie student Task

const StudentData = [
    {Roll_no: 501,Name: "Liam Garcia",Class: 5, Gender: "Male", test_score: [] },
    {Roll_no: 502,Name: "Ava Robinson",Class: 5,Gender: "Female",test_score: [] },
    {Roll_no: 503,Name: "Lucas Cooper",Class: 5,Gender: "Male",test_score: []},
    {Roll_no: 504,Name: "Emma Reed",Class: 5,Gender: "Female",test_score: []},
    {Roll_no: 505,Name: "Mia Hughes",Class: 5,Gender: "Female",test_score: []},
    {Roll_no: 601,Name: "Sophia Smith",Class: 6,Gender: "Female",test_score: []},
    {Roll_no: 602,Name: "Ethan Johnson",Class: 6,Gender: "Male",test_score: []},
    {Roll_no: 603,Name: "Ava Williams",Class: 6,Gender: "Female",test_score: []},
    {Roll_no: 604,Name: "Noah Brown",Class: 6,Gender: "Male",test_score: []},
    {Roll_no: 605,Name: "Olivia Jones",Class: 6,Gender: "Female",test_score: []},
    {Roll_no: 701,Name: "Liam Davis",Class: 7,Gender: "Male",test_score: []},
    {Roll_no: 702,Name: "Emma Martinez",Class: 7,Gender: "Female",test_score: []},
    {Roll_no: 703,Name: "Mia Wilson",Class: 7,Gender: "Female",test_score: []},
    {Roll_no: 704,Name: "Lucas Taylor",Class: 7,Gender: "Male",test_score: []},
    {Roll_no: 705,Name: "Aiden Anderson",Class: 7,Gender: "Male",test_score: []},
    {Roll_no: 801,Name: "Isabella Thomas",Class: 8,Gender: "Female",test_score: []},
    {Roll_no: 802,Name: "James White",Class: 8,Gender: "Male",test_score: []},
    {Roll_no: 803,Name: "Avery Clark",Class: 8,Gender: "Female",test_score: []},
    {Roll_no: 804,Name: "Mason Turner",Class: 8,Gender: "Male",test_score: []},
    {
        Roll_no: 805,
        Name: "Charlotte Harris",
        Class: 8,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 801,
        Name: "Evelyn Scott",
        Class: 9,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 802,
        Name: "Logan King",
        Class: 9,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 803,
        Name: "Harper Turner",
        Class: 9,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 804,
        Name: "Jackson Lee",
        Class: 9,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 805,
        Name: "Abigail Baker",
        Class: 9,
        Gender: "Female",
        test_score: []
    }
]


function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = []
const randomNum = randomValue(30, 90);

function TestScore() {
    console.log(`+-----------------+-----+-------+-----------+-------------+-----+`);
    console.log(`|      Name      |Class|Roll_No|Total Score|Percentage(%)|Grade|`)
    console.log(`+-----------------+-----+-------+-----------+-------------+-----+`);
    for (let student of StudentData) {
        const mathsMarks = randomValue(30, 90);
        const scienceMarks = randomValue(30, 90);
        const socialScienceMarks = randomValue(30, 90);
        let totalScore = mathsMarks + scienceMarks + socialScienceMarks;
        let percentage = Math.round(totalScore / 3);

        let Grade = percentage >= 90 ? 'A' : percentage >= 70 && percentage <= 90 ? 'B' : percentage >= 20 && percentage <= 69 ? 'C' : 'D'
        student.test_score.push({ sub: 'Mathematics', marks: mathsMarks }, { sub: 'Science', marks: scienceMarks }, { sub: 'Social Science', marks: socialScienceMarks });
        arr.push({ name: student.Name, class: student.Class, Roll_no: student.Roll_no, Gender: student.Gender, totalScore: totalScore, percentage: percentage, Grade: Grade })
        // console.table(student)
        console.log(`|  ${student.Name} |  ${student.Class}  |  ${student.Roll_no}  |    ${totalScore}    |      ${percentage}     |   ${Grade} |`);
        console.log(`+---------------------------------------------------------------+`);
    }
}


function filterStudent() {
    let filterSt = [];
    arr.forEach(ele => {
        if (ele.Grade === 'B' && ele.class === 7) {
            filterSt = [...filterSt, ele];
            console.log(filterSt);
        }
    })
}

TestScore()
filterStudent()

for (let i = 5; i < 10; i++) {
    console.log(`top 3 performances in class${i}`);
    let classes = arr.filter(ele => ele.class === i).sort((a, b) => b.percentage - a.percentage).slice(0, 3);
    console.table(classes);
}


console.log("top 3 performances in Male");
let malePerformance = arr.filter(ele => ele.Gender === 'Male').sort((a, b) => b.percentage - a.percentage).slice(0, 3)
console.table(malePerformance);



console.log("top 3 performances in female");
let femalePerformance = arr.filter(ele => ele.Gender === 'Female').sort((a, b) => b.percentage - a.percentage).slice(0, 3);
console.table(femalePerformance);
