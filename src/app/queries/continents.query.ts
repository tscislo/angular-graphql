import gql from 'graphql-tag';

export const continentsQuery = gql`
          query continentsWithCountries {
            continents {
              name,
              countries {
                name,
                capital,
                currency
              }
            }
          }
        `;
