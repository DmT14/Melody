$(document).ready(function () {
  let currentFloor = 2; // переменная, в которой хранится текущий этаж
  let floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
  let counterUp = $(".counter-up"); // кнопка увеличения этажа
  let counterDown = $(".counter-down"); // кнопка уменьшения этажа
  let modal = $(".modal"); // модальное окно этажа
  let modalCloseButton = $(".modal-close-button"); // кнопка закрытия модального окна
  let viewFlatsButton = $(".view-flats"); // кнопка для просмотра этажей

  // функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение
  });

  floorPath.on("click", toggleModal); // при клике на этаж вызвать окно
  modalCloseButton.on("click", toggleModal); // при клике на кнопку закрытия закрыть окно
  viewFlatsButton.on("click", toggleModal);

  // отслеживаем клик по кнопке вверх
  counterUp.on("click", function () {
    if (currentFloor < 18) {
      // проверяем значение этажа, оно не должно быть больше 18
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); // форматируем переменную с этажом, чтобы было 01, а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счётчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

  // отслеживаем клик по кнопке вниз
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      // проверяем значение этажа, оно не должно быть меньше 2
      currentFloor--; // вычитаем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); // форматируем переменную с этажом, чтобы было 01, а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счётчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

  function toggleModal() {
    // функция открытия/закрытия модального окна
    modal.toggleClass("is-open");
  }
});
