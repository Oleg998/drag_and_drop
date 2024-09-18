const userInput = document.querySelector(".form");
const result = document.getElementById("textContainer");

userInput.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  result.innerHTML = '';
  const { usertext } = evt.currentTarget.elements;
  const value = usertext.value;

  if (value.trim() === "") {
    const message = "Input should not be empty";
    alert(message);
  } else {
    for (let i = 0; i < value.length; i++) {
      const letter = document.createElement('span');
      letter.textContent = value[i]; 
      letter.classList.add('draggable', 'letter');
      letter.setAttribute('draggable', 'true'); 
      letter.id = `letter-${i}`; 
      result.appendChild(letter); 

      letter.ondragstart = drag;
    }
    evt.currentTarget.reset();
  }
}

function drag(e) {
  e.dataTransfer.setData('text', e.target.id);
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const itemId = e.dataTransfer.getData('text');
  const draggableElement = document.getElementById(itemId);

  // Убедимся, что элемент draggable не содержит буквы, если это нужно
  if (e.target.id === 'result') {
    e.target.appendChild(draggableElement);
  } else if (e.target.classList.contains('draggable')) {
    // Переместим букву перед целевым элементом, если это буква
    e.target.parentNode.insertBefore(draggableElement, e.target);
  }
}



result.addEventListener('dragover', allowDrop);
result.addEventListener('drop', drop);
