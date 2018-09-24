import React, { PureComponent } from 'react'
import { Query } from 'components'
import getUserIp from 'utils/userIp'

import { ALL_RECORD } from 'modules/home/gql'

export default class SubComponent extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      ip_address: ''
    }    
  }

  componentDidMount() {
    getUserIp(ip_address => {
      this.setState({ ip_address }, () => this.handleMutate(false))
    })

    window.addEventListener("beforeunload", event =>  {        
      this.handleMutate(true)      
      return setTimeout(() => true, 500)
    })    
  }

  componentWillUnmount() {
    this.handleMutate(true)
  }

  handleMutate(remove = false) {
    if (this.state.ip_address)
      this.props.mutate({ remove,  ...this.state })
  }

  render() {
    return (
        <div>      
          <Query
            query={ALL_RECORD}
          >
            {({ data: { records } }) => (
              [ this.state, ...records.filter((ip_address) => ip_address !== this.state.ip_address) ].map((record, index) => (
                <p key={index}>
                  <span> { record.ip_address } </span>                
                </p>
              ))
            )}
          </Query>
      </div>
    )
  }
}