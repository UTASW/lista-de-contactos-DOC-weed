import { CompComponent } from './comp/comp.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CompComponent
  ],
  imports: [
    IonicModule,
    FormsModule,
    RouterModule,
    CommonModule
    
  ],
  exports: [CompComponent]
})
export class ComponentModule { }
