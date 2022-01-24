export default function buildAPIQuery(url, params) {
  let newUrl = url

  Object.keys(params).forEach((prop => {
    if (params[prop] != null) {
      newUrl = newUrl.concat(`${prop}=${params[prop]}&`)
    }
  }))
  return newUrl;
}
