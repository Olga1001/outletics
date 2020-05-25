// координаты маркеров
var markersData = [
   {
    lat: 40.744347,     // Широта
    lng: -74.047509,    // Долгота
    name: "GYM LOCATION", // Произвольное название, которое будем выводить в информационном окне
    url: 'img/map_pin.svg',
  },
  {
    lat: 40.820748,     // Широта
    lng: -73.920359,    // Долгота
    name: "GYM LOCATION", // Произвольное название, которое будем выводить в информационном окне
    url: 'img/map_pin.svg'
  },
  {
    lat: 40.771133,     // Широта
    lng: -74.038241,    // Долгота
    name: "GYM LOCATION", // Произвольное название, которое будем выводить в информационном окне
    url: 'img/map_pin.svg'
  },
  {
    lat: 40.819838,     // Широта
    lng: -74.296985,    // Долгота
    name: "GYM LOCATION", // Произвольное название, которое будем выводить в информационном окне
    url: 'img/map_pin.svg'
  },
  {
    lat: 40.780305,     // Широта
    lng: -73.781436,    // Долгота
    name: "GYM LOCATION", // Произвольное название, которое будем выводить в информационном окне
    url: 'img/map_pin.svg'
  },
  {
    lat: 40.817073,     // Широта
    lng: -74.282382,    // Долгота
    name: "GYM LOCATION", // Произвольное название, которое будем выводить в информационном окне
    url: 'img/map_pin.svg'
  },
  {
    lat: 40.813350,     // Широта
    lng: -74.050817,    // Долгота
    name: "GYM LOCATION", // Произвольное название, которое будем выводить в информационном окне
    url: 'img/map_pin.svg'
  }
]
// координаты центров городов
var centerMaps = [
  {
    latX: 40.813350,
    latY: -74.050817,
    scale: 1.1
  }
]
var map, latLng, url, name, mark, marker, thisCenter, popupContent;
function initMap() {
  popupContent = '<div class="content-title"><p>GYM LOCATION</p></div></div>'
  thisCenterX = centerMaps[0].latX;
  thisCenterY = centerMaps[0].latY;
  var centerLatLng = new google.maps.LatLng(thisCenterX, thisCenterY);
  var mapOptions = {
    center: centerLatLng,
    zoom: 12,
    scrollwheel: false,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false,
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Определяем границы видимой области карты в соответствии с положением маркеров
  var bounds = new google.maps.LatLngBounds();

  for (let i = 0; i < markersData.length; i++){

    latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
    name = markersData[i].name;
    url = markersData[i].url;
    number = markersData[i].number;
    addMarker(latLng, name, url, number);
  }
  infowindow = new google.maps.InfoWindow({
    content: popupContent
  });

  // Автоматически масштабируем карту так, чтобы все маркеры были в видимой области карты
  // map.fitBounds(bounds);
  var myoverlay = new google.maps.OverlayView();
  myoverlay.draw = function () {
    this.getPanes().markerLayer.id='markerLayer';
  };
  myoverlay.setMap(map);
  infowindow.open(map, marker);
  marker.setIcon({
    url: url,
    scale: 1.1
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
    marker.setIcon({
      url: url,
      scale: 1.1
    });
  });


  // marker.addListener('mouseover', function() {
  //   console.log("ss1");
  //   marker.setIcon({
  //     url: url,
  //     scale: 1.1
  //   });
  // });
  //
  // marker.addListener('mouseout', function() {
  //   console.log("ss2");
  //   marker.setIcon({
  //     url: url,
  //     scale: 1
  //   });
  // });
}

google.maps.event.addDomListener(window, "load", initMap);
function addMarker(latLng, name, url) {
  marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: name,
    icon: {
      url: url,
      scaledSize: new google.maps.Size(53, 64),
      scale: 1
    },
  });
}


