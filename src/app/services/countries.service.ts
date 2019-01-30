import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries: Country[] = [
    {'id': 1, 'name': 'Mexico'},
    {'id': 2, 'name': 'USA'},
    {'id': 3, 'name': 'Canada'},
    {'id': 4, 'name': 'China'},
    {'id': 5, 'name': 'Japan'}
  ];

  constructor() { }

  public getCountries() {
    return this.countries;
  }

  public getCountryById(id: number) {
    return this.countries.filter(x => x.id === id)[0];
  }
}
