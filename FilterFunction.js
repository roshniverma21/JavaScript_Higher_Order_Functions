//without using filter Function
const students1 = [
  { name: 'John James', status: true},
  { name: 'Micheal Obi', status: false },
  { name: 'Bola Ade', status: true },
  { name: 'Emmanuel', status: false },
  { name: 'Faithfulness Alamu',status: true },
];
const presentStudent1 = [];
for(let i = 0; i < students1.length; i++) {
  if(students1[i].status >= true) {
    presentStudent1.push(students1[i].name);
  }
}
console.log(presentStudent1);
//Output - [ 'John James', 'Bola Ade', 'Faithfulness Alamu' ]

//with Using a Higher-Order Function (Filter)
const students2 = [
  { name: 'John James', status: true},
  { name: 'Micheal Obi', status: false },
  { name: 'Bola Ade', status: true },
  { name: 'Emmanuel', status: false },
  { name: 'Faithfulness Alamu', status: true },
];
const presentStudent2 =students2.filter(student => student.status == true);
console.log(presentStudent2);
//output - [
//   { name: 'John James', status: true },
//   { name: 'Bola Ade', status: true },
//   { name: 'Faithfulness Alamu', status: true }
// ]
