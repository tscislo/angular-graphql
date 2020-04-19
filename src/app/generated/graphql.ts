export type Maybe<T> = T | null;

export interface ContinentFilterInput {
  code?: Maybe<StringQueryOperatorInput>;
}

export interface StringQueryOperatorInput {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;
}

export interface CountryFilterInput {
  code?: Maybe<StringQueryOperatorInput>;

  currency?: Maybe<StringQueryOperatorInput>;

  continent?: Maybe<StringQueryOperatorInput>;
}

export interface LanguageFilterInput {
  code?: Maybe<StringQueryOperatorInput>;
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Upload = any;

// ====================================================
// Documents
// ====================================================

export namespace ContinentsWithCountries {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    continents: Continents[];
  };

  export type Continents = {
    __typename?: 'Continent';

    name: string;

    countries: Countries[];
  };

  export type Countries = {
    __typename?: 'Country';

    name: string;

    capital: Maybe<string>;

    currency: Maybe<string>;
  };
}

export namespace Countries {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    countries: Countries[];
  };

  export type Countries = {
    __typename?: 'Country';

    name: string;

    capital: Maybe<string>;

    currency: Maybe<string>;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

import gql from 'graphql-tag';

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: 'root'
})
export class ContinentsWithCountriesGQL extends Apollo.Query<
  ContinentsWithCountries.Query,
  ContinentsWithCountries.Variables
> {
  document: any = gql`
    query continentsWithCountries {
      continents {
        name
        countries {
          name
          capital
          currency
        }
      }
    }
  `;
}
@Injectable({
  providedIn: 'root'
})
export class CountriesGQL extends Apollo.Query<
  Countries.Query,
  Countries.Variables
> {
  document: any = gql`
    query countries {
      countries {
        name
        capital
        currency
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
