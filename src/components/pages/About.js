import React  from "react";

import { Container }  from 'semantic-ui-react'

import Status from "../messages/Status"

const About = (props) => {
  // console.log("About->props: ", props)
  return (
    	<Container>
      	<h3>About</h3>
      	<p>Not Protected. Anyone can see it.</p>

        <Status {...props} />

			</Container>
	)
}

export default About
