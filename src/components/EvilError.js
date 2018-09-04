// import React  from "react"

const EvilError = (props) => {
  // console.log("Home->props: ", props)
  return (
    `Failed to load
    https://www.diesiedleronline.de/:
    Redirect from 'https://www.diesiedleronline.de/' to 'https://www.diesiedleronline.de/de'
    has been blocked by CORS policy:
    The 'Access-Control-Allow-Origin' header has a value 'https://www.diesiedleronline.de'
    that is not equal to the supplied origin. Origin 'http://localhost:3000' is therefore not allowed access.
    App.js:33 Error: Network Error
      at createError (createError.js:16)
      at XMLHttpRequest.handleError (xhr.js:87)
    `
  )
}

export default EvilError
