ymaps.ready(init);
var myMap;
var myPlacemark;

function init() {
  myMap = new ymaps.Map("map" , {
    center: [59.93632956, 30.32173485],
    zoom: 16
  });

  myPlacemark = new ymaps.Placemark([59.93632956, 30.32173485], {
    balloonContentHeader: "<img src="..img/icon/pin.png">",
    balloonContentBody: "",
    hintContent: "",
  },
  {
      iconLayout: "default#image",
      iconImageHref: "img/icon/pin.png",
      iconImageSize: [80, 140],
      iconImageOffset: [-40, -95]
  });

  myMap.geoObjects.add(myPlacemark);
}
