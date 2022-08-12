import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Elements } from './models/elements';
@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  @Input() childMessage:Elements = {}; 
  
  form: FormGroup;

  elementoSeleccionado: any;
  
  constructor(private router: ActivatedRoute,private fb:FormBuilder , private service: ServiceService) { 
    this.form  = this.fb.group({
      observaciones: ['', Validators.required],
      id_luminaria: ['', Validators.required],
      punto_luz: ['', Validators.required],
      vial: ['', Validators.required],
      numero: ['', Validators.required],
      lado_via: ['', Validators.required],
      distancia_eje: ['', Validators.required],
      s1: ['', Validators.required],
      s2: ['', Validators.required],
      centro_mando: ['', Validators.required],
      circuito: ['', Validators.required],
      operativa: ['', Validators.required],
      altura: ['', Validators.required],
      tipo_soporte: ['', Validators.required],
      marca_soporte: ['', Validators.required],
      modelo_soporte: ['', Validators.required],
      estado_soporte: ['', Validators.required],
      situacion_soporte: ['', Validators.required],
      tamano_brazo: ['', Validators.required],
      longitud_brazo: ['', Validators.required],
      orientacion_brazo: ['', Validators.required],
      tipo_luminaria: ['', Validators.required],
      marca_luminaria: ['', Validators.required],
      modelo_luminaria: ['', Validators.required],
      estado_luminaria: ['', Validators.required],
      tipo_lampara: ['', Validators.required],
      marca_lampara: ['', Validators.required],
      modelo_lampara: ['', Validators.required],
      estado_lampara: ['', Validators.required],
      cantidad_lamparas: ['', Validators.required],
      potencia: ['', Validators.required],
      equipo_auxiliar: ['', Validators.required],
      situacion_equipo_auxiliar: ['', Validators.required],
      orientacion: ['', Validators.required],
      alta: ['', Validators.required],
      usuario_alta: ['', Validators.required],
      fecha_alta: ['', Validators.required],
      modificado: ['', Validators.required],
      usuario_modificado: ['', Validators.required],
      fecha_modificado: ['', Validators.required],
      herramienta: ['', Validators.required],
      numero_registro: ['', Validators.required],
      envio: ['', Validators.required],
      fecha_envio: ['', Validators.required],
      id_centro_mando: ['', Validators.required],
      id_circuito: ['', Validators.required],
    });
  }
 
  ngOnInit(): void {

    this.service.elementoSeleccionado.subscribe(elemento => {
      console.log(elemento);
      this.elementoSeleccionado = elemento
      this.patchForm();
    })

  }
  
 
  patchForm(){
    console.log(this.elementoSeleccionado);
    this.form.patchValue({
      observaciones: this.elementoSeleccionado.observaciones ?? '',
      id_luminaria: this.elementoSeleccionado.id_luminaria ?? '',
      punto_luz: this.elementoSeleccionado.punto_luz ?? '',
      vial: this.elementoSeleccionado.vial ?? '',
      numero: this.elementoSeleccionado.numero ?? '',
      lado_via: this.elementoSeleccionado.lado_via ?? '',
      distancia_eje: this.elementoSeleccionado.distancia_eje ?? '',
      s1: this.elementoSeleccionado.s1 ?? '',
      s2: this.elementoSeleccionado.s2 ?? '',
      centro_mando: this.elementoSeleccionado.centro_mando ?? '',
      circuito: this.elementoSeleccionado.circuito ?? '',
      operativa: this.elementoSeleccionado.operativa ?? '',
      altura: this.elementoSeleccionado.altura ?? '',
      tipo_soporte: this.elementoSeleccionado.tipo_soporte ?? '',
      marca_soporte: this.elementoSeleccionado.marca_soporte ?? '',
      modelo_soporte: this.elementoSeleccionado.modelo_soporte ?? '',
      estado_soporte: this.elementoSeleccionado.estado_soporte ?? '',
      situacion_soporte: this.elementoSeleccionado.situacion_soporte ?? '',
      tamano_brazo: this.elementoSeleccionado.tamano_brazo ?? '',
      longitud_brazo: this.elementoSeleccionado.longitud_brazo ?? '',
      orientacion_brazo: this.elementoSeleccionado.orientacion_brazo ?? '',
      tipo_luminaria: this.elementoSeleccionado.tipo_luminaria ?? '',
      marca_luminaria: this.elementoSeleccionado.marca_luminaria ?? '',
      modelo_luminaria: this.elementoSeleccionado.modelo_luminaria ?? '',
      estado_luminaria: this.elementoSeleccionado.estado_luminaria ?? '',
      tipo_lampara: this.elementoSeleccionado.tipo_lampara ?? '',
      marca_lampara: this.elementoSeleccionado.marca_lampara ?? '',
      modelo_lampara: this.elementoSeleccionado.modelo_lampara ?? '',
      estado_lampara: this.elementoSeleccionado.estado_lampara ?? '',
      cantidad_lamparas: this.elementoSeleccionado.cantidad_lamparas ?? '',
      potencia: this.elementoSeleccionado.potencia ?? '',
      equipo_auxiliar: this.elementoSeleccionado.equipo_auxiliar ?? '',
      situacion_equipo_auxiliar: this.elementoSeleccionado.situacion_equipo_auxiliar ?? '',
      orientacion: this.elementoSeleccionado.orientacion ?? '',
      alta: this.elementoSeleccionado.alta ?? '',
      usuario_alta: this.elementoSeleccionado.usuario_alta ?? '',
      fecha_alta: this.elementoSeleccionado.fecha_alta ?? '',
      modificado: this.elementoSeleccionado.modificado ?? '',
      usuario_modificado: this.elementoSeleccionado.usuario_modificado ?? '',
      fecha_modificado: this.elementoSeleccionado.fecha_modificado ?? '',
      herramienta: this.elementoSeleccionado.herramienta ?? '',
      numero_registro: this.elementoSeleccionado.numero_registro ?? '',
      envio: this.elementoSeleccionado.envio ?? '',
      fecha_envio: this.elementoSeleccionado.fecha_envio ?? '',
      id_centro_mando: this.elementoSeleccionado.id_centro_mando ?? '',
      id_circuito: this.elementoSeleccionado.id_circuito ?? '',
    });
  }

}
