import React          from "react"
import { Component }  from "react"

import { Container }  from 'semantic-ui-react'

import ReferenzenlistePage  from "../referenzen/ReferenzenlistePage"

import Status         from "../messages/Status"

export default class DashboardPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // console.log('DashboardPage->props: ', this.props)
    return (
			<Container>
        <h3>Dashboard</h3>
        <p>Protected. Only logged users can see it.</p>

        <Status {...this.props} />
        <br />
        <br />
        
        <ReferenzenlistePage />

      </Container>
    )
  }
}
