import React        from 'react'

import { Route } 	  from 'react-router-dom'
import { Redirect } from 'react-router-dom'

// export function PrivateRoute ({component: Component, isAuthed, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => isAuthed === true
//         ? <Component {...props} {...rest} />
//         : <Redirect to={{pathname: '/auth/login', state: {from: props.location}}} />}
//     />
//   )
// }

// export function PublicRoute ({component: Component, isAuthed, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => isAuthed === false
//         ? <Component {...props} />
//         : <Redirect to='/dashboard' />}
//     />
//   )
// }


export const PublicRoute = ( {component: Component, isAuthed, ...rest} ) => (
  <Route
    {...rest}
    render={(props) => isAuthed === false
      ? <Component {...props} />
      : <Redirect to='/dashboard' />}
  />
)

export const PrivateRoute = ( {component: Component, isAuthed, ...rest} ) => (
  <Route
    {...rest}
    render={(props) => isAuthed === true
      ? <Component {...props} {...rest} />
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
  />
)
