import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { ServiceService } from 'src/app/service/service.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss'],
})
export class CompComponent implements OnInit {
  arrPersonas1: Array<any>;
  shownotes= false;
  constructor(public alert: AlertController, public service: ServiceService) { }

  ngOnInit() {
    this.arrPersonas1=this.service.getArr();
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
}
