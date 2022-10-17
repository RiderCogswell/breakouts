let list = document.getElementById("list");
let button = document.getElementById("button")

const students = [
  "Carter Matschek",
  "Haylee Lovelady",
  "Heather Korczynski",
  "Janvier Barreto Acevedo",
  "John Wood",
  "Jordan Barringer",
  "Maria Ramirez",
  "Melina Morales",
  "Shawna White",
  "Skipper Thurman",
  "Tim Fleck",
  "Wahee Chowdhury",
  "Ye Kuang"
];

const randomStudent = () => {
  let random = students[Math.floor(Math.random() * students.length)];
  let listItem = document.createElement("li")
  list.append(listItem)
  listItem.textContent = random;
} 


button.addEventListener("click", randomStudent)