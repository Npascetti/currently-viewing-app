import React, { PureComponent } from 'react'
import { SubComponent } from 'components'

import { MUTATE_RECORD } from 'modules/home/gql'
import { Mutation } from "react-apollo"

export default class HomePage extends PureComponent {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>      
        <Mutation mutation={MUTATE_RECORD} >
          {(mutateRecord, { data }) => (
            <SubComponent mutate={ variables => mutateRecord({ variables }) } />
          )}
        </Mutation>
      </section>
    )
  }
}
