import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ContinentsWithCountriesGQL, ContinentsWithCountriesQuery, CountriesGQL, CountriesQuery} from './generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public continents: Observable<ContinentsWithCountriesQuery['continents']>;

  constructor(
    private continentsWithCountriesGQL: ContinentsWithCountriesGQL,
    private countriesGQL: CountriesGQL
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

    this.continents.subscribe((r) => {
      console.log(r);
    });

  }
}
