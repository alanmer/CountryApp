import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';
import { SerchBoxComponent } from './components/serch-box/serch-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [CommonModule,RouterModule],
  declarations: [HomePageComponent, AboutPageComponent, SidebarComponent,ContactPageComponent, SerchBoxComponent, LoadingSpinnerComponent],
  exports: [HomePageComponent, AboutPageComponent, SidebarComponent,ContactPageComponent,SerchBoxComponent,LoadingSpinnerComponent],
})
export class SharedModule {}
