import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomePageRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomePageRoutingModule, IonicModule],
})
export class HomeModule {}
