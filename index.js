
function adjustHeight(value) {
  let heightValue = document.getElementById("heightValue");
  let currentHeight = parseInt(heightValue.innerText);
  let newHeight;

  if (value == '+') {
    newHeight = currentHeight + 1;
  } else if (value == '-') {
    newHeight = currentHeight - 1;
    if (newHeight <= 0) {
      alert("Height cannot be less than or equal to 0");
      return;
    }
  } else {
    return;
  }

  let boxes = document.querySelectorAll('.grid-clamp div');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.height = newHeight + "px";
  }

  heightValue.innerText = newHeight + "px";
}
// ===============================================
// function adjustWidth(value) {
//   let widthValue = document.getElementById("widthValue");
//   let currentWidth = parseInt(widthValue.innerText);
//   let newWidth;

//   if (value == '+') {
//     newWidth = currentWidth + 1;
//   } else if (value == '-') {
//     newWidth = currentWidth - 1;
//     if (newWidth <= 0) {
//       alert("Width cannot be less than or equal to 0");
//       return;
//     }
//   } else {
//     return;
//   }

//   let boxes = document.querySelectorAll('.grid-clamp div');
//   for (let i = 0; i < boxes.length; i++) {
//     boxes[i].style.width = newWidth + "px";
//   }

//   widthValue.innerText = newWidth + "px";
// }

