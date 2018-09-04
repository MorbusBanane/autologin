import React					from 'react'
import { NavLink }		from 'react-router-dom'
// import { Component } 	from 'react'

// import { Menu } 			from 'semantic-ui-react'
// import { Dropdown } 	from 'semantic-ui-react'

// import logo 	 				from '../../images/logo.png'

const Navigation = ( {user} ) => {
// console.log("Navigation->props : ", props)

	const isAuthed = !!user
	// console.log("Navigation->isAuthed : ", isAuthed)

	const activeStyle = {
		fontWeight: 				'bold',
		color: 							'green',
		textDecoration:    	'none',
	}

	return (
		<div className="Navigation">
			{/* <h4>Navigation</h4> */}

			<NavLink to="/" exact 									activeStyle={activeStyle} >&nbsp;&nbsp;Home</NavLink>
			{isAuthed  &&	<NavLink to="/dashboard" 	activeStyle={activeStyle} >&nbsp;&nbsp;Dashboard</NavLink> }

			{!isAuthed &&	<NavLink to="/login" 			activeStyle={activeStyle} >&nbsp;&nbsp;Login</NavLink> }
			{!isAuthed &&	<NavLink to="/register" 	activeStyle={activeStyle} >&nbsp;&nbsp;Register</NavLink>}
			{isAuthed  &&	<NavLink to="/logout" 		activeStyle={activeStyle} >&nbsp;&nbsp;Logout</NavLink>}

			{/* isAuthed &&	<NavLink to="/test" 		activeStyle={activeStyle} >&nbsp;&nbsp;Test</NavLink> */}
			{isAuthed &&	<NavLink to="/eingabe" 		activeStyle={activeStyle} >&nbsp;&nbsp;Eingabe</NavLink> }

			<NavLink to="/about" 										activeStyle={activeStyle} >&nbsp;&nbsp;About</NavLink>

			<hr />

		</div>
	)
}

export default Navigation
