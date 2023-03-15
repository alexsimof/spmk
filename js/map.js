ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [55.76, 37.64],
        zoom: 8,
        },
        {
          searchControlProvider: "yandex#search",
        },
      
      ),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),


      myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'spmk#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/point.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    


    objectManager = new ymaps.ObjectManager({
      // Чтобы метки начали кластеризоваться, выставляем опцию.
      clusterize: true,
      // ObjectManager принимает те же опции, что и кластеризатор.
      gridSize: 100,
      clusterDisableClickZoom: true,
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('drag');


    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    objectManager.objects.options.set("preset", "islands#greenDotIcon");
    objectManager.clusters.options.set("preset", "islands#greenClusterIcons");
    myMap.geoObjects.add(objectManager);
    $.ajax({
      url: "/js/data.json",
    }).done(function (data) {
      objectManager.add(data);
    });




  myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
}
