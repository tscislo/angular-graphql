/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: continentsWithCountries
// ====================================================

export interface continentsWithCountries_continents_countries {
  __typename: "Country";
  name: string;
  capital: string | null;
  currency: string | null;
}

export interface continentsWithCountries_continents {
  __typename: "Continent";
  name: string;
  countries: continentsWithCountries_continents_countries[];
}

export interface continentsWithCountries {
  continents: continentsWithCountries_continents[];
}
