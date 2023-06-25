import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { ValidRegion } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css'],
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions?: ValidRegion[] = [
    'Africa',
    'America',
    'Europe',
    'Asia',
    'Oceania',
  ];

  public selectRegion?: ValidRegion;

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
  this.countries=this.countriesService.cacheStore.byRegion.countries;
  this.selectRegion=this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region:ValidRegion): void {
    this.selectRegion=region;
    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
