import React          from 'react'

import { Button }     from 'semantic-ui-react'
import { Container }  from 'semantic-ui-react'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '40vh',
    flexDirection: 'column'
  }
}

const NotFound = ( {location, history} ) => {
    return (
      <Container>
        <div style={styles.root}>
          <h1>(404) {location.pathname} wurde nicht gefunden!</h1>

          <Button
            // onClick={ () => history.push('/') }
            onClick={ () => history.goBack() }
          >
            Zurück
          </Button>
        </div>
      </Container>
  )
} ;

export default NotFound
