import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';
import { ContactPageComponent } from './shared/pages/contactPage/contactPage.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent,
  // },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'countries',
    loadChildren: () =>
      import('./countries/countries.module').then(m => m.CountriesModule),
  },
  {
    path: '**',
    redirectTo: 'countries',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}