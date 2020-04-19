import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {
  ContinentsWithCountriesGQL,
  ContinentsWithCountriesQuery,
  CountriesGQL,
  CountriesQuery,
  OneCountryGQL,
  OneCountryQuery
} from './generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public continents: Observable<ContinentsWithCountriesQuery['continents']>;

  constructor(
    private continentsWithCountriesGQL: ContinentsWithCountriesGQL,
    private countriesGQL: CountriesGQL,
    private oneCountryGQL: OneCountryGQL
  ) {
  }

  ngOnInit() {
    this.continents = this.continentsWithCountriesGQL
      .watch()
      .valueChanges
      .pipe(
        map(({data}) => data),
        map((data: ContinentsWithCountriesQuery) => data.continents)
      );

    this.countriesGQL
      .watch()
      .valueChanges
      .pipe(
        map(({data}) => data),
        map((data: CountriesQuery) => data.countries)
      ).subscribe((c: CountriesQuery['countries']) => {
      console.log(c);
    });

    // this.continents.subscribe((r) => {
    //   console.log(r);
    // });

    this.oneCountryGQL
      .watch({
        continent: 'EU'
      }).valueChanges
      .pipe(
        map(({data}) => data),
        map((data: OneCountryQuery) => data.continents)
      )
      .subscribe((c: OneCountryQuery['continents']) => {
        console.log('Continent -> ', c[0]?.name);
      });

  }
}
