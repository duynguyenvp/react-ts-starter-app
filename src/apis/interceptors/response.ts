export function onFullfilled(response: any) {
  return Promise.resolve(response)
}

export function onRejected(error: any) {
  if (error) {
    const { response } = error
    return Promise.reject(response && response.data)
  }
  return Promise.reject()
}
