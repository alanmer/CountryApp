import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css'],
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCountry(pais: string): void {
    this.countriesService.searchCountry(pais).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
