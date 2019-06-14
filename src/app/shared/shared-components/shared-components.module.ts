import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './card-container/card-container.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    CardContainerComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    CardContainerComponent,
    NavbarComponent
  ]
})
export class SharedComponentsModule { }
