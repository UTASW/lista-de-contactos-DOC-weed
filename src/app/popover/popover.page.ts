import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Contacto } from '../class/contacto';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  showCard: boolean;
  Nlnext: boolean;
  nombre: string;
  numero: number;
  correo: string;
  notas: string;
  genero: string;
  date: Date;

  
  // tslint:disable-next-line: max-line-length
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  constructor(public service: ServiceService, public alert: AlertController, public route: Router) { }

  ngOnInit() {
    
  }
  addperson() {
     let persona: any = {
      strNombre : this.nombre,
      intNumero : this.numero,
      strCorreo : this.correo,
      strNotas : this.notas,
      strGenero : this.genero,
      dteDate : this.date
    };
     this.Nlnext = false;
     (persona.strNombre) ? this.fnError() : this.fnError('ERROR: Ingrese nombre');
     (persona.intNumero) ? this.fnError() : this.fnError('ERROR: Ingrese numero');
    // tslint:disable-next-line: max-line-length
     (persona.strCorreo) ? (this.regexp.test(persona.strCorreo)) ? this.fnError() : this.fnError('ERROR: Ingrese correo') : this.fnError('ERROR: Complete el correo');
     (persona.strNotas) ? this.fnError() : this.fnError('ERROR: Ingrese notas');
     (persona.strGenero) ? this.fnError() : this.fnError('ERROR: Selecione genero');
     if (!this.Nlnext) {
       this.service.guardar(persona);
       console.log(persona);
       this.datasave();
       this.nombre = this.correo = this.notas= this.genero = '';
       this.numero = this.date = null;

    }
  }
    async alertdata(msg) {
      const alert = await this.alert.create({
        message: msg
      });
      alert.present();
    }
    fnError(msg?: string) {
      if (msg) {
          this.alertdata(msg);
          this.Nlnext = true;
      } else if (this.Nlnext) {
          this.Nlnext = true;
      } else {
          this.Nlnext = false;
      }
  }  
  
    async datasave() {
      const alert = await this.alert.create({
        message: 'Datos almacenados '
      });
      alert.present();
    }
    move(){
      this.route.navigateByUrl('home');

    }
  
}
