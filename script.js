function adjustHeight(value) {
  let heightValue = document.getElementById("heightValue");
  let currentHeight = parseInt(heightValue.innerText);
  let newHeight;

  if (value == '+') {
    newHeight = currentHeight + 1;
  } else if (value == '-') {
    newHeight = currentHeight - 1;
    if (newHeight <= 5) {
      alert("Height cannot be less than or equal to 5");
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


function adjustWidth(operator) {
  let widthContainer = document.getElementById("widthValue");
  let currentWidth = parseInt(widthContainer.innerHTML);
  let newWidth = currentWidth;

  if (operator === '-') {
    newWidth -= 1;
    if (newWidth <= 5) {
      alert("Width cannot be less than or equal to 5");
      return;
    }
  } else if (operator === '+') {
    newWidth += 1;
  }

  box1.style.width = newWidth + 'px';
  box2.style.width = newWidth + 'px';
  widthContainer.innerHTML = newWidth + 'px';

  let boxes = document.querySelectorAll('.grid-clamp div');
  if (boxes.length > 3) {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.width = newWidth + "px";
    }
  }
}


function adjustBorderRadius(operator) {
  let borderRadiusContainer = document.getElementById("borderRadiusValue");
  let currentBorderRadius = parseInt(borderRadiusContainer.innerHTML);
  let newBorderRadius = currentBorderRadius;

  if (operator === '-') {
    newBorderRadius -= 1;
    if (newBorderRadius <= 5) {
      alert("Border radius cannot be less than or equal to 5");
      return;
    }
  } else if (operator === '+') {
    newBorderRadius += 1;
  }

  box1.style.borderRadius = newBorderRadius + 'px';
  box2.style.borderRadius = newBorderRadius + 'px';
  borderRadiusContainer.innerHTML = newBorderRadius + 'px';

  let boxes = document.querySelectorAll('.grid-clamp div');
  if (boxes.length > 3) {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.borderRadius = newBorderRadius + "px";
    }
  }
}