import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import * as Highcharts from 'highcharts';
import { Elements } from '../tool-bar/models/elements';
interface MockModel {
  name: string;
  y: string;
};

@Component({
  selector: 'app-analytic-graph',
  templateUrl: './analytic-graph.component.html',
  styleUrls: ['./analytic-graph.component.css']
})
export class AnalyticGraphComponent implements OnInit {

  objLuminaries!: [{
    name: 'Sin Asignar',
    y: 0,
    sliced: true,
    selected: true
  }];
  luminaries!: [];
  updateFlag = false;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Estadisticas Luminarias'
    },
    series: [
      {
        type: 'pie',
        data: this.objLuminaries,
      },
    ],
  };

 
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.addLuminairesLayer();
  }
  types = [
    {id:'tipo_soporte',name: 'tipo de soporte' },
    {id:'tipo_luminaria',name: 'tipo de luminaria' },
    {id:'tipo_lampara',name: 'tipo de lampara' },
  ];

  form = new FormGroup({
    type: new FormControl(this.types[0]),
  });

  private async addLuminairesLayer():Promise<void>
  {
    const luminaries = await (await fetch('assets/data/luminarias.geojson')).json();
    this.luminaries = luminaries.features.map((element: { properties: any; }) => {return element.properties});

  }

  submit(){
    console.log(this.form.value);
  }
  changeWebsite(e:any) {
    this.getSeries(e.target.value);
  }
  getSeries(atributo:string){
    
    let params:any = {};
    let dataPieChar = this.luminaries.reduce((acum:any, item:any):any =>{
      let itemkey:any = item[atributo] ||'Sin Asignar';
      params[itemkey] = (acum[itemkey]||0) + 1;
      return params;
    },{});
    
    let mocks: MockModel[] = [];
    this.objLuminaries = Object.entries(dataPieChar).reduce((acum:any, item:any):any=>{
      mocks.push({
          name: item[0],
          y:item[1],
      })
      return mocks;
    },[]);
    this.chartOptions = {
      series: [
        {
          type: 'pie',
          data: this.objLuminaries
        },
      ],
    }; 
    this.updateFlag = true;
  }
 
}
