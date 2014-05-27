/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Coordenadas

//Centro
//var x=new google.maps.LatLng(10.4757,-66.5487);
var x=new google.maps.LatLng(10.464770706581866,-66.52496337890625);
//Marcas
var x1=new google.maps.LatLng(10.4757,-66.5487);
var x2=new google.maps.LatLng(10.484435992806405,-66.56294345855713);
var x3=new google.maps.LatLng(10.483381019866222,-66.53140068054199);
var x4=new google.maps.LatLng(10.468611021450146,-66.51676654815674);
var x5=new google.maps.LatLng(10.46038171708832,-66.56538963317871);
var x6=new google.maps.LatLng(10.468231212208554,-66.50599479675293);
var x7=new google.maps.LatLng(10.450843891331695,-66.4826488494873);
var x8=new google.maps.LatLng(10.442149865806433,-66.51543617248535);

//Cuadrante1
var A=new google.maps.LatLng(10.495491892912016,-66.55320167541504);
var B=new google.maps.LatLng(10.465023915619811,-66.55577659606934);
var C=new google.maps.LatLng(10.458018389341188,-66.54006958007812);
var D=new google.maps.LatLng(10.492200483032397,-66.54152870178223);

//Cuadrante2
var A2=new google.maps.LatLng(10.508910355187869,-66.57028198242188);
var B2=new google.maps.LatLng(10.471691679218754,-66.58444404602051);
var C2=new google.maps.LatLng(10.465023915619811,-66.55577659606934);
var D2=new google.maps.LatLng(10.495491892912016,-66.55320167541504);

//Cuadrante3
var A3=new google.maps.LatLng(10.492200483032397,-66.54152870178223);
var B3=new google.maps.LatLng(10.458018389341188,-66.54006958007812);
var C3=new google.maps.LatLng(10.469412839432476,-66.52839660644531);
var D3=new google.maps.LatLng(10.490174982623829,-66.51861190795898);
var E3=new google.maps.LatLng(10.50047113871245,-66.52934074401855);

//Cuadrante4
var A4=new google.maps.LatLng(10.458018389341188,-66.54006958007812);
var B4=new google.maps.LatLng(10.469412839432476,-66.52839660644531);
var C4=new google.maps.LatLng(10.479625287026629,-66.51294708251953);
var D4=new google.maps.LatLng(10.470847666436164,-66.50861263275146);
var E4=new google.maps.LatLng(10.45768076962263,-66.5178394317627);

//Cuadrante5
var A5=new google.maps.LatLng(10.471691679218754,-66.58444404602051);
var B5=new google.maps.LatLng(10.456245881722362,-66.57689094543457);
var C5=new google.maps.LatLng(10.446876744807676,-66.5412712097168);
var D5=new google.maps.LatLng(10.458018389341188,-66.54006958007812);
var E5=new google.maps.LatLng(10.465023915619811,-66.55577659606934);

//Cuadrante6
var A6=new google.maps.LatLng(10.45768076962263,-66.5178394317627);
var B6=new google.maps.LatLng(10.470847666436164,-66.50861263275146);
var C6=new google.maps.LatLng(10.474350304463034,-66.48526668548584);
var D6=new google.maps.LatLng(10.457638567132005,-66.50041580200195)

//Cuadrante7
var A7=new google.maps.LatLng(10.457427554592762,-66.50050163269043);
var B7=new google.maps.LatLng(10.441474591510044,-66.48595333099365);
var C7=new google.maps.LatLng(10.456667908263837,-66.41767501831055);

//Cuadrante8
var A8=new google.maps.LatLng(10.45780737706013,-66.53989791870117);
var B8=new google.maps.LatLng(10.446876744807676,-66.5412712097168);
var C8=new google.maps.LatLng(10.372251212791701,-66.47101879119873);
var D8=new google.maps.LatLng(10.441474591510044,-66.48595333099365);
var E8=new google.maps.LatLng(10.457427554592762,-66.50050163269043);

function initialize()
    {
    //Propiedades del Mapa    
     var mapProp = {
       center:x,
       zoom:13,
       mapTypeId: google.maps.MapTypeId.ROADMAP
       };
    //Creación del Mapa
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    
    //Poligono1
    var myTrip=[A,B,C,D,A];
    var flightPath=new google.maps.Polygon({
      path:myTrip,
      strokeColor:"#FAAC58",
      strokeOpacity:0.8,
      strokeWeight:2,
      fillColor:"#FAAC58",
      fillOpacity:0.4
      });
    flightPath.setMap(map);
    
    //Poligono2
    var myTrip2=[A2,B2,C2,D2,A2];
    var flightPath2=new google.maps.Polygon({
      path:myTrip2,
      strokeColor:"#F4FA58",
      strokeOpacity:0.8,
      strokeWeight:2,
      fillColor:"#F4FA58",
      fillOpacity:0.4
      });
    flightPath2.setMap(map);
    
    //Poligono3
    var myTrip3=[A3,B3,C3,D3,E3,A3];
    var flightPath3=new google.maps.Polygon({
      path:myTrip3,
      strokeColor:"#ACFA58",
      strokeOpacity:0.8,
      strokeWeight:2,
      fillColor:"#ACFA58",
      fillOpacity:0.4
      });
    flightPath3.setMap(map);
    
    //Poligono4
    var myTrip4=[A4,B4,C4,D4,E4,A4];
    var flightPath4=new google.maps.Polygon({
      path:myTrip4,
      strokeColor:"#58FAAC",
      strokeOpacity:0.8,
      strokeWeight:2,
      fillColor:"#58FAAC",
      fillOpacity:0.4
      });
    flightPath4.setMap(map);
    
    //Poligono5
    var myTrip5=[A5,B5,C5,D5,E5,A5];
    var flightPath5=new google.maps.Polygon({
      path:myTrip5,
      strokeColor:"#58ACFA",
      strokeOpacity:0.8,
      strokeWeight:2,
      fillColor:"#58ACFA",
      fillOpacity:0.4
      });
    flightPath5.setMap(map);
    
    //Poligono6
    var myTrip6=[A6,B6,C6,D6,A6];
    var flightPath6=new google.maps.Polygon({
      path:myTrip6,
      strokeColor:"#8258FA",
      strokeOpacity:0.8,
      strokeWeight:2,
      fillColor:"#8258FA",
      fillOpacity:0.4
      });
    flightPath6.setMap(map);
    
    //Poligono7
    var myTrip7=[A7,B7,C7,A7];
    var flightPath7=new google.maps.Polygon({
      path:myTrip7,
      strokeColor:"#FA58F4",
      strokeOpacity:0.8,
      strokeWeight:2,
      fillColor:"#FA58F4",
      fillOpacity:0.4
      });
    flightPath7.setMap(map);
    
    //Poligono8
    var myTrip8=[A8,B8,C8,D8,E8,A8];
    var flightPath8=new google.maps.Polygon({
      path:myTrip8,
      strokeColor:"#FA5882",
      strokeOpacity:0.8,
      strokeWeight:2,
      fillColor:"#FA5882",
      fillOpacity:0.4
      });
    flightPath8.setMap(map);
    
    //Marca1
    var marker=new google.maps.Marker({
     position:x1,
     });
    marker.setMap(map);
    
    var infowindow = new google.maps.InfoWindow({
        content:"Cuadrante1 04268194385"
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    //Marca2
    var marker2=new google.maps.Marker({
     position:x2,
     });
    marker2.setMap(map);
    
    var infowindow2 = new google.maps.InfoWindow({
        content:"Cuadrante2 04268194980"
    });

    google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map,marker2);
    });
    
   //Marca3
    var marker3=new google.maps.Marker({
     position:x3,
     });
    marker3.setMap(map);
    
    var infowindow3 = new google.maps.InfoWindow({
        content:"Cuadrante3 04268196114"
    });

    google.maps.event.addListener(marker3, 'click', function() {
        infowindow3.open(map,marker3);
    });
    
    //Marca4
    var marker4=new google.maps.Marker({
     position:x4,
     });
    marker4.setMap(map);
    
    var infowindow4 = new google.maps.InfoWindow({
        content:"Cuadrante4 04268196526"
    });

    google.maps.event.addListener(marker4, 'click', function() {
        infowindow4.open(map,marker4);
    });
    
    //Marca5
    var marker5=new google.maps.Marker({
     position:x5,
     });
    marker5.setMap(map);
    
    var infowindow5 = new google.maps.InfoWindow({
        content:"Cuadrante5 04268194692"
    });

    google.maps.event.addListener(marker5, 'click', function() {
        infowindow5.open(map,marker5);
    });
    
    //Marca6
    var marker6=new google.maps.Marker({
     position:x6,
     });
    marker6.setMap(map);
    
    var infowindow6 = new google.maps.InfoWindow({
        content:"Cuadrante6 04268197063"
    });

    google.maps.event.addListener(marker6, 'click', function() {
        infowindow6.open(map,marker6);
    });
    
    //Marca7
    var marker7=new google.maps.Marker({
     position:x7,
     });
    marker7.setMap(map);
    
    var infowindow7 = new google.maps.InfoWindow({
        content:"Cuadrante7 04167065277"
    });

    google.maps.event.addListener(marker7, 'click', function() {
        infowindow7.open(map,marker7);
    });
    
    //Marca8
    var marker8=new google.maps.Marker({
     position:x8,
     });
    marker8.setMap(map);
    
    var infowindow8 = new google.maps.InfoWindow({
        content:"Cuadrante8 04167060711"
    });

    google.maps.event.addListener(marker8, 'click', function() {
        infowindow8.open(map,marker8);
    });
    }

google.maps.event.addDomListener(window, 'load', initialize);