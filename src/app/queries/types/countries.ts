/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: countries
// ====================================================

export interface countries_countries {
  __typename: "Country";
  name: string;
  capital: string | null;
  currency: string | null;
}

export interface countries {
  countries: countries_countries[];
}
