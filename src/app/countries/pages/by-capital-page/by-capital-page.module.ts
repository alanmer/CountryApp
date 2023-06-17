import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ByCountryPageComponent } from '../by-country-page/by-country-page.component';
import { ByRegionPageComponent } from '../by-region-page/by-region-page.component';
import { CountryPageComponent } from '../country-page/country-page.component';



@NgModule({
  declarations: [
    ByCountryPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ByCapitalPageModule { }
