import gql from 'graphql-tag';
import {Injectable} from '@angular/core';
import * as Apollo from 'apollo-angular';

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};


export enum CacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

export type Continent = {
  code: Scalars['ID'];
  name: Scalars['String'];
  countries: Array<Country>;
};

export type ContinentFilterInput = {
  code?: Maybe<StringQueryOperatorInput>;
};

export type Country = {
  code: Scalars['ID'];
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  continent: Continent;
  capital?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  languages: Array<Language>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  states: Array<State>;
};

export type CountryFilterInput = {
  code?: Maybe<StringQueryOperatorInput>;
  currency?: Maybe<StringQueryOperatorInput>;
  continent?: Maybe<StringQueryOperatorInput>;
};

export type Language = {
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
};

export type LanguageFilterInput = {
  code?: Maybe<StringQueryOperatorInput>;
};

export type Query = {
  continents: Array<Continent>;
  continent?: Maybe<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  languages: Array<Language>;
  language?: Maybe<Language>;
};


export type QueryContinentsArgs = {
  filter?: Maybe<ContinentFilterInput>;
};


export type QueryContinentArgs = {
  code: Scalars['ID'];
};


export type QueryCountriesArgs = {
  filter?: Maybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID'];
};


export type QueryLanguagesArgs = {
  filter?: Maybe<LanguageFilterInput>;
};


export type QueryLanguageArgs = {
  code: Scalars['ID'];
};

export type State = {
  code?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  country: Country;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};


export type ContinentsWithCountriesQueryVariables = {};


export type ContinentsWithCountriesQuery = {
  continents: Array<(
    Pick<Continent, 'name'>
    & { countries: Array<Pick<Country, 'name' | 'capital' | 'currency'>> }
    )>
};

export type CountriesQueryVariables = {};


export type CountriesQuery = { countries: Array<Pick<Country, 'name' | 'capital' | 'currency'>> };

export type OneCountryQueryVariables = {
  continent: Scalars['String'];
};


export type OneCountryQuery = {
  continents: Array<(
    Pick<Continent, 'code' | 'name'>
    & { countries: Array<Pick<Country, 'name' | 'capital' | 'currency'>> }
    )>
};

export const ContinentsWithCountriesDocument = gql`
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

@Injectable({
  providedIn: 'root'
})
export class ContinentsWithCountriesGQL extends Apollo.Query<ContinentsWithCountriesQuery, ContinentsWithCountriesQueryVariables> {
  document = ContinentsWithCountriesDocument;

}

export const CountriesDocument = gql`
  query countries {
    countries {
      name
      capital
      currency
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class CountriesGQL extends Apollo.Query<CountriesQuery, CountriesQueryVariables> {
  document = CountriesDocument;

}

export const OneCountryDocument = gql`
  query oneCountry($continent: String!) {
    continents(filter: {code: {eq: $continent}}) {
      code
      name
      countries {
        name
        capital
        currency
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class OneCountryGQL extends Apollo.Query<OneCountryQuery, OneCountryQueryVariables> {
  document = OneCountryDocument;

}
