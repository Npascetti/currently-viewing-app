import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { renderRoutes } from 'react-router-config'
import { Content } from 'components'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const App = ({ route, location: { pathname } }) => (
  <Container>
    <Content>
      {renderRoutes(route.routes)}
    </Content>
  </Container>
)

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default App
