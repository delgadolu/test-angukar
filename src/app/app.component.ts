import { Component, Input } from '@angular/core';
import { circleMarker, geoJSON, GeoJSONOptions, LatLng, LatLngBounds, Layer, LayerGroup, Map, MapOptions, tileLayer, TileLayer } from 'leaflet';
import { Router } from '@angular/router';
import { ServiceService } from './services/service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  parentMessage !: {};
   map: Map | undefined;
  public mapOptions:MapOptions = {
    zoom: 17,
    zoomControl: false,
    center: [40.395347, -3.694041],
    preferCanvas: true
  };

  public baseLayer:TileLayer;

  public  mapFitBounds:LatLngBounds = new LatLngBounds([
    [37.50547228, -4.22810257],
    [37.70590845000001, -3.98959274]
  ]);

  public constructor(private router: Router, private service : ServiceService)
  {
    
    this.baseLayer = tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      crossOrigin: 'anonymous',
      className: 'OSM',
      maxNativeZoom: 19,
      maxZoom: 22,
      minZoom: 5
    });

    

  }

  public onMapReady(map:Map):void
  {
    this.map = map;
    this.addLuminairesLayer();
  }

  private highlightFeature(e :any) {
    console.log(e);
    const layer = e.target;
    
    // this.parentMessage = layer.feature.properties;
    this.service.elementoSeleccionado.emit( layer.feature.properties)
    // this.gotoBedroom();
    
  }

  private async addLuminairesLayer():Promise<void>
  {
    const luminaires = await (await fetch('assets/data/luminarias.geojson')).json();

    const options:GeoJSONOptions = {
      pointToLayer: (feature:GeoJSON.Feature, latLng:LatLng) => circleMarker(latLng),
      style: feature =>  ({
        radius: 8, 
        color: "#333",
        fillColor: "#FFFA4D",
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      }), 
      onEachFeature: (feature, layer) => (
        layer
        .bindPopup('Luminaria: ' + feature.properties.id_luminaria)
        .on({
          click: (e) => (this.highlightFeature(e)),
        })
      )
    };
    geoJSON(luminaires, options).addTo(this.map!);
  }

  gotoBedroom() {
    this.router.navigate(['/tool-bar'], { state: this.parentMessage });
  }
  
}
