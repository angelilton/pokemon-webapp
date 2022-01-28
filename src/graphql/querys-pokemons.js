import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      types
      weight {
        maximum
      }
      height {
        maximum
      }
    }
  }
`

export const GET_POKEMON_DETAILS = gql`
  query pokemon_details($name: String!) {
    pokemon(name: $name) {
      id
      name
      image
      height {
        maximum
      }
      weight {
        maximum
      }
      evolutions {
        name
      }
      classification
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`
