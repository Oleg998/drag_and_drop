const textContainer = document.getElementById("textContainer");

let isSelecting = false;
let startX, startY;
let selectionRect;


textContainer.addEventListener('mousedown', (e) => {
    if (e.ctrlKey || e.target.classList.contains('letter')) return; 

    isSelecting = true;
    startX = e.pageX - textContainer.getBoundingClientRect().left;
    startY = e.pageY - textContainer.getBoundingClientRect().top;

    selectionRect = document.createElement('div');
    selectionRect.classList.add('selection-rectangle');
    selectionRect.style.left = `${startX}px`;
    selectionRect.style.top = `${startY}px`;
    textContainer.appendChild(selectionRect);
});


document.addEventListener('mousemove', (e) => {
    if (!isSelecting) return;

    const currentX = e.pageX - textContainer.getBoundingClientRect().left;
    const currentY = e.pageY - textContainer.getBoundingClientRect().top;

    const width = Math.abs(currentX - startX);
    const height = Math.abs(currentY - startY);
    selectionRect.style.width = `${width}px`;
    selectionRect.style.height = `${height}px`;
    selectionRect.style.left = `${Math.min(currentX, startX)}px`;
    selectionRect.style.top = `${Math.min(currentY, startY)}px`;

    const chars = document.querySelectorAll('.letter');
    chars.forEach((char) => {
        const charRect = char.getBoundingClientRect();
        const containerRect = textContainer.getBoundingClientRect();

        const charX = charRect.left - containerRect.left;
        const charY = charRect.top - containerRect.top;

        const charInRect = (
            charX + charRect.width > Math.min(startX, currentX) &&
            charX < Math.max(startX, currentX) &&
            charY + charRect.height > Math.min(startY, currentY) &&
            charY < Math.max(startY, currentY)
        );

        if (charInRect) {
            char.classList.add('selected');
        } else {
            char.classList.remove('selected');
        }
    });
});

document.addEventListener('mouseup', () => {
    if (isSelecting && selectionRect) {
        textContainer.removeChild(selectionRect);
        selectionRect = null;
    }
    isSelecting = false;
});


textContainer.addEventListener('click', (e) => {
    if (!e.ctrlKey) return;

    const x = e.pageX - textContainer.getBoundingClientRect().left;
    const y = e.pageY - textContainer.getBoundingClientRect().top;

    const chars = document.querySelectorAll('.letter');
    chars.forEach((char) => {
        const charRect = char.getBoundingClientRect();
        const containerRect = textContainer.getBoundingClientRect();

        const charX = charRect.left - containerRect.left;
        const charY = charRect.top - containerRect.top;

        const charInRect = (
            x >= charX &&
            x <= charX + charRect.width &&
            y >= charY &&
            y <= charY + charRect.height
        );

        if (charInRect) {
            char.classList.toggle('selected');
        }
    });
});
