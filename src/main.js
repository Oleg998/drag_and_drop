const userInput = document.querySelector(".form");
const result = document.getElementById("result");

userInput.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  result.innerHTML = ''; // Очищаем результат перед новым выводом
  const { usertext } = evt.currentTarget.elements;
  const value = usertext.value;

  if (value.trim() === "") {
    const message = "Input should not be empty";
    alert(message);
  } else {
    for (let i = 0; i < value.length; i++) {
      const letter = document.createElement('span');
      letter.textContent = value[i]; // Добавляем текст к <span> элементу
      letter.classList.add('draggable', 'letter');
      letter.setAttribute('draggable', 'true'); // Устанавливаем атрибут 'draggable' на 'true'
      letter.id = `letter-${i}`; // Присваиваем каждому элементу уникальный id
      result.appendChild(letter); // Добавляем каждый элемент в result

      letter.ondragstart = drag;
      letter.ondragover = allowDrop;
      letter.ondrop = drop;
    }
    evt.currentTarget.reset(); // Сбрасываем форму
  }
}

function drag(e) {
  e.dataTransfer.setData('text', e.target.id); // Исправлено: setData принимает два аргумента
}

function allowDrop(e) {
  e.preventDefault(); // Предотвращаем поведение по умолчанию для разрешения drop
}

function drop(e) {
  e.preventDefault(); // Предотвращаем стандартное поведение
  const itemId = e.dataTransfer.getData('text'); // Получаем id элемента
  const draggableElement = document.getElementById(itemId);
  e.target.appendChild(draggableElement); // Перемещаем элемент в новый контейнер
}
