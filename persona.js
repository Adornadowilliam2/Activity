let box1, box2;
box1 = document.createElement("div");
box1.style.width = "15px";
box1.style.height = "15px";
box1.style.border = "1px solid black";

box2 = document.createElement("div");
box2.style.width = "15px";
box2.style.height = "15px";
box2.style.border = "1px solid black";

let parentElement = document.getElementById("boxes");
parentElement.appendChild(box1);
parentElement.appendChild(box2);
let numBoxes, boxSize;

function createBoxes() {
  numBoxes = parseInt(document.querySelector('input[name="numBoxes"]').value);
  boxSize = parseInt(document.querySelector('input[name="boxSize"]').value);
  let container = document.querySelector('.grid-clamp');
  
  let nb = document.getElementById("nb");
  let bs = document.getElementById("bs");

  let valuenum = nb.value;
  let valuesize = bs.value;


  if (valuenum == "" || valuenum <= 0){
    nb.value = ""; 
    nb.style.borderColor = "red";
    if(valuesize == "" || valuesize <= 0){
      bs.value = "";
      bs.style.borderColor = "red";
      return;
    }
  } else if(valuesize == "" || valuesize <= 0){
    bs.value = "";
    bs.style.borderColor = "red";
    if (valuenum == "" || valuenum <= 0){
      nb.value = "";
      nb.style.borderColor = "red";
      return;
    }
  } else {
    container.innerHTML = "";
    for (let i = 0; i < numBoxes; i++) {
      let boxes = document.createElement('div');
      boxes.style.border = "1px solid black";
      boxes.style.width = boxSize + 'px';
      boxes.style.height = boxSize + 'px';
      boxes.style.margin = "5px";

      container.innerHTML += boxes.outerHTML;
    }
  }
  nb.style.borderColor = "";
  bs.style.borderColor = "";

  let heightValue = document.getElementById("heightValue");
  heightValue.innerHTML = "15px";
  let widthValue = document.getElementById("widthValue");
  widthValue.innerHTML = "15px";
  let borderRadiusValue = document.getElementById("borderRadiusValue");
  borderRadiusValue.innerHTML = "15px";
}

const colorOdd = document.getElementById('colorOdd');
const colorEven = document.getElementById('colorEven');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink', 'blueviolet', 'cyan', 'indigo', 'gold', 'brown', 'black', 'lime', 'crimson'];

for (let i = 0; i < colors.length; i++) {
  const box = document.createElement('button');
  box.style.height = '15px';
  box.style.width = '15px';
  box.style.borderRadius = 0;
  box.style.backgroundColor = colors[i];
  box.addEventListener('click', colorOddBg);
  colorOdd.appendChild(box);
}

function colorOddBg() {
  const color = this.style.backgroundColor;
  const boxes = document.querySelectorAll('.grid-clamp div');
  for (let i = 0; i < boxes.length; i++) {
    if (i % 2 === 1) {
      boxes[i].style.backgroundColor = color;
      box1.style.backgroundColor = color;
    }
  }
}

// function colorOddBg() {
//   // Separate the message based on the background color
//   const color = this.style.backgroundColor;
//   if (colors.indexOf(color) % 2 === 1) {
//     // alert("Even color is " + color);
//     box1.style.backgroundColor = color;
//   } else {
//     box1.style.backgroundColor = color;
//   }
// }

for (let i = 0; i < colors.length; i++) {
  const box = document.createElement('button');
  box.style.height = '15px';
  box.style.width = '15px';
  box.style.borderRadius = 0;
  box.style.backgroundColor = colors[i];
  box.addEventListener('click', colorEvenBg);
  colorEven.appendChild(box);
}

function colorEvenBg() {
  const color = this.style.backgroundColor;
  const boxes = document.querySelectorAll('.grid-clamp div');
  for (let i = 0; i < boxes.length; i++) {
    if (i % 2 === 0) {
      boxes[i].style.backgroundColor = color;
    }
  }
}

