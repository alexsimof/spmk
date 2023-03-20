
// создаём элемент <div>, который будем перемещать вместе с указателем мыши пользователя

let mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
let mapsBlock = document.querySelector('.maps-block');

mapTitle.textContent = 'Для активации карты нажмите по ней';

mapsBlock.appendChild(mapTitle);

// по клику на карту
mapsBlock.onclick = function() {

  this.children[0].removeAttribute('style');
  mapTitle.parentElement.removeChild(mapTitle);

}

mapsBlock.onmousemove = function(event) {
    // показываем подсказку
    mapTitle.style.display = 'block';
    // двигаем подсказку по области карты вместе с мышкой пользователя
    if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
    if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
}
// при уходе указателя мыши с области карты
mapsBlock.onmouseleave = function() {
    // прячем подсказку
    mapTitle.style.display = 'none';
}