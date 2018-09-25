import gql from 'graphql-tag'

export const ALL_RECORD = gql`
  query records {
    records(data: true) {
      id,
      ip_address,
      time
    }
  }
`
export const MUTATE_RECORD = gql`
  mutation mutateRecord($ip_address: String!, $remove: Boolean!) {
    mutateRecord(input: {
      ip_address: $ip_address,
      remove: $remove
    }) 
    { mutated } 
  }
`
