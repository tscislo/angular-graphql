import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import {continentsQuery} from './queries/continents.query';
import {continentsWithCountries, continentsWithCountries_continents} from './queries/types/continentsWithCountries';
import {Observable} from 'rxjs';
import {countriesQuery} from './queries/countries.query';
import {countries, countries_countries} from './queries/types/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public continents: Observable<continentsWithCountries_continents[]>;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.continents = this.apollo
      .watchQuery({
        query: continentsQuery,
      })
      .valueChanges
      .pipe(
        map(({data}) => data),
        map((data: continentsWithCountries) => data.continents)
      );

    setTimeout(() => {
      this.apollo
        .watchQuery({
          query: continentsQuery,
        })
        .valueChanges
        .pipe(
          map(({data}) => data),
          map((data: continentsWithCountries) => data.continents)
        ).subscribe((cont) => {
          console.log(cont)
      })
      // this.apollo
      //   .watchQuery({
      //     query: countriesQuery,
      //   })
      //   .valueChanges
      //   .pipe(
      //     map(({data}) => data),
      //     map((data: countries) => data.countries)
      //   ).subscribe((c: countries_countries[]) => {
      //   console.log(c);
      // });
    }, 2000);
  }
}
