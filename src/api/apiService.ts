const request = (url: string, method = "post") => {
  // const headerDetails = {
  //   'Content-Type': 'application/json',
  // };
  return fetch(url, {
    method,
    // headers: headerDetails
    //methos, headers and body
  })
}

export {
  request
}