import React from 'react'
import CartItems from './Cart'

describe('<CartItems />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CartItems />)
  })
})