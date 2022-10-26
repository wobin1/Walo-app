import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    MatSliderModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
    
  ],

  exports: [
    MatSliderModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
