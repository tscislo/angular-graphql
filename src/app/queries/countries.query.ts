import gql from 'graphql-tag';

export const countriesQuery = gql`
          query countries {
              countries {
                name,
                capital,
                currency
            }
          }
        `;
