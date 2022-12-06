class Ejercicio11 {
  constructor() {
    navigator.geolocation.getCurrentPosition(this.previo.bind(this));
    this.mostrado = false;
  }

  previo(p) {
    this.posicion = p;
  }

  initMap() {
    var centro = { lat: 40.416895133420645, lng: -3.703282134664379 };//el centro por defecto esta en el km0 en madrid
    var mapaGeoposicionado = new google.maps.Map(document.getElementsByTagName('main')[0], {//crea el mapa dinámico
      zoom: 8,
      center: centro,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infoWindow = new google.maps.InfoWindow;//crea el marcador de informacion
    if (navigator.geolocation) {//si el navegador soporta la geolocalizacion
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {//sacamos latitud y longitud
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);//seteamos la posicion
        infoWindow.setContent('Su localización');//lo que trae el infowindow
        infoWindow.open(mapaGeoposicionado);
        mapaGeoposicionado.setCenter(pos);//centro en la posicion del usuario
      }, //se ha rechazado la geolocalización
        function () {
          $("h1").after("<h2>Se ha rechazado la geolocalizacion</h2>");
        }

      );

    } else {
      // Navegador no soporta geolocalización
      $("h1").after("<h2>El navegador no soporta geolocalización</h2>");
    }
  }



}
var mapaDinamicoGoogle = new Ejercicio11();