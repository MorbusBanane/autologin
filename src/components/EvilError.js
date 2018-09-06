// import React  from "react"

const EvilError = (props) => {
  // console.log("Home->props: ", props)
  return (
    `Failed to load http://www.facebook.de/:
    Redirect from 'http://www.facebook.de/' to 'https://de-de.facebook.com/' has been blocked by CORS policy:
    No 'Access-Control-Allow-Origin' header is present on the requested resource.
    Origin 'http://localhost:3000' is therefore not allowed access.
    `
  )
}

export default EvilError
