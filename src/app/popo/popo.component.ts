import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { AlertController } from '@ionic/angular';
import { Contacto } from '../class/contacto';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-popo',
  templateUrl: './popo.component.html',
  styleUrls: ['./popo.component.scss'],
})
export class PopoComponent implements OnInit {
  persona = new Contacto();
  showCard: boolean;
  Nlnext: boolean;
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  constructor(public service: ServiceService, public alert: AlertController) { }

  ngOnInit() {}
  addperson() {
    this.Nlnext = false;
    (this.persona.strNombre) ? this.fnError() : this.fnError('ERROR: Ingrese nombre');
    (this.persona.intNumero) ? this.fnError() : this.fnError('ERROR: Ingrese numero');
    // tslint:disable-next-line: max-line-length
    (this.persona.strCorreo) ? (this.regexp.test(this.persona.strCorreo)) ? this.fnError() : this.fnError('ERROR: Ingrese correo') : this.fnError('ERROR: Complete el correo');
    (this.persona.strNotas) ? this.fnError() : this.fnError('ERROR: Ingrese notas');
    (this.persona.strGenero) ? this.fnError() : this.fnError('ERROR: Selecione genero');
    if (!this.Nlnext) {
      this.service.guardar(this.persona);
      console.log(this.persona);
      this.datasave();

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

}
