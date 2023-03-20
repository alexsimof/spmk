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
      
      );

    objectManager = new ymaps.ObjectManager({
		 // Чтобы метки начали кластеризоваться, выставляем опцию.
      clusterize: true,
      // ObjectManager принимает те же опции, что и кластеризатор.
      gridSize: 100,
      clusterDisableClickZoom: true,
	});
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('drag');

	const myPlacemark =  {
    iconLayout: 'default#image',
    iconImageHref: 'images/point.svg',
    iconImageSize: [48, 48],
    iconImageOffset: [-3, -42]
};
	const myClasters =  {
		clusterIcons: [
   	{href: 'images/red.png',
   	size: [48, 48],
   	offset: [-20, -20],
		color: "white",
	}]
};



    objectManager.objects.options.set("preset", myPlacemark);
    objectManager.clusters.options.set("preset", myClasters);
	  objectManager.clusters.options.set('balloonContentLayoutHeight', '')
    myMap.geoObjects.add(objectManager);
    $.ajax({
      url: "./js/data.json",
    }).done(function (data) {
      objectManager.add(data);
    });

}

