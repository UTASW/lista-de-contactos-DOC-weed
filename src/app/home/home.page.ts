import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';
import {PopoComponent} from '../popo/popo.component';
import { ServiceService } from '../service/service.service';
import { Contacto } from '../class/contacto';
import { Router } from '@angular/router';
import { ComponentModule } from '../components/component.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  arrPersonas1: Array<any>;
  shownotes: boolean;

  constructor(public alert: AlertController, public service: ServiceService, public rouer: Router  ) {
    this.arrPersonas1 = this.service.getArr();
  }
  ngOnInit() {
    this.arrPersonas1 = this.service.getArr();
  }
  async eliminar(item) {
  const alert =  await this.alert.create({
    message: 'Confirmar eliminación',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Aceptar',
        handler: () => {
          this.service.delete(item);

        }
      }
    ]

  });
  alert.present();

  }
  move() {
    this.rouer.navigateByUrl('popo');
  }

}
