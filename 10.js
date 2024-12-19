//1
console.log("1 задача");
let name = "Слава";
let age = 19;

if (age >= 18) {
  console.log("Вы совершеннолетний");
} else {
  console.log("Вы несовершеннолетний");
}

//2
console.log("2 задача");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

//3
console.log("3 задача");
const lectures = ["1", "2", "3"];
const practices = ["1", "2", "3"];

lectures.push("4");
practices.unshift("0");

lectures.forEach((lecture) => {
  console.log(lecture);
});

practices.forEach((practice) => {
  console.log(practice);
});

function printArray(arr) {
  console.log(arr.join(", "));
}

printArray(lectures);
printArray(practices);

//4
console.log("4 задача");
function filterLecturesByO(arr) {
  return arr.filter((lecture) => lecture.startsWith("О"));
}

let lectur = ["О-сложность", "React"];
const filteredLectures = filterLecturesByO(lectur);
console.log(filteredLectures);
