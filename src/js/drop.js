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
  const selectedLetters = document.querySelectorAll('.selected');
  
  if (selectedLetters.length > 0) {
   
    const selectedIds = Array.from(selectedLetters).map(letter => letter.id);
    e.dataTransfer.setData('text', JSON.stringify(selectedIds));
  } else {
 
    e.dataTransfer.setData('text', JSON.stringify([e.target.id]));
  }
}


function allowDrop(e) {
  e.preventDefault();
}


function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  const itemIds = JSON.parse(data);  
  
  const targetElement = e.target;
  
 
  itemIds.forEach(id => {
    const draggableElement = document.getElementById(id);
    
    
    if (targetElement.id === 'textContainer') {
      targetElement.appendChild(draggableElement);
    } else if (targetElement.classList.contains('draggable') || targetElement.classList.contains('selected')) {
      targetElement.parentNode.insertBefore(draggableElement, targetElement);
    }
  });
}


result.addEventListener('dragover', allowDrop);
result.addEventListener('drop', drop);
