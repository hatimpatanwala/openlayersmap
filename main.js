alert("Activate Point Vector Feature to display points and circle on it")

var pointvec = document.getElementById("secondvecbox")
var circle =0
var circleFeature=[]
var vectorcirclelayer
var firstvec =ol.proj.fromLonLat([79.0504,21.1309])
var secvec=ol.proj.fromLonLat([72.82370209693909,18.928168492894276])
var thirdvec=ol.proj.fromLonLat([75.87101340293883,22.719912712487243])
var fourthvec =ol.proj.fromLonLat([73.68925094604492,24.59288529952602])
var fifthvec =ol.proj.fromLonLat([77.21968173980713,28.632784466413323])
var sixthvec = ol.proj.fromLonLat([70.80382704734802,22.30430405846771])
var seventhvec = ol.proj.fromLonLat([81.62944793701172,21.23888243562229])
var eigthvec = ol.proj.fromLonLat([78.02135109901428,27.17982871566579])
var ninthvec = ol.proj.fromLonLat([88.32052946090698,22.59165086228068])
var tenthvec = ol.proj.fromLonLat([78.47464442253113,17.361708182693746])

var output = document.getElementById("demo");
output.innerHTML = document.getElementById("myRange").value;


var circlestyle=new ol.style.Style({
    renderer: function renderer(coordinates, state) {
      var coordinates_0 = coordinates[0];
      var x = coordinates_0[0];
      var y = coordinates_0[1];
      var coordinates_1 = coordinates[1];
      var x1 = coordinates_1[0];
      var y1 = coordinates_1[1];
      var ctx = state.context;
      var dx = x1 - x;
      var dy = y1 - y;
      var radius = Math.sqrt(dx * dx + dy * dy);

      var innerRadius = 0;
      var outerRadius = radius * 1.4;

      var gradient = ctx.createRadialGradient(
        x,
        y,
        innerRadius,
        x,
        y,
        outerRadius
      );
      gradient.addColorStop(0, 'rgba(255,0,0,0)');
      gradient.addColorStop(0.6, 'rgba(255,0,0,0.2)');
      gradient.addColorStop(1, 'rgba(255,0,0,0.8)');
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.strokeStyle = 'rgba(255,0,0,1)';
      ctx.stroke();
    },
  });
var india = ol.proj.fromLonLat([78.96,20.59]);

var firstview = new ol.View({
  center: [0,0],
  zoom: 4,
 })


var mainlayer = new ol.layer.Tile({
  source: new ol.source.OSM({
    attributions: "6Simplex Task - Hatim Patanwala"
  })
})





var secondvector = new ol.layer.Vector({
  source: new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      url: 'map.geojson'
  })
})



var firstvector = new ol.layer.Vector({
  source: new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      url: 'countries.geojson'
  })
})

function onClick(id, callback) {
document.getElementById(id).addEventListener('click', callback);
  }
  

onClick('pan-to-india', function () {
  if(pointvec.checked == true){
    firstview.animate({
      center: india,
      duration: 2000,
      
    });
  }
    else{
      pointvec.checked = true
      map.addLayer(secondvector)
       circle1(2000)
       firstview.animate({
        center: india,
        duration: 2000,
        
      });
    }
  })

     
    
  
  
   
// outline vector checkbox function
  onClick("firstvecbox", function firstvec(){
     var outline = document.getElementById("firstvecbox")
    if(outline.checked == true){
        var check = true;
         map.addLayer(firstvector)
            }
    else{  map.removeLayer(firstvector)  }
})
  // point vector checkbox function
onClick("secondvecbox", function secondvec(){
    
   if(pointvec.checked == true){
      
       map.addLayer(secondvector)
       circle1(2000)
     }
   else{  map.removeLayer(secondvector) 
          map.removeLayer(vectorcirclelayer) }
        })

// Drawing circles dynamically on points
  function circle1(circleradius){
    
  map.removeLayer(vectorcirclelayer)
  circleFeature[0] = new ol.Feature({
    geometry: new ol.geom.Circle(firstvec, circleradius),
    });
    circleFeature[1] = new ol.Feature({
      geometry: new ol.geom.Circle(secvec, circleradius),
      });
  circleFeature[2] = new ol.Feature({
        geometry: new ol.geom.Circle(thirdvec, circleradius),
        });
  circleFeature[3] = new ol.Feature({
          geometry: new ol.geom.Circle(fourthvec, circleradius),
          });
  circleFeature[4] = new ol.Feature({
    geometry: new ol.geom.Circle(fifthvec, circleradius),
    });
  circleFeature[5] = new ol.Feature({
    geometry: new ol.geom.Circle(sixthvec, circleradius),
    });
  circleFeature[6] = new ol.Feature({
    geometry: new ol.geom.Circle(seventhvec, circleradius),
    });
  circleFeature[7] = new ol.Feature({
    geometry: new ol.geom.Circle(eigthvec, circleradius),
    });
  circleFeature[8] = new ol.Feature({
    geometry: new ol.geom.Circle(ninthvec, circleradius),
    });
  circleFeature[9] = new ol.Feature({
    geometry: new ol.geom.Circle(tenthvec, circleradius),
    }); 
    circleFeature[0].setStyle(circlestyle)
circleFeature[1].setStyle(circlestyle)
circleFeature[2].setStyle(circlestyle)
circleFeature[3].setStyle(circlestyle)
circleFeature[4].setStyle(circlestyle)
circleFeature[5].setStyle(circlestyle)
circleFeature[6].setStyle(circlestyle)
circleFeature[7].setStyle(circlestyle)
circleFeature[8].setStyle(circlestyle)
circleFeature[9].setStyle(circlestyle)
    vectorcirclelayer = new ol.layer.Vector({
      source: new ol.source.Vector({
          features:[circleFeature[0],circleFeature[1],circleFeature[2],circleFeature[3],circleFeature[4],circleFeature[5],
          circleFeature[6],circleFeature[7],circleFeature[8],circleFeature[9]],
      })
    })
    
  map.addLayer(vectorcirclelayer)
 }

// Slider range call function
function onInput(id, callback) {
  document.getElementById(id).addEventListener('input', callback);
    }
    onInput("myRange",  function ()  {
     circleradius1 = document.getElementById("myRange").value * 1000
    
      output.innerHTML = document.getElementById("myRange").value;
      if(pointvec.checked == true)
      {circle1(circleradius1)}
      
    
    })
    


var map = new ol.Map({
  target: 'map',
  layers: [mainlayer],
  view: firstview,
  controls:ol.control.defaults().extend([new ol.control.FullScreen()]),
    
    interactions: ol.interaction.defaults({dragPan: false, mouseWheelZoom: false}).extend([
      new ol.interaction.DragPan({
        condition: function (event) {
          return this.getPointerCount() === 2 || ol.events.condition.platformModifierKeyOnly(event);
        },
      }),
      new ol.interaction.MouseWheelZoom({
        condition: ol.events.condition.platformModifierKeyOnly,
      }) ]),

});





function coordcalc(add){
  if(add == 1){
    if(circle > 10)
    {
      circle = 1
    }
    else{circle = circle+1}
  }
  if(add == 0){
    if(circle < 1)
    {
      circle = 10
    }
    else{
      circle = circle -1
    }
    
  }

switch(circle)

{
  case 1 : coordi = firstvec
  break;
  case 2 : coordi = secvec
  break;
  case 3 : coordi = thirdvec
  break
  case 4 : coordi = fourthvec
  break;
  case 5 : coordi = fifthvec
  break;
  case 6 : coordi = sixthvec
  break;
  case 7 : coordi = seventhvec
  break;
  case 8 : coordi = eigthvec
  break;
  case 9 : coordi = ninthvec
  break;
  case 10 : coordi = tenthvec
  break;
  default : {circle = 1
   coordi = ol.proj.fromLonLat([79.0504,21.1309])}
  break;
}

firstview.animate({
  center: coordi,
  zoom:12,
  duration: 2000,
});
}
onClick('nextvecpoint', function () {
  if(pointvec.checked == true)
  {
  coordcalc(add=1)
  }
  else {
    alert("Activate Point Vector Feature")
  }
});
onClick('prevvecpoint', function () {
  if(pointvec.checked == true)
  {
  coordcalc(add=0)
  }
  else {
    alert("Activate Point Vector Feature")
  }
});
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

var zoomslider = new ol.control.ZoomSlider();
  map.addControl(zoomslider);
  
  //styles

var style = new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'rgba(255, 255, 255, 0.6)',
  }),
  stroke: new ol.style.Stroke({
    color: '#319FD3',
    width: 1,
  }),
  text: new ol.style.Text({
    font: '12px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: '#000',
    }),
    stroke: new ol.style.Stroke({
      color: '#fff',
      width: 3,
    }),
  }),
});
var highlightStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: '#f00',
    width: 1,
  }),
  fill: new ol.style.Fill({
    color: 'rgba(255,0,0,0.1)',
  }),
  text: new ol.style.Text({
    font: '12px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: '#000',
    }),
    stroke: new ol.style.Stroke({
      color: '#f00',
      width: 3,
    }),
  }),
});
// new feature vector layer
var featureOverlay = new ol.layer.Vector({
  source: new ol.source.Vector(),
  map: map,
  style: function (feature) {
    highlightStyle.getText().setText(feature.get('name'));
    return highlightStyle;
  },
});
var highlight;
var displayFeatureInfo = function (pixel) {
  var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
    return feature;
  });

  var info = document.getElementById('info');
  if (feature) {
    info.innerHTML = feature.getId() + ': ' + feature.get('name');
  } else {
    info.innerHTML = '&nbsp;';
  }

  if (feature !== highlight) {
    if (highlight) {
      featureOverlay.getSource().removeFeature(highlight);
    }
    if (feature) {
      featureOverlay.getSource().addFeature(feature);
    }
    highlight = feature;
  }
};

map.on('pointermove', function (evt) {
  if (evt.dragging) {
    return;
  }
  var pixel = map.getEventPixel(evt.originalEvent);
  displayFeatureInfo(pixel);
});

map.on('click', function (evt) {
  displayFeatureInfo(evt.pixel);
});
 
onClick('ex-zoom-out', function () {
    firstview.animate({
      zoom:3,
      duration: 2000,
      
    });
})

