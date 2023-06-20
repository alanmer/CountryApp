import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ByCountryPageComponent } from '../by-country-page/by-country-page.component';
import { ByRegionPageComponent } from '../by-region-page/by-region-page.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule],
})
export class ByCapitalPageModule {}
