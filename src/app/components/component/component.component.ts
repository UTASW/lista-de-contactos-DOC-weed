import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
})
export class ComponentComponent implements OnInit {
  arrPersonas1: Array<any>;
  shownotes: boolean;

  constructor(public alert: AlertController, public service: ServiceService) { }

  ngOnInit() {}
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
