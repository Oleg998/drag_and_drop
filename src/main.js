const userInput = document.querySelector(".form");
const result = document.getElementById("result");





userInput.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  result.innerHTML = ''; // Очищаємо результат перед новим виведенням
  const { usertext } = evt.currentTarget.elements;
  const value = usertext.value;

  if (value.trim() === "") {
    const message = "Input should not be empty";
    alert(message);
  } else {
    for (let i = 0; i < value.length; i++) {
      const letter = document.createElement('span');
      letter.textContent = value[i]; // Додаємо текст до <p> елемента
      letter.classList.add('draggable', 'letter'); 
      letter.setAttribute('draggable', 'true'); // Встановлюємо атрибут 'draggable' на 'true'
      result.appendChild(letter); // Додаємо кожен елемент до result

      letter.ondragstart=drag;
      letter.ondragover=allwDrop;
      letter.ondrop=drop;
    }
    evt.currentTarget.reset(); // Скидаємо форму
  }
}
function drag(e){
    e.dataTrasfer.setData('id' , e.target.id);
}

function allwDrop(e){
    e.preventDefault()
}
function drop(e){
    let itemId=e.dataTrasfer.getData('id');
    e.target.append(document.getElementById(itemId));
}

